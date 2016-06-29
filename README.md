# __`wfeApp`__ -  an AngularJS Tutorial Application

## Overview

This application takes the developer through the process of building a web-application using Angular. The application is people directory of __Web Front End Department__ of [__Asian Tech Inc.__](http://asiantech.vn)

Each tagged commit is a separate lesson teaching a single aspect of Angular.

The tutorial based on http://docs.Angularjs.org/tutorial.

## Prerequisites

- Git
- Node.js and tools (`npm`, `bower`,...)

## Workings of the application

- The application filesystem layout structure is based on the [app-template](at-hungbcp/app-template) project.
- There is no dynamic backend (no application server) for this application. Instead we fake the application server by fetching static `.json` files.
- Read the Development section at the end to familiarize yourself with running and developing an Angular application.

## Commits / Tutorial Outline

You can check out any point of the tutorial using
```bash
git checkout step-?
```

To see the changes which between any two lessons use the git diff command.
```bash
git diff step-?..step-?
```

### `step-1`

- Add `ngApp` directive to bootstrap the app.
- Add simple template with an expression.

### `step-2`

- Add static `HTML` list with two people into `index.html`. We will convert this static page into dynamic one with the help of Angular.

### `step-3`

- Convert the static `HTML` list into dynamic one by:
  - creating `PeopleListCtrl` controller for the application.
  - extracting the data from HTML, moving it into the controller as an in-memory dataset.
  - converting the static HTML document into an Angular template with the use of the `ngRepeat` directive which iterates over the dataset of people.
  - `ngRepeat` clones its contents for each instance in the dataset and renders it into the view.

### `step-4`

- Add a search box to demonstrate how:
  - the data-binding works on input fields.
  - to use the `filter` filter.
  - `ngRepeat` automatically shrinks and grows the number of people in the view.

### `step-5`

- Add `empCode` property to each person in the data model.
- Add a `<select>` input to change the person list order.
- Override the default order value in the controller.

### `step-6`

- Replace the in-memory dataset with data loaded from the server (in
  the form of static `people.json` file).
  - The `people.json` file is loaded using the `$http` service.
- Demonstrate the use of `services` and `dependency injection` aka `DI`.
  - The `$http` service is injected into the controller through `DI`.

### `step-7`

- Add person image and links to new pages that show the person details.
- Add CSS to style the page just a notch.

### `step-8`

- Introduce the `$route` service which allows binding URLs for deep-linking with views:
  - Create `PeopleListCtrl` which governs the entire app and contains $route configuration.
  - Install `Angular-route` using bower and load the `ngRoute` module.   (Be sure to run `npm install` again.)
  - Copy route parameters to root scope `params` property for access in sub controllers.
  - Replace the contents of `index.html` with the `ngView` directive, which will display the partial template of the current route.
- Create people list route:
  - Map `/people` route to `PeopleListCtrl` and `view/people-list.html`.
  - Preserve existing `PeopleListCtrl` controller.
  - Move existing `.html` from `index.html` to `view/people-list.html`.
- Create person details route:
  - Map `/person/<person-id>` route to `PersonDetailCtrl` and `view/person-detail.html`.
  - Create empty placeholder `PersonDetailsCtrl` controller.

### `step-9`

- Implement `PersonDetailCtrl` controller to fetch the details for a specific person from a `.json` file using `$http` service.
- Update the template for the person detailed view.
- Add CSS to make the person details page look "pretty".

### `step-10`

- Replace `$http` with `$resource`.
- Created a custom `Person` service that represents the `$resource` client.

----------

## Developing AngularJS with __`wfeApp`__

The following docs describe how you can test and develop further this application.

### Installing dependencies

The application relies upon various Node.js tools, such as Bower, Karma and Protractor.  You can install these by running:

```bash
npm install
```

This will also run `bower install`, which will download the Angular files needed for the current step of the tutorial.

Most of the scripts described below will run this automatically but it doesn't do any harm to run it whenever you like.

### Running the app during development

- Run `npm start`
- Navigate your browser to `http://localhost:8000/index.html` to see the app running in your browser.

### Running unit tests

We recommend using [Jasmine](http://jasmine.github.io/) and [Karma](https://karma-runner.github.io/) for your unit tests/specs, but you are free to use whatever works for you.

- Start Karma with `npm test`
  - A browser will start and connect to the Karma server. Chrome is the default browser, others can be captured by loading the same url as the one in Chrome or by changing the `test/karma.conf.js` file.
- Karma will sit and watch your application and test JavaScript files. To run or re-run tests just change any of your these files.

### End-to-end testing

We recommend using Jasmine and [Protractor](https://Angular.github.io/protractor/) for end-to-end testing.

Requires a webserver that serves the application. See Running the app during development, above.

- Serve the application: run `npm start`.
- In a separate console run the E2E tests: `npm run protractor`. Protractor will execute the E2E test scripts against the web application itself.
  - The configuration is set up to run the tests on Chrome directly. If you want to run against other browsers then you must install the WebDriver, `npm run update-webdriver`, and modify the configuration at `test/protractor.conf.js`.

## Application Directory Layout

```text
app/                   --> all of the files to be used in production
  index.html           --> app layout file (the main html template file of the app)
  css/                 --> css files
    app.css            --> default stylesheet
  img/                 --> image files
  js/                  --> JavaScript files
    app.js             --> the main application module
    controllers.js     --> application controllers
    directives.js      --> application directives
    services.js        --> custom Angular services
  view/                --> Angular view partials (partial html templates) used by ngRoute
    people.html
    person.html
  bower_components/    --> 3rd party js libraries, including Angular and jQuery
test/                  --> test source files and libraries
  karma.conf.js        --> config file for running unit tests with Karma
  protractor.conf.js   --> config file for running e2e tests with Protractor
  e2e/
    scenarios.js       --> end-to-end specs
  unit/                --> unit level specs/tests
    controllersSpec.js --> specs for controllers
    directivesSpec.js  --> specs for directives
    servicesSpec.js    --> specs for services
```

## Contact

For more information on AngularJS please check out http://angularjs.org/

- `at-hungbcp/angular-app-template`: https://github.com/at-hungbcp/angular-app-template
- `DI`: http://docs.Angularjs.org/guide/di
- `directive`: http://docs.Angularjs.org/guide/directive
- `filterFilter`: http://docs.Angularjs.org/api/ng/filter/filter
- `git-home`: http://git-scm.com
- `git-github`: http://help.github.com/set-up-git-redirect
- `ngRepeat`: http://docs.Angularjs.org/api/ng/directive/ngRepeat
- `ngView`: http://docs.Angularjs.org/api/ngRoute/directive/ngView
- `node-download`: http://nodejs.org/download/
- `$resource`: http://docs.Angularjs.org/api/ngResource/service/$resource
- `$route`: http://docs.Angularjs.org/api/ngRoute/service/$route
- `protractor`: https://github.com/Angular/protractor
- `jasmine`: http://pivotal.github.com/jasmine/
- `karma`: http://karma-runner.github.io
