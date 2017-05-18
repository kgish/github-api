import Ember from 'ember';

export function formatBoolean(params) {
    let bool = params[0];
    return bool ? 'Yes' : 'No';
}

export default Ember.Helper.helper(formatBoolean);
