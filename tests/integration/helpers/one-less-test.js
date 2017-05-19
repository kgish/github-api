
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('one-less', 'helper:one-less', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', 23);

  // format('DD MMM YYYY');

  this.render(hbs`{{one-less inputValue}}`);

  assert.equal(this.$().text().trim(), '22');
});

