import '../support/login-commands.js';

describe('Mensagem para o responsavél incorreta', () =>{
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
    });

    it('Deve identificar o item falar com responsável', () => {
        cy.login('aline@gmail.com', '12Al34');
        cy.get(':nth-child(2) > .card__contact').should('be.visible');
        cy.get(':nth-child(2) > .card__contact').click();
    });

    it('Deve clicar no botão enviar sem preencher nenhum campo e identificar as mensagens de erro', () => {
        cy.login('aline@gmail.com', '12Al34');
        cy.get(':nth-child(2) > .card__contact').should('be.visible');
        cy.get(':nth-child(2) > .card__contact').click();
        cy.get('[data-test="submit-button"]').click();
        cy.contains('É necessário informar seu nome').should('be.visible');
        cy.contains('Informe um número de telefone').should('be.visible');
        cy.contains('É necessário informar o nome do animal').should('be.visible');
        cy.contains('É necessário escrever uma mensagem').should('be.visible');
    });
});