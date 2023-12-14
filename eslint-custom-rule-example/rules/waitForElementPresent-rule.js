/**
 * @fileoverview Custom ESLint rule for Nightwatch.js: waitForElementPresent Method
 * This rule enforces that the waitForElementPresent method on an object should have at least two arguments.
 * @see {@link https://nightwatchjs.org/}
 * @see {@link https://eslint.org/}
 */

/**
 * Custom ESLint Rule for waitForElementPresent Method
 * @module eslint-plugin-custom-rules
 * @type {Object}
 */
module.exports = {
  /**
   * Rule creator function.
   * @param {Object} context - The ESLint rule context object.
   * @returns {Object} ESLint rule definition.
   */
  create(context) {
    return {
      /**
       * ESLint rule to check CallExpressions for waitForElementPresent method.
       * @param {Object} node - The CallExpression node being analyzed.
       */
      CallExpression(node) {
        if (
          node.callee.type === 'MemberExpression' &&
          node.callee.property.name === 'waitForElementPresent' &&
          node.arguments.length < 2
        ) {
          context.report({
            node,
            message: 'waitForElementPresent method should have at least two arguments.',
          });
        }
      },
    };
  },
};
