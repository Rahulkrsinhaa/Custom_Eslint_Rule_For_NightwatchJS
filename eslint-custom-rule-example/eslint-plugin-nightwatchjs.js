/**
 * @fileoverview Custom ESLint Plugin for Nightwatch.js Rules
 * Exports custom ESLint rules for Nightwatch.js frontend automation.
 * @see {@link https://eslint.org/docs/developer-guide/working-with-plugins}
 */

// Importing custom ESLint rules
const pauseRule = require("./rules/pause-rule");
const waitForElementNotVisibleRule = require("./rules/waitForElementNotVisible-rule");
const waitForElementPresentRule = require("./rules/waitForElementPresent-rule");
const waitForElementVisibleRule = require("./rules/waitForElementVisible-rule");

/**
 * Custom ESLint Plugin for Nightwatch.js Rules
 * @type {object}
 */
const plugin = {
  rules: {
    /**
     * Rule for the 'pause' method.
     * @see {@link ./rules/pause-rule.js}
     */
    "pause-rule": pauseRule,

    /**
     * Rule for 'waitForElementNotVisible' method.
     * @see {@link ./rules/waitForElementNotVisible-rule.js}
     */
    "waitForElementNotVisible-rule": waitForElementNotVisibleRule,

    /**
     * Rule for 'waitForElementPresent' method.
     * @see {@link ./rules/waitForElementPresent-rule.js}
     */
    "waitForElementPresent-rule": waitForElementPresentRule,

    /**
     * Rule for 'waitForElementVisible' method.
     * @see {@link ./rules/waitForElementVisible-rule.js}
     */
    "waitForElementVisible-rule": waitForElementVisibleRule,
  },
};

module.exports = plugin;
