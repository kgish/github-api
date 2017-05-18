import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;
var originalConfirm;
var confirmCalledWith;

module('Acceptance: User', {
  beforeEach: function() {
    application = startApp();
    originalConfirm = window.confirm;
    window.confirm = function() {
      confirmCalledWith = [].slice.call(arguments);
      return true;
    };
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
    window.confirm = originalConfirm;
    confirmCalledWith = null;
  }
});

test('visiting /users without data', function(assert) {
  visit('/users');

  andThen(function() {
    assert.equal(currentPath(), 'users.index');
    assert.equal(find('#blankslate').text().trim(), 'No Users found');
  });
});

test('visiting /users with data', function(assert) {
  server.create('user');
  visit('/users');

  andThen(function() {
    assert.equal(currentPath(), 'users.index');
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('create a new user', function(assert) {
  visit('/users');
  click('a:contains(New User)');

  andThen(function() {
    assert.equal(currentPath(), 'users.new');

    fillIn('label:contains(Login) input', 'MyString');
    fillIn('label:contains(Avatar url) input', 'MyString');
    fillIn('label:contains(Gravatar) input', 42);
    fillIn('label:contains(Url) input', 'MyString');
    fillIn('label:contains(Html url) input', 'MyString');
    fillIn('label:contains(Followers url) input', 'MyString');
    fillIn('label:contains(Following url) input', 'MyString');
    fillIn('label:contains(Gists url) input', 'MyString');
    fillIn('label:contains(Starred url) input', 'MyString');
    fillIn('label:contains(Subscriptions url) input', 'MyString');
    fillIn('label:contains(Organizations url) input', 'MyString');
    fillIn('label:contains(Repos url) input', 'MyString');
    fillIn('label:contains(Events url) input', 'MyString');
    fillIn('label:contains(Received events url) input', 'MyString');
    fillIn('label:contains(Type) input', 'MyString');
    fillIn('label:contains(Site admin) input', false);
    fillIn('label:contains(Name) input', 'MyString');
    fillIn('label:contains(Company) input', 'MyString');
    fillIn('label:contains(Blog) input', 'MyString');
    fillIn('label:contains(Location) input', 'MyString');
    fillIn('label:contains(Email) input', 'MyString');
    fillIn('label:contains(Hireable) input', false);
    fillIn('label:contains(Bio) input', 'MyString');
    fillIn('label:contains(Public repos) input', 42);
    fillIn('label:contains(Public gists) input', 42);
    fillIn('label:contains(Followers) input', 42);
    fillIn('label:contains(Following) input', 42);
    fillIn('label:contains(Created at) input', new Date());
    fillIn('label:contains(Updated at) input', new Date());

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('update an existing user', function(assert) {
  server.create('user');
  visit('/users');
  click('a:contains(Edit)');

  andThen(function() {
    assert.equal(currentPath(), 'users.edit');

    fillIn('label:contains(Login) input', 'MyString');
    fillIn('label:contains(Avatar url) input', 'MyString');
    fillIn('label:contains(Gravatar) input', 42);
    fillIn('label:contains(Url) input', 'MyString');
    fillIn('label:contains(Html url) input', 'MyString');
    fillIn('label:contains(Followers url) input', 'MyString');
    fillIn('label:contains(Following url) input', 'MyString');
    fillIn('label:contains(Gists url) input', 'MyString');
    fillIn('label:contains(Starred url) input', 'MyString');
    fillIn('label:contains(Subscriptions url) input', 'MyString');
    fillIn('label:contains(Organizations url) input', 'MyString');
    fillIn('label:contains(Repos url) input', 'MyString');
    fillIn('label:contains(Events url) input', 'MyString');
    fillIn('label:contains(Received events url) input', 'MyString');
    fillIn('label:contains(Type) input', 'MyString');
    fillIn('label:contains(Site admin) input', false);
    fillIn('label:contains(Name) input', 'MyString');
    fillIn('label:contains(Company) input', 'MyString');
    fillIn('label:contains(Blog) input', 'MyString');
    fillIn('label:contains(Location) input', 'MyString');
    fillIn('label:contains(Email) input', 'MyString');
    fillIn('label:contains(Hireable) input', false);
    fillIn('label:contains(Bio) input', 'MyString');
    fillIn('label:contains(Public repos) input', 42);
    fillIn('label:contains(Public gists) input', 42);
    fillIn('label:contains(Followers) input', 42);
    fillIn('label:contains(Following) input', 42);
    fillIn('label:contains(Created at) input', new Date());
    fillIn('label:contains(Updated at) input', new Date());

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('show an existing user', function(assert) {
  server.create('user');
  visit('/users');
  click('a:contains(Show)');

  andThen(function() {
    assert.equal(currentPath(), 'users.show');

    assert.equal(find('p strong:contains(Login:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Avatar url:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Gravatar:)').next().text(), 42);
    assert.equal(find('p strong:contains(Url:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Html url:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Followers url:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Following url:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Gists url:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Starred url:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Subscriptions url:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Organizations url:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Repos url:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Events url:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Received events url:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Type:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Site admin:)').next().text(), false);
    assert.equal(find('p strong:contains(Name:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Company:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Blog:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Location:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Email:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Hireable:)').next().text(), false);
    assert.equal(find('p strong:contains(Bio:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Public repos:)').next().text(), 42);
    assert.equal(find('p strong:contains(Public gists:)').next().text(), 42);
    assert.equal(find('p strong:contains(Followers:)').next().text(), 42);
    assert.equal(find('p strong:contains(Following:)').next().text(), 42);
    assert.equal(find('p strong:contains(Created at:)').next().text(), new Date());
    assert.equal(find('p strong:contains(Updated at:)').next().text(), new Date());
  });
});

test('delete a user', function(assert) {
  server.create('user');
  visit('/users');
  click('a:contains(Remove)');

  andThen(function() {
    assert.equal(currentPath(), 'users.index');
    assert.deepEqual(confirmCalledWith, ['Are you sure?']);
    assert.equal(find('#blankslate').length, 1);
  });
});
