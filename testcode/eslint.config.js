/**
 * @fileoverview Nightwatch.js ESLint Configuration
 * This configuration is used to enforce custom ESLint rules for Nightwatch.js tests.
 * @see {@link https://nightwatchjs.org/}
 * @see {@link https://eslint.org/}
 */

"use strict";

// Importing the custom ESLint plugin for Nightwatch.js
const eslintPluginExample = require("../eslint-custom-rule-example/eslint-plugin-nightwatchjs");

/**
 * Nightwatch.js ESLint Configuration
 */
module.exports = [
    {
        // Specify the files to apply ESLint rules
        files: ["**/*.js"],
        // Language options for ESLint
        languageOptions: {
            sourceType: "commonjs",
            ecmaVersion: "latest",
        },
        // Using the eslint-plugin-example plugin defined locally
        plugins: { "nightwatchCustomRules": eslintPluginExample },
        // ESLint rules to enforce
        rules: {
            "nightwatchCustomRules/pause-rule": "warn",
            "nightwatchCustomRules/waitForElementNotVisible-rule": "warn",
            "nightwatchCustomRules/waitForElementPresent-rule": "warn",
            "nightwatchCustomRules/waitForElemenVisible-rule": "warn",
        },
    },
];
