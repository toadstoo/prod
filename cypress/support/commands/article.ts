import { Article } from '../../../src/entities/Article/';

const defaultArticle = {
    title: 'TESTING ARTICLE',
    subtitle: 'Экономика',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNuGA5XQzemyoJYYwbrsovQXVurI7UmJDs4ygpTG1VXTd7X7144HV6nas&s=10',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: ['ECONOMICS'],
};

export const createArticle = (article?: Article) => {
    cy.request({
        method: 'POST',
        url: `http://localhost:8000/articles`,
        headers: { Authorization: 'asdasd' },
        body: article ?? defaultArticle,
    }).then((resp) => resp.body);
};

export const removeArticle = (articleId: string) => {
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'asdasd' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<Article>;
        }
    }
}
