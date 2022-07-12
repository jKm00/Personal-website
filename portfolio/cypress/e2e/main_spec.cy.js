describe('UI tests', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	it('Test nav buttons', () => {
		cy.contains('Home').click();
		cy.url().should('not.include', '#');
		cy.contains('Portfolio').click();
		cy.url().should('include', '/portfolio');
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
