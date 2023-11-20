# Cypress Sample
Winning Cypress automation test with typescript.

```
CYPRESS-AUTOMATION
├───cypress
│   ├───downloads
│   ├───fixtures
│   ├───e2e
│   ├───pages
│   ├───plugins
│   ├───screenshots
│   ├───support
│   └───videos
└───node_modules
```

## Local eetup to run the test:
1. Install [Microsoft Visual Studio Code IDE](https://code.visualstudio.com). Ignore this if already installed.
3. Install [Nodejs](https://nodejs.org/) on your system. Ignore this if already installed.
4. ```git clone https://github.com/TestAutomationPlay/winning_auto.git``` 
5. Open project folder with VSCode.
6.  Run  `npm install` command to restore all packages.
7.  Run `npm run cypress:run` command to run test.

## New setup if required:
1. Install [Microsoft Visual Studio Code IDE](https://code.visualstudio.com). Ignore this if already installed.
3. Install [Nodejs](https://nodejs.org/) on your system. Ignore this if already installed.
4. Install [Git](https://git-scm.com/download/) on your system. Ignore this if already installed.
5. Open project folder with VSCode.
6. Run `npm init -y` command to initilized project.
7. Run `npm install cypress --save-dev` command to install cypress.
8. Run `npm install typescript --save-dev` command to install typescript.
9. Run `npx tsc --init --types cypress --lib dom,es6` command to configure typescript.
10. Run `npx cypress open` command to run test.