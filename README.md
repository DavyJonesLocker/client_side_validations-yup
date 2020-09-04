# ClientSideValidations-Yup #

[![Gem Version](https://badge.fury.io/rb/client_side_validations-yup.svg)](https://badge.fury.io/rb/client_side_validations-yup)
[![npm version](https://badge.fury.io/js/%40client-side-validations%2Fyup.svg)](https://badge.fury.io/js/%40client-side-validations%2Fyup)
[![SemVer](https://api.dependabot.com/badges/compatibility_score?dependency-name=client_side_validations-yup&package-manager=bundler&version-scheme=semver)](https://dependabot.com/compatibility-score.html?dependency-name=client_side_validations-yup&package-manager=bundler&version-scheme=semver)
[![Build Status](https://secure.travis-ci.org/DavyJonesLocker/client_side_validations-yup.svg?branch=master)](https://travis-ci.org/DavyJonesLocker/client_side_validations-yup)
[![Maintainability](https://api.codeclimate.com/v1/badges/b9e9cbbd0d9f454adba7/maintainability)](https://codeclimate.com/github/DavyJonesLocker/client_side_validations-yup/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/DavyJonesLocker/client_side_validations-yup/badge.svg?branch=master)](https://coveralls.io/github/DavyJonesLocker/client_side_validations-yup?branch=master)

[Yup](https://github.com/jquense/yup) plugin for [ClientSideValidations](https://github.com/DavyJonesLocker/client_side_validations)

## Installation ##

In your Gemfile add the following:

```ruby
gem 'client_side_validations'
gem 'client_side_validations-yup'
```

Order matters here. `client_side_validations` needs to be
required **before** `client_side_validations-yup`.

[Follow the remaining installation instructions for ClientSideValidations](https://github.com/DavyJonesLocker/client_side_validations/blob/master/README.md)

### JavaScript file ###

Instructions depend on your technology stack.

####  When using Webpacker ####

Make sure that you are requiring jQuery and Client Side Validations.

Add the following package:

```sh
yarn add @client-side-validations/yup
```

Then, according to the CSS framework and module system you are using, add
**one** of the following lines to your `app/javascript/packs/application.js`
pack, **after** `'@client-side-validations/client-side-validations'`:

```js
// If you are using `import` syntax
import '@client-side-validations/yup'

// If you are using `require` syntax
require('@client-side-validations/yup')
```

####  When using Sprockets ####

Make sure that you are requiring jQuery and Client Side Validations.

According to the web framework you are using, add **one** of the following
lines to your `app/assets/javascripts/application.js`, **after**
`//= require rails.validations`

```js
//= require rails.validations.yup
```

If you need to copy the asset files from the gem into your project, run:

```
rails g client_side_validations:copy_assets
```

Note: If you run `copy_assets`, you will need to run it again each time you update this project.

## Usage ##

The usage is the same as `ClientSideValidations`, just pass `validate: true` to the form builder

TODO

## Authors ##

[Geremia Taglialatela](https://twitter.com/gtagliala)

[We are very thankful for the many contributors](https://github.com/DavyJonesLocker/client_side_validations-yup/graphs/contributors)

## Versioning ##

This gem follows [Semantic Versioning](https://semver.org)

## Want to help? ##

Please do! We are always looking to improve this gem. Please see our
[Contribution Guidelines](https://github.com/DavyJonesLocker/client_side_validations-yup/blob/master/CONTRIBUTING.md)
on how to properly submit issues and pull requests.

## Legal ##

[DockYard](https://dockyard.com/), LLC &copy; 2012-2020

[@dockyard](https://twitter.com/dockyard)

[Licensed under the MIT license](https://opensource.org/licenses/mit-license.php)
