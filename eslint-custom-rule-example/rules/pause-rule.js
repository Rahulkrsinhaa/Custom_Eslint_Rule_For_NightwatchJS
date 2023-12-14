/**
 * @fileoverview ESLint Rule for 'pause' Method
 * This rule checks whether the 'pause' method in JavaScript has at least one argument.
 * @see {@link https://eslint.org/docs/developer-guide/working-with-rules}
 */

/**
 * ESLint Rule Definition for 'pause' Method
 * @type {object}
 */
module.exports = {
    /**
     * Create method for ESLint rule.
     * @param {RuleContext} context - The ESLint rule context.
     * @returns {object} - ESLint rule listeners.
     */
    create(context) {
      return {
        /**
         * CallExpression listener for 'pause' method.
         * @param {Node} node - The AST node for the CallExpression.
         */
        CallExpression(node) {
          if (
            node.callee.type === 'MemberExpression' &&
            node.callee.property.type === 'Identifier' &&
            node.callee.property.name === 'pause' &&
            node.arguments.length === 0
          ) {
            context.report({
              node,
              message: 'pause method should have at least one argument.',
            });
          }
        },
      };
    },
  };
  