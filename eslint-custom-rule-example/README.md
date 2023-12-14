# TechHub Template

**This template project serves as a guide for implementing custom ESLint rules for Nightwatch.js and testing them using Nightwatch.js itself. The project is structured into two main folders: `eslint-custom-rule-example` and `testcode`.**

## Project Structure

### `eslint-custom-rule-example`

#### Custom Rules

This folder contains custom ESLint rules for specific Nightwatch.js methods:

- `pause-rule`
- `waitForElementNotPresent-rule`
- `waitForElementNotVisible-rule`
- `waitForElementPresent-rule`
- `waitForElemenVisible-rule`

### `eslint-custom-rule-example/rules`

This subfolder contains the actual rule implementations mentioned above.

### `eslint-custom-rule-example/eslint-plugin-nightwatchjs.js`

This file is the ESLint plugin configuration that defines the rules and their implementations.

### `testcode`

#### Test Code

This folder is dedicated to testing the custom ESLint rules using Nightwatch.js.

### `testcode/test`

This subfolder holds the actual Nightwatch.js test file (`test.js`) that exercises the custom rules.

## Configuring ESLint for Testing

To test the custom ESLint rules, follow these steps:

1. **Install ESLint:**
    ```bash
    npm install eslint --save-dev
    ```

2. **Configure Rules:**
    - Navigate to the `eslint-custom-rule-example` folder.
    - Define custom rules in the `rules` folder.
    - Configure the rules in `eslint-plugin-nightwatchjs.js`.

3. **Create Nightwatch Configuration:**
    ```bash
    npm init nightwatch
    ```

4. **Create Test Code:**
    Write test code in the `testcode/test` folder to test your custom rules.

5. **Configure ESLint for Testing:**
    - In the `testcode` folder, create an ESLint configuration file (`eslint.config.js`).
    - Import the local ESLint plugin from `eslint-custom-rule-example`.
    - Run ESLint for testing:
      ```bash
      npx eslint test/test.js
      ```

