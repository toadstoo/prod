describe('Пользователь заходит на страницу со статьями', () => {
  beforeEach(() => {
    cy.login().then(data => {
      cy.visit('articles');
    });
  });
  
  it('и статьи успешно подгружаются', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleList').should('have.length.greaterThan', 3)
  })
})