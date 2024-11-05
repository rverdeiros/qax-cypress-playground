describe('input fields', () => {

    beforeEach(() => {
        cy.goHome()
        cy.goHome()
        cy.doLogin()
      })
    it('Deve preencher o campo texto', ()=>{
        cy.get('nav a[href="/input-fields"]')
            .click()
        
        cy.contains('h2', 'Input Fields')
            .should('be.visible')

        cy.get('[data-cy="fullname"]')
            .type('Fernando Papito')
        
        cy.get('[data-cy="email"]')
            .type('email@teste.com')

        cy.get('[data-cy="number"]')
            .type('2024')
        
            cy.get('[data-cy="date"]')
            .type('2024-12-01')
    })
})