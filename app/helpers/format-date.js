import Ember from 'ember';

// {{format-date date}} => 10 Oct 1957
export function formatDate(params) {
    let date = params[0];
    return moment(date).format('DD MMM YYYY');
}

export default Ember.Helper.helper(formatDate);
