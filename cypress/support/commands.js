// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('goHome', () => {
    cy.visit('/')

    cy.contains('h2', 'Faça login')
        .should('be.visible')
})

//Custom command Helper
Cypress.Commands.add('doLogin',  () => {
    cy.login('papito@cyskills.com.br', 'showtime')
    cy.userLoggedIn()
})

Cypress.Commands.add('login', (email, password) => {
    
    email ? cy.get('[data-cy="email"]').type(email) : cy.log('e-mail não informado')
    password ? cy.get('[data-cy="password"]').type(password) : cy.log('senha não informada')
    
    cy.get('[data-cy="login-button"]').click()
})

Cypress.Commands.add('noticeHave', (text) => {
    cy.get('.notice p')
        .should('be.visible')
        .and('have.text', text)
})

Cypress.Commands.add('userLoggedIn', () => {
    cy.get('[data-cy="welcome-title"]')
        .should('be.visible')
        .and('have.text', 'Boas vindas ao Cypress Playground')
})

Cypress.Commands.add('goTo', (route, title)=>{
    cy.get(`nav a[href="${route}"]`)
        .click()

    cy.contains('h2', title)
        .should('be.visible')
})