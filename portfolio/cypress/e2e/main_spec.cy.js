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
