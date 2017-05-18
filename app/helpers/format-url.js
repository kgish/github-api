import Ember from 'ember';

export function formatUrl(params) {
  let url = params[0];
  return Ember.String.htmlSafe('<a href="'+url+'" target="_blank">'+url+'</a>')
}

export default Ember.Helper.helper(formatUrl);
