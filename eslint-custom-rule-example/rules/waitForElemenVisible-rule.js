/**
 * @fileoverview Custom ESLint rule for waitForElementVisible method in Nightwatch.js tests.
 * This rule enforces that the waitForElementVisible method should have at least two arguments.
 * @see {@link https://nightwatchjs.org/api/commands/#waitforvisible}
 * @module nightwatchCustomRules/waitForElementVisible-rule
 */

/**
 * Custom ESLint rule for waitForElementVisible method in Nightwatch.js tests.
 * @param {Object} context - The ESLint context object.
 * @returns {Object} ESLint rule definition.
 */
module.exports = {
    /**
     * Create function for ESLint rule.
     * @param {Object} context - The ESLint context object.
     * @returns {Object} ESLint rule definition.
     */
    create(context) {
        return {
            /**
             * CallExpression function to enforce the rule.
             * @param {ASTNode} node - The AST node representing the CallExpression.
             */
            CallExpression(node) {
                if (
                    node.callee.type === 'MemberExpression' &&
                    node.callee.property.name === 'waitForElementVisible' &&
                    node.arguments.length < 2
                ) {
                    context.report({
                        node,
                        message:
                            'waitForElementVisible method should have at least two arguments.',
                    });
                }
            },
        };
    },
};
