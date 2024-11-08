describe('Checkbox', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
    })

    it('Deve marcar as linguagens que usam Node.js', () => {
        cy.goTo('/checkbox', 'Checkbox')

        cy.get('label[for="javascript"]')
            .click()
        cy.get('label[for="typescript"]')
            .click()
    })

    it('Deve marcar todas as opções', () => {
        cy.goTo('/checkbox', 'Checkbox')

        const languages = ['javascript', 'python', 'rust', 'go', 'typescript']

        languages.forEach(language => {
            cy.get(`label[for="${language}"]`)
                .click()
        })
    })

})

