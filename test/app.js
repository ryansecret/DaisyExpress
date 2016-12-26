'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-daisy-express:app', function () {
 /* before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({createDirectory: true})
      .toPromise();
  });*/

  it('creates files', function () {
    assert.file([
      'dummyfile.txt'
    ]);
  });
});
