const { defineConfig } = require("cypress");
const { readPdf } = require('./cypress/support/helper') //importando o arquivo helper que tem a função readPdf

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        readPdf // Definindo a função como uma task do cypress
      })
    },
    baseUrl: 'https://playground.cyskills.com.br',
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true
  },
});
