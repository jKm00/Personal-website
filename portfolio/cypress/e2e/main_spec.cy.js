describe('UI tests', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	it('Test nav buttons', () => {
		cy.viewport(414, 896);

		/* Without this, a race condition happens where the click
		is triggered before the event listener is applied to the
		element, resulting in the test clicking the element
		but nothing happens because there are no events listening */
		cy.wait(100);
		cy.get('[aria-label="hamburger"]').click();
		cy.get('.nav').should('have.class', 'nav--open');
		cy.contains('Work').click();
		cy.url().should('include', '#work');
	});
});

describe('API test', () => {
	it('Gets all projects', () => {
		cy.request('/projects').as('projectsRequest');
		cy.get('@projectsRequest').then((response) => {
			expect(response.status).to.equal(200);
			expect(response.body.projects.length).to.equal(6);
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
