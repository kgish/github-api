import Ember from 'ember';

// {{format-url url}} => <a href="http://example.org">http://example.org</a>
export function formatUrl(params) {
    let url = params[0];
    return Ember.String.htmlSafe(`<a href="${url}" target="_blank">${url}</a>`)
}

export default Ember.Helper.helper(formatUrl);
