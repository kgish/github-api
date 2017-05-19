
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('format-date', 'helper:format-date', {
    integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {

    let today = new Date();

    this.set('inputValue', today);

    this.render(hbs`{{format-date inputValue}}`);

    assert.equal(this.$().text().trim(), moment(today).format('DD MMM YYYY'));
});

