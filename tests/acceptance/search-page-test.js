import { test } from 'qunit';
import moduleForAcceptance from 'github-api/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | search page');

test('visiting /search', function(assert) {
    visit('/search');

    andThen(function() {
        let h1 = findWithAssert('h1');
        assert.equal(currentURL(), '/search');
        assert.equal(h1.text(), 'Search');
    });
});
