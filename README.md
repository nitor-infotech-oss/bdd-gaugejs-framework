# Agnes Test Automation Framework and TestSuite

## Table of Contents
- [Agnes Middleware Test Automation Framework and TestSuite](#agnes-test-automation-framework-and-testsuite)
  * [Setup](#setup)
  * [Gulp](#gulp)
  * [Usage](#usage)
  * [Agnes Structure](#agnes-structure)
  * [Developing Tests](#developing-tests)

## Setup
Follow below steps:
1. Install [NodeJS and NPM](https://docs.npmjs.com/getting-started/installing-node)
2. Unzip the framework code
3. Go to root directory of framework code. Lets call this root as `<projectRoot>`
4. On command line: `npm install`
5. Install [Gulp](https://www.npmjs.com/package/gulp-cli) command line
6. Install [Gauge](https://getgauge.io/get-started.html) .While installation, dont select any runners.
7. Install Javascript runner for gauge using command line: `gauge --install js`
8. Verify that runner is installed using: `gauge -v`
9. Install Gauge html-report plugin using: `gauge --install html-report`
10. if Mobile Automation is required then Install [Appium](http://appium.io/) 

Additional installation steps for Oracle client to work:
1.	Do a step by step installation provided on [link](https://community.oracle.com/docs/DOC-931127) till step “IV Set Environment Variables”
2.	Unzip your folder
3.	Run npm install (this will install oracle dependencies as well)
4.	Add DB credentials in env/qa/qa.properties
5.	Run “gauge –verbose –env QA –tags db specs/


## Gulp
Gulp is being used as task runner along with NPM as package manager. As of now there are no tasks in npm like transpile, build, lint etc. However, users can feel free to configure/develop and integrate such tasks in package.json. Most of tasks are handled through Gulp. Various tasks added are:
1. Installation and Start of selenium : if selenium is installed, this will not install it
2. Transpilation: Existing scripts are written in es2015 and hence es2015 preset is used for Babel transpilation
3. Test: Various test tasks(uiTest, restTest, mobileTest) are built in to represent how different automation can be executed directly from single tool

**Logger** : There is [winston](https://github.com/winstonjs/winston) logger integrated in gulp to log all the build activity information. 

## Usage
Follow below steps for executing template tests already built in framework:
1. For executing UI tests: `gulp uiTest`
2. For executing REST tests: `gulp restTest`
3. Start Appium via command-line before executing Mobile tests:  `appium`
4. For executing Mobile tests: `gulp mobileTest`

## Agnes Structure
Agnes is built on top of [Gauge](https://getgauge.io/) and follows [Page Object](https://github.com/SeleniumHQ/selenium/wiki/PageObjects) pattern for all types of representations (web pages, db tables, rest api, mobile screens) for better reusability, readability and organization of object repository and tests.  Tests are usually built on top of page objects

## Developing Tests

### Common Library
Common functions/Utility functions(DB Client, Rest Client, Loggers, Data Readers) can be added here `<projectRoot>/src/common`

### Page Objects
Before you start writing tests, it would be prudent build required page objects. Depending on type of page object need to be built, they can developed at following locations: `<projectRoot>/src/db_query_objects`
`<projectRoot>/src/mobile_page_objects`
`<projectRoot>/src/rest_service_objects`
`<projectRoot>/src/ui_page_objects`

### Specs
Specs are developed  in `<projectRoot>/specs` folder. There are already few specs written in markdown format. They are organized in different folders as per type of testing(db, rest, ui, mobile).  Guide on writing specs is present [here](https://docs.getgauge.io/longstart.html#). Features added in specs examples:
1. Tags - You will notice different tags present in specs to distinguish different types of testing during execution.
2. Tables - There are various inline and external table references present in various specs
3. Parameterization - Almost all specs have data parameterization in-built.

### Tests
Tests are developed in `<projectRoot>/src/tests`

### Resources
There are two forms non-code resources present in framework.  These resources are picked up and read from different locations based on `env` parameter. This parameter is provided to framework/project via command line. Refer various gulp test tasks, you will see command line with environment provided - '`gauge --env qa --verbose --tags ui specs/'`
1. **Config** - Present at `<projectRoot>/env/<env>/<env>.properties`.  For example, `/env/qa/qa.properties` can be referred. There are various values that can be set here which are specific environment. For example - Db credentials, Web Urls, TestData path
2.  **Test Data** - Present at `<projectRoot>/resources<env>`



