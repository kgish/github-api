/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.get('store').findRecord('github-user', params.user_id);
    },

    setupController(controller, model){
        this._super(...arguments);
        // githubRepositories is a hasMany (async) so request values.
        model.get('githubRepositories').then(
            repos => {
                // list of unique language in alphabetical order, removing empty values
                // and starting with 'All'
                let listLanguage = repos.mapBy('language').uniq().sort();
                listLanguage.unshift('All');
                listLanguage = listLanguage.filter(l => { return l && l.length;});
                controller.set('listLanguage', listLanguage);

                controller.set('repos', repos);
                // repos.forEach(repo => {
                //   repo.get('branches').then(() => {});
                // })
            },
            error => { console.error(error)}
        );
    }
});
