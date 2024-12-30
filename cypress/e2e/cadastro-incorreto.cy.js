describe('Página de Cadastro', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="register-button"]').click();
    });
    
    it('Deve clicar no botão cadastrar sem ter inserido nenhum dado', () => {
        cy.get('[data-test="submit-button"]').click();
        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Crie uma senha').should('be.visible');
        cy.contains('Repita a senha criada acima').should('be.visible');
    });

    it('Deve preencher os campos do formulário incorretamente para cadastrar um novo usuário', () => {
        cy.get('[data-test="input-name"]').type('Marjorie Estiano');
        cy.get('[data-test="input-email"]').type('marjorie2@email.com');
        cy.get('[data-test="input-password"]').type('Senha123');
        cy.get('[data-test="input-confirm-password"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
    });

});