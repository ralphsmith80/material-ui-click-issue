describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });

  it('navigates to about', () => {
    cy.get('[data-cy=about-link]').click();
    cy.url().should('include', '/about');
    cy.get('[data-cy=about]').should('contain', 'About');
  });

  it('navigates to users', () => {
    cy.get('[data-cy=users-link]').click();
    cy.url().should('include', '/users');
    cy.get('[data-cy=users]').should('contain', 'Users');
  });

  it('navigates to home', () => {
    cy.visit('/about');
    cy.get('[data-cy=home-link]').click();
    cy.url().should('include', '/');
    cy.get('[data-cy=home]').should('contain', 'Home');
  });
});
