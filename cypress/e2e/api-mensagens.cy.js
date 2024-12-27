describe('Api Adopet', () => {
    
    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/99115d73-d55d-4a42-86fa-8492fb53cc68',
            headers: Cypress.env(),
        }).then((res) =>{
            expect(res.status).to.be.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body).to.have.property('msg');
        });
    });
});