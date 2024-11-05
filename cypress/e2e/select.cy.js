describe('Select', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/select', 'Select')
    })

    it('Deve selecionar o Cypress', () => {
        cy.contains('label', 'Selecione um Framework de Testes')
            .parent()
            .find('select')
            .select('Cypress')
    })

    it('Deve escolher as linguagens que usam Node.js', () => {

        const languages = ['JavaScript', 'TypeScript']
        //O seletor abaixo usa o ^ após placeholder. 
        //Isso é para buscar um placeholder que comece com o texto indicado
        cy.get('input[placeholder^="Linguagens de programação"]')
            .click()

        languages.forEach((lang => {
            //A expressão regular faz a validação para buscar um texto que começa e termina com o valor informado no parâmetro
            cy.contains('.option-item', new RegExp("^" + lang + "$")).click()
        }))

        cy.get('.language-item').should('have.length', languages.length)
    })

})

