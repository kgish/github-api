
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('format-url', 'helper:format-url', {
    integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
    let url = 'http://www.example.org';

    this.set('inputValue', url);

    this.render(hbs`{{format-url inputValue}}`);

    assert.equal(this.$().text().trim(), url);
});

