import Ember from 'ember';

export default Ember.Controller.extend({

    currentLanguage: null,
    listLanguage: null, // See UsersShowController#setupController()

    currentPrivate: null,
    listPrivate: [
        { value: null, text: 'All'},
        { value: false, text: 'Public'},
        { value: true, text: 'Private'}
    ],

    user: Ember.computed.alias('model'), // More descriptive than 'model'

    repos: null, // See UsersShowController#setupController()

    listRepos: Ember.computed('currentLanguage', 'currentPrivate', function(){
        let repos = this.get('repos'),
        currentLanguage = this.get('currentLanguage'),
        currentPrivate = this.get('currentPrivate');

        if (currentLanguage !== 'All') {
            repos = repos.filterBy('language', currentLanguage);
        }

        if (currentPrivate) {
            repos = repos.filterBy('private', currentPrivate);
        }

        return repos;
    }),

    actions: {
        selectLanguage(language) {
            this.set('currentLanguage', language);
        },
        selectPrivate(b) {
            this.set('currentPrivate', b);
        }
    }
});
