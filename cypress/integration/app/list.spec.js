describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('navigates to inbox', () => {
    cy.get('[data-cy=inbox-link]').click();
    cy.url().should('include', '/inbox');
    cy.get('[data-cy=inbox]').should('contain', 'inbox');
  });

  it('navigates to drafts', () => {
    cy.get('[data-cy=drafts-link]').click();
    cy.url().should('include', '/drafts');
    cy.get('[data-cy=drafts]').should('contain', 'drafts');
  });

  it('navigates to trash', () => {
    cy.get('[data-cy=trash-link]').click();
    cy.url().should('include', '/trash');
    cy.get('[data-cy=trash]').should('contain', 'trash');
  });

  it('navigates to spam', () => {
    cy.get('[data-cy=spam-link]').click();
    cy.url().should('include', '/spam');
    cy.get('[data-cy=spam]').should('contain', 'spam');
  });
});
