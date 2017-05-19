# github-api

A basic [Emberjs](http://emberjs.com/) demo application demonstrating how to use the [GitHub API v3](https://developer.github.com/v3/) to access information about user repositories.

Screenshot of the homepage:
![Screenshot of the homepage](images/screenshot-homepage.png)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)


## Installation

* `git clone git@github.com:kgish/github-api.git`
* `cd github-api`
* `npm install && bower install`


## Token

I use the [ember-cli-dotenv](https://github.com/fivetanley/ember-cli-dotenv) addon for storing secret data and then having it injected into the application environment.

You will need to acquire a [personal access token](https://github.com/settings/tokens) (scope repo) and add this value to the `.env` file.

```
GITHUB_API_TOKEN=xxxxxxxxxx
```

Don't forget to restart the application whenever you change this value.

You can also just enter a token directly in the search dialog if you do not want to have to change the `.env` file every time.

Important: if it happens that you start receiving 401 Authorization errors, then it is likely that the token is no longer valid and you will need to create a new token.

## GitHub API Adapter

I use [Ember Data Github](https://github.com/elwayman02/ember-data-github) for making request to the GitHub API endpoint `api.github.com`

In order to use the token, I inject the token value into the `github-session` service when the search request is initiated.

The `UsersSearchController` looks like this:

```
import Ember from 'ember';
import ENV from 'github-api/config/environment';

export default Ember.Controller.extend({

    session: Ember.inject.service('github-session'),

    token: ENV.APP.GITHUB_API_TOKEN,
    user: null,

    ...

    actions: {
        submit() {
            let session = this.get('session'),
                user = this.get('user'),
                token = this.get('token');

            session.set('githubAccessToken', token);
            this.transitionToRoute('users.show', user);
        }
    }
});
```


Screenshot of the search page:
![Screenshot of the homepage](images/screenshot-searchpage.png)

## Bootstrap

For the styling and UI components I used the newest version of [Bootstrap v4-alpha](https://v4-alpha.getbootstrap.com/) which provides many new attractive functionalities.


## Error handling

For nicer boostrap-like alerts, I use [bootbox](https://github.com/makeusabrew/bootbox). If a server error is detected, the appropriate error message is displayed.

This is done by hooking into the `error` action in `UsersShowRoute`:

```
actions: {
    error(error) {
        let errors = [];
        error.errors.forEach(error => {
            errors.push(`${error.status} : ${error.title}`);
        });
        bootbox.alert({
            size: "small",
            title: "An error has occurred",
            message: errors.join('<br/>'),
            callback: function(){ /* your callback code */ }
        });
        return true;
    }
}
```


## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).


### Running Tests

* `ember test`
* `ember test --server`


### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Additional Addons

In order to enhance this application, I used the following extra addons in the `package.json` file:

```
"devDependencies": {
    ...
    "ember-cli-dotenv": "^1.2.0",
    "ember-cli-sass": "^6.1.3",
    "ember-data-github": "^0.3.1",
    "ember-font-awesome": "^3.0.5",
    "ember-truth-helpers": "^1.3.0",
    "emberx-select": "^3.0.1",
    ...
},
```


## Bower

Extra stuff using bower in the `bower.json` file:

```
"dependencies": {
    "font-awesome": "fontawesome#^4.7.0",
    "bootstrap": "4.0.0-alpha.6",
    "moment": "^2.18.1"
}
```

## Further Reading / Useful Links

* [Ember.js](http://emberjs.com/)
* [Ember-CLI](https://ember-cli.com/)
* [GitHub API v3](https://developer.github.com/v3/)
* [Ember Data Github](https://github.com/elwayman02/ember-data-github)
* [Ember-cli-dotenv](https://github.com/fivetanley/ember-cli-dotenv)
* [Bootstrap v4-alpha](https://v4-alpha.getbootstrap.com)


## Author

Kiffin Gish \< kiffin.gish@planet.nl \>

[Gishtech](http://gishtech.com)  
Advanced Software Development for the Web

"You're never too old to learn new stuff..."
