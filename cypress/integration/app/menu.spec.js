describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('navigates to menu-inbox', () => {
    cy.get('[data-cy=menu-inbox-link]').click();
    cy.url().should('include', '/menu-inbox');
    cy.get('[data-cy=menu-inbox]').should('contain', 'menu-inbox');
  });

  it('navigates to menu-drafts', () => {
    cy.get('[data-cy=menu-drafts-link]').click();
    cy.url().should('include', '/menu-drafts');
    cy.get('[data-cy=menu-drafts]').should('contain', 'menu-drafts');
  });
});
