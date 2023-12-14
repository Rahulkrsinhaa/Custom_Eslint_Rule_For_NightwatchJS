/**
 * @fileoverview Custom ESLint rule for Nightwatch.js: waitForElementNotVisible
 * This rule checks that the waitForElementNotVisible method has at least two arguments.
 * @see {@link https://nightwatchjs.org/}
 * @see {@link https://eslint.org/}
 */

/**
 * Custom ESLint rule for waitForElementNotVisible
 * @type {Object}
 */
module.exports = {
    /**
     * Create function for ESLint rule
     * @param {Object} context - ESLint context object
     * @returns {Object} ESLint rule definition
     */
    create(context) {
      /**
       * ESLint rule definition
       * @type {Object}
       */
      return {
        /**
         * CallExpression handler for the rule
         * @param {Object} node - AST node representing the CallExpression
         */
        CallExpression(node) {
          if (
            node.callee.type === 'MemberExpression' &&
            node.callee.property.name === 'waitForElementNotVisible' &&
            node.arguments.length < 2
          ) {
            context.report({
              node,
              message:
                'waitForElementNotVisible method should have at least two arguments.',
            });
          }
        },
      };
    },
  };
  