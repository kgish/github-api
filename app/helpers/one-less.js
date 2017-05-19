import Ember from 'ember';

export function oneLess(params) {
    let val = parseInt(params[0]);
    return val - 1;
}

export default Ember.Helper.helper(oneLess);
