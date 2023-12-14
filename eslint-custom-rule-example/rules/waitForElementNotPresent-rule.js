// eslint-plugin-custom-rules.js

module.exports = {

        create(context) {
          return {
            CallExpression(node) {
              if (
                node.callee.type === 'Identifier' &&
                node.callee.name === 'waitForElementNotPresent' &&
                node.arguments.length < 2
              ) {
                context.report({
                  node,
                  message: 'waitForElementNotPresent method should have at least two arguments.',
                });
              } else if (
                node.callee.type === 'Identifier' &&
                node.callee.name === 'waitForElementNotPresent' &&
                node.arguments.length === 2 &&
                node.arguments[1].name !== 'timeInMilliSeconds'
              ) {
                context.report({
                  node: node.arguments[1],
                  message: 'The second argument of waitForElementNotPresent should be named timeInMilliSeconds.',
                });
              }
            },
          };
        },
      };

  