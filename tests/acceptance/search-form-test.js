import { test } from 'qunit';
import moduleForAcceptance from 'github-api/tests/helpers/module-for-acceptance';

import Ember from 'ember';

moduleForAcceptance('Acceptance | search page');

test('form submit button disabled and enabled', function(assert) {
    visit('/search');

    // Check for all combinations of filled/empty input fields, the submit
    // button is only enabled when both the token and the user fields are
    // not empty.
    andThen(function() {
        fillIn('#token', '');
        fillIn('#user', '');
        andThen(function() {
            let btn = Ember.$('button[type=submit]');
            assert.ok(btn.hasClass('disabled'));
            fillIn('#token', '1234567890');
            fillIn('#user', 'kgish');
            andThen(function() {
                assert.notOk(btn.hasClass('disabled'));
                fillIn('#token', '');
                fillIn('#user', 'kgish');
                andThen(function() {
                    assert.ok(btn.hasClass('disabled'));
                    fillIn('#token', '1234567890');
                    fillIn('#user', '');
                    andThen(function() {
                        assert.ok(btn.hasClass('disabled'));
                    });
                });
            });
        });
    });
});
