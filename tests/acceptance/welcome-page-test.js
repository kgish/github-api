import { test } from 'qunit';
import moduleForAcceptance from 'github-api/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | welcome page');

test('visiting /', function(assert) {
    visit('/');

    andThen(function() {
        let h1 = findWithAssert('h1');
        assert.equal(currentURL(), '/');
        assert.equal(h1.text(), 'Welcome');
    });
});
