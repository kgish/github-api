import Ember from 'ember';

export function formatDate(params) {
  let date = params[0];
  return moment(date).format('ddd DD MMM YYYY');
}

export default Ember.Helper.helper(formatDate);
