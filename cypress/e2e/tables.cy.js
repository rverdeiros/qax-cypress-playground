describe('Tables', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/tables', 'Tables')
    })

    it('Deve validar a linha do Github', () => {
        cy.contains('table tbody tr', '1004')
            .should('be.visible')
            .and('contain', 'Github')
            .and('contain', 'papitodev')
            .and('contain', 'Ativo')
    })

    it('Deve remover uma rede social', ()=>{
        const name = 'facebook'

        cy.contains('table tbody tr', '1002')
            .find('.remove-item')
            .click()
        
        cy.contains('button', 'Excluir')
            .click()
        
        cy.get('table tbody')
            .should('not.contain', name)
    })
   
    it('Deve permanecer na tabela ao clicar em cancelar', ()=>{
        const name = 'Youtube'

        cy.contains('table tbody tr', '1005')
            .find('.remove-item')
            .click()
        
        cy.contains('button', 'Cancelar')
            .click()
        
        cy.get('table tbody')
            .should('contain', name)
    })

})

