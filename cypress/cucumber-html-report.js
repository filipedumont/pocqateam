'use strict'
const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "cypress/cucumber-json",
    reportPath: "./reports/cucumber-htmlreport",
    metadata: {
        browser: {
            name: "chrome",
            version: "91",
        },
        device: "Local test machine",
        platform: {
            name: "macOS",
            version: "Big Sur"
        },
    },
});