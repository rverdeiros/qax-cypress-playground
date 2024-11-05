describe('Tags', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/tags', 'Tags')
    })

    it('Deve adicionar algumas tags', () => {

        const tags = ['Cypress', 'JavaScript', 'NodeJs']

        tags.forEach(tag => {
            cy.get('[data-testid="new-tag-input"]')
                .type(`${tag}{Enter}`)
                .should('have.value', '')
            cy.wait(500)
        })

        tags.forEach(tag =>{
            cy.get('.tag-input')
                .should('contain', tag)
        })


    })

})

