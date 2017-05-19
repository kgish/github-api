import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('format-boolean', 'helper:format-boolean', {
    integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
    this.set('inputValue', false);

    this.render(hbs`{{format-boolean inputValue}}`);

    assert.equal(this.$().text().trim(), 'No');

    this.set('inputValue', true);

    this.render(hbs`{{format-boolean inputValue}}`);

    assert.equal(this.$().text().trim(), 'Yes');
});

