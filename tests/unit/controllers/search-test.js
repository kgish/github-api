import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:search', 'Unit | Controller | search', {
    // Specify the other units that are required for this test.
    needs: ['service:github-session']
});

// Replace this with your real tests.
test('it exists', function(assert) {
    let controller = this.subject();
    assert.ok(controller);
});
