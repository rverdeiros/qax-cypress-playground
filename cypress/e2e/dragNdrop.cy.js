describe('Drag and Drop', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/tasks', 'Task Board')
    })

    it('Deve finalizar uma tarefa', () => {
        const task = 'Definir requisitos do projeto'

        //Armazenando a classe DataTransfer na constante
        const dataTransfer = new DataTransfer()

        //Identificando o elemento que vai ser transferido, em seguida chamando o trigger inicial da função.
        cy.contains('div[draggable="true"]', task)
            .trigger('dragstart', {
                dataTransfer
            })

        //Identificando o elemento que vai receber a transferência, em seguida chamando o trigger final da função.
        cy.contains('h4', 'Done')
            .parent()
            .trigger('drop', {
                dataTransfer
            })
    
        //Conferindo se o texto foi transferido para a coluna correta.
        cy.contains('h4', 'Done')
            .parent()
            .contains('div[draggable="true"]', task)
            .should('be.visible')
    })
})

