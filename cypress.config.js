const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'owugpk',
  //projectId: 'e2e',
  // ...rest of the Cypress project config

  e2e: {
    baseUrl: 'https://stg-prebooking.cdc.ais.th',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
