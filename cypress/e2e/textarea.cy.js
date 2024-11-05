describe('Text Area', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
    })

    it('Deve preencher o campo de área de texto', () => {
        cy.goTo('/textarea', 'Textarea')

        cy.get('textarea[name="message"]')
            .type('Boas vindas ao Cypress Skills. Um curso completo para você aprender sobre automação de textes com o Cypress.')
    })
})

