describe('PDF', () => {

    it.skip('Deve validar o conteúdo do recibo em PDF', () => {

        cy.task('readPdf', 'cypress/downloads/recibo.pdf') //Task criada no cypress config e no aqeuivo support/helper
            .should('contain', 'Papito Shop')
    })
})

