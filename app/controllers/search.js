import Ember from 'ember';
import ENV from 'github-api/config/environment';

export default Ember.Controller.extend({
  token: ENV.APP.GITHUB_API_TOKEN
});
