/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
import Ember from 'ember';

export default Ember.Route.extend({

    activate: function() {
        this._super(...arguments);
        this.controllerFor(this.routeName).send('reset');

        Ember.run.scheduleOnce('afterRender', this, function(){
            Ember.$('.collapse-branch').forEach();
        });
    },

    model(params) {
        return this.get('store').findRecord('github-user', params.user_id);
    },

    setupController(controller, model){
        this._super(...arguments);
        // githubRepositories is a hasMany (async) so request values.
        model.get('githubRepositories').then(
            repos => {
                // List of unique language in alphabetical order, removing empty values
                // and starting with 'All'
                let listLanguage = repos.mapBy('language').uniq().sort();
                listLanguage.unshift('All');
                listLanguage = listLanguage.filter(l => { return l && l.length;});
                controller.set('listLanguage', listLanguage);

                // List of repos (used for displaying the branch names).
                controller.set('repos', repos);
                repos.forEach(repo => {
                    repo.get('branches').then(
                        () => {},
                        error => { console.error(error); }
                    );
                })
            },
            error => { console.error(error); }
        );
    },

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
});
