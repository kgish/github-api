import Ember from 'ember';
import ENV from 'github-api/config/environment';

export default Ember.Controller.extend({

    session: Ember.inject.service('github-session'),

    // token: '78bef7bc8f9301e863636ee75811ecbaa4b28a42',
    token: 'bf46f84fc551c257b1c4b5f1c8c5083892ede1f8',
    user: null,

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
