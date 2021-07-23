'use strict'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

const AUTH_FORM = '.authentication-form'
const EMAIL_INPUT = 'input[data-cm-track="email-input"]'
const PASSWORD_INPUT = 'input[data-cm-track="password-input"]'

Given(/^I launch the core-app page$/, () => {
    cy.visit('/');
});

Then(/^I should see the login page$/, () => {
    cy.url().should('include', 'login')
});

Then(/^I should see the login form$/, () => {
    cy.get(AUTH_FORM).should('be.visible')
    cy.get(EMAIL_INPUT).should('be.visible')
    cy.get(PASSWORD_INPUT).should('be.visible')
});