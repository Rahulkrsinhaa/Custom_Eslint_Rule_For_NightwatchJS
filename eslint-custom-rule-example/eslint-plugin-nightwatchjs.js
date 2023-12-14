/**
 * @fileoverview Custom ESLint Plugin for Nightwatch.js Rules
 * Exports custom ESLint rules for Nightwatch.js frontend automation.
 * @see {@link https://eslint.org/docs/developer-guide/working-with-plugins}
 */

// Importing custom ESLint rules

const pausrule = require("./rules/pause-rule");
const waitForElementNotVisibleRule =require ("./rules/waitForElementNotVisible-rule");
const waitForElementPresent =require ("./rules/waitForElementPresent-rule");
const waitForElemenVisible =require("./rules/waitForElemenVisible-rule")

/**
 * Custom ESLint Plugin for Nightwatch.js Rules
 */
const plugin = {
  rules: {
    /**
     * Rule for the 'pause' method.
     */
    "pause-rule":pausrule,

    /**
     * Rule for 'waitForElementNotVisible' method.
     */
    "waitForElementNotVisible-rule":waitForElementNotVisibleRule,

    /**
     * Rule for 'waitForElementPresent' method.
     */
    "waitForElementPresent-rule":waitForElementPresent,

    /**
     * Rule for 'waitForElementVisible' method.
     */
    "waitForElemenVisible-rule":waitForElemenVisible
  },
};

module.exports = plugin;
