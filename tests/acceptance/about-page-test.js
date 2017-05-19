import { test } from 'qunit';
import moduleForAcceptance from 'github-api/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | about page');

test('visiting /about', function(assert) {
    visit('/about');

    andThen(function() {
        let h1 = findWithAssert('h1');
        assert.equal(currentURL(), '/about');
        assert.equal(h1.text(), 'About');
    });
});
