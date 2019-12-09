'use strict';
var assert = require('assert');
var fileCloudDiskUploader = require('../');
var path = require('path'), fs = require('fs');

describe('file-cloud-disk-uploader node module', function () {
  it('should be able to upload file to a hashed file', function (done) {
    fileCloudDiskUploader(function (error, hashNamedFile, filename) {
        assert.equal(true, hashNamedFile === 'b9b34ff32e8bfbb90974f8b3154133092ccbf288.txt');
        assert.equal(true, fs.existsSync(filename));
        fs.unlinkSync(path.resolve(__dirname, "./hashed/" + hashNamedFile));
        done();
      },
      path.resolve(__dirname, 'asserts/a.txt'), path.resolve(__dirname, 'hashed/'));
  });
});
