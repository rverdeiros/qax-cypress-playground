describe('CEP', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/cep', 'CEP (API dos Correios)')
    })

    it('Deve cadastrar um endereço consumindo a API dos correios', () => {
        
        const address = {
            cep: '04534011',
            logradouro: 'Rua Joaquim Floriano',
            localidade: 'São Paulo',
            uf: 'SP',
        }
        //Intercept espião para manipular o resultado da request e atribuir um alias 'getCep'
        cy.intercept('GET', `https://viacep.com.br/ws/${address.cep}/json/`, {
            statusCode: 200,
            body: address
        }).as('getCep')

        cy.get('input[name="cep"]').type('04534011')
        cy.contains('button', 'Cadastrar').click()

        //Aguardando a request 'getCEP' acontecer e retornar as informações definido no intercept.
        cy.wait('@getCep', {timeout: 10000})

        cy.get('input[name="logradouro"]', {timeout: 10000})
            .should('have.value', address.logradouro)
        
        cy.get('input[name="cidade"]', {timeout: 10000})
            .should('have.value', address.localidade)
        
        cy.get('input[name="estado"]', {timeout: 10000})
            .should('have.value', address.uf)
    })
})

