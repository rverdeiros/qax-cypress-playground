describe('Radio buttons', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
    })

    it('Deve marcar o framework usado no Curso Cypress Skills', () => {
        cy.goTo('/radio', 'Radio Buttons')

        cy.contains('label', 'Cypress')
            .click()
    })

})

