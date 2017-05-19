import Ember from 'ember';
import ENV from 'github-api/config/environment';

export default Ember.Controller.extend({

    session: Ember.inject.service('github-session'),

    token: ENV.APP.GITHUB_API_TOKEN,
    user: null,

    // Disable the submit button unless all fields contain valid values.
    enableSubmit: Ember.computed('token', 'user', function(){
        let user = this.get('user'),
            token = this.get('token');
        return user && user.length && token && token.length;
    }),

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
