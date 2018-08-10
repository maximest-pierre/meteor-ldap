Package.describe({
  name: 'maximest-pierre:meteor-ldap',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/maximest-pierre/meteor-ldap',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});


Package.onUse(function(api) {
	api.use('yasaricli:slugify');
	api.use('ecmascript');
	api.use('underscore');
	api.use('sha');

	api.use('templating', 'client');

	api.use('accounts-base', 'server');
	api.use('accounts-password', 'server');

	api.addFiles('client/loginHelper.js', 'client');

	api.mainModule('server/index.js', 'server');
});
