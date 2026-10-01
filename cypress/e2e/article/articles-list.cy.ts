describe('Пользователь заходит на страницу со статьями', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('articles');
        });
    });

    it('и статьи успешно подгружаются', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });

    it('На стабах (фикстурах)', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'article.json' });
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });

    it.skip('Скип теста', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleList').should('have.length.greaterThan', 3);
        cy.getByTestId('dfsafs').should('exist');
    });
});
