# Playwright Test Automation Project with Cucumber BDD and Page Object Model Architecture

This repository contains a test automation project that uses the Playwright framework for browser automation, Cucumber for Behavior-Driven Development (BDD) testing, and follows the Page Object Model (POM) architecture. The project is designed to automate web application testing and facilitate collaboration between testers and developers.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Visual Studio Code (VS Code) is installed on your machine. If not, you can download it from [https://code.visualstudio.com/](https://code.visualstudio.com/).
- Node.js is installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).

## Installation

To set up this project, follow these steps:

1. Clone the repository to your local machine:

```bash
   git clone https://github.com/gurpreetskairon/playwright-cucumber-pom.git
```

2. Open the project folder in Visual Studio Code:

```bash
   cd playwright-cucumber-pom
   code .
```
Intall Playwright for VSCode plugin

3. Install Playwright using npm:
```bash
   npm init playwright@latest
```
Install Cucumber plugin


## Dependencies

The following npm packages and plugins are used in this project:

- [Playwright](https://playwright.dev/): A Node.js library to automate Chromium, Firefox, and WebKit browsers.
- [Cucumber](https://cucumber.io/): A popular BDD testing framework.
- [Playwright Cucumber](https://github.com/microsoft/playwright-cucumber): A package that integrates Playwright with Cucumber for BDD testing.
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that enhances code quality.
- [Page Object Model](https://www.selenium.dev/documentation/en/guidelines_and_recommendations/page_object_models/): A design pattern used for organizing and maintaining tests by encapsulating the page-specific logic in classes called Page Objects.

## Project Structure

The project follows the Page Object Model (POM) architecture, separating page-specific logic from test scripts. Here's an overview of the project structure:

```
playwright-cucumber-pom/
├── features/                    # Cucumber feature files
│   ├── example.feature
│   └── ...
├── pages/                       # Page Object Model classes
│   ├── LoginPage.ts
│   ├── HomePage.ts
│   └── ...
├── step_definitions/             # Step definitions for Cucumber
│   ├── example.steps.ts
│   └── ...
├── support/                     # Cucumber support code
│   ├── hooks.ts
│   ├── world.ts
│   └── ...
├── package.json                 # Node.js dependencies and project information
├── tsconfig.json                # TypeScript configuration
└── README.md                    # Project documentation (you are here)
```

## Running Tests

To run the tests, use the following command:

```bash
npm test
```

This command will execute Cucumber tests using Playwright in a headless browser by default. You can configure the test environment and browser settings in the configuration files.

## Configuration

You can configure the test environment and other settings in the following files:

- `cucumber.js`: Configure Cucumber settings.
- `playwright-config.ts`: Configure Playwright settings (e.g., browsers, launch options).
- `tsconfig.json`: Configure TypeScript settings.

## Reporting

Test reports can be generated using Cucumber's built-in reporting capabilities. You can find the reports in the `./reports` directory after running the tests.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes.
4. Write tests if necessary.
5. Commit your changes and push them to your fork.
6. Create a pull request to the `main` branch of the original repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
