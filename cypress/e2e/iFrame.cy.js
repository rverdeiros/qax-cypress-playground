describe('Date Picker', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/iframe', 'IFrame')
    })

    it('Deve preencher o nome em uma página que contenha um iframe', () => {
        //O iFrame carrega um outra página dentro da página onde está localizado.
        //Para mapear, precisamos encontrar a div que contém o iFrame e o #document

        cy.get('[data-cy="iframe-inputs"]')
            .then(($iframe)=>{
                //Obtendo o body da página iFrame
                const $body = $iframe.contents().find('body')
                
                //função para catalogar o body da página e obter os recursos da mesma.
                cy.wrap($body)
                    .find('#fullname')
                    .type('Fernando Papito')
            })
        
    })

})

