import { Factory } from 'ember-cli-mirage';

export default Factory.extend(
  {login: 'MyString', avatarUrl: 'MyString', gravatarId: 42, url: 'MyString', htmlUrl: 'MyString', followersUrl: 'MyString', followingUrl: 'MyString', gistsUrl: 'MyString', starredUrl: 'MyString', subscriptionsUrl: 'MyString', organizationsUrl: 'MyString', reposUrl: 'MyString', eventsUrl: 'MyString', receivedEventsUrl: 'MyString', type: 'MyString', siteAdmin: false, name: 'MyString', company: 'MyString', blog: 'MyString', location: 'MyString', email: 'MyString', hireable: false, bio: 'MyString', publicRepos: 42, publicGists: 42, followers: 42, following: 42, createdAt: new Date(), updatedAt: new Date() }
);
