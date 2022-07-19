describe('UI tests', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	it('Test mobile nav', () => {
		cy.viewport(414, 896);

		/* Without this, a race condition happens where the click
		is triggered before the event listener is applied to the
		element, resulting in the test clicking the element
		but nothing happens because there are no events listening */
		cy.wait(100);
		cy.get('[aria-label="hamburger"]').click();
		cy.get('.nav').should('have.class', 'nav--open');
		cy.contains('About').click();
		cy.url().should('include', '#about');
	});

	it('Test desktop nav', () => {
		cy.get('.nav').contains('About').click();
		cy.url().should('include', '#about');
	});

	it('Test nav while rescaling', () => {
		cy.get('[aria-label="hamburger"]').should('not.be.visible');
		cy.viewport(414, 896);
		cy.wait(100);
		cy.get('[aria-label="hamburger"]').should('be.visible').click();
		cy.viewport(1000, 900);
		cy.get('.nav__socials').should('not.be.visible');
	});

	it('Test navigation between pages', () => {
		cy.get('.nav').contains('Resume').click();
		cy.url().should('include', '/resume');
	});
});

describe('API test', () => {
	it('Gets all projects', () => {
		cy.request('/projects').as('projectsRequest');
		cy.get('@projectsRequest').then((response) => {
			expect(response.status).to.equal(200);
			expect(response.body.projects.length).to.equal(3);
		});
	});

	it('Get specific project', () => {
		cy.request('/projects/1').as('projectRequest');
		cy.get('@projectRequest').then((response) => {
			expect(response.status).to.equal(200);
			expect(response.body.project.id).to.equal(1);
		});
	});
});
