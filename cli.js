#!/usr/bin/env node
'use strict';
var meow = require('meow');
var fileCloudDiskUploader = require('./');
var path = require('path');

var cli = meow({
  help: [
    'Usage',
    '  fashcp filename [dir] [--type sha1] [--case upper]',
    '',
    'Example',
    '  fashcp a.txt --type md5',
    '  fashcp a.txt tmp --type md5 --case upper'
  ].join('\n')
});

fileCloudDiskUploader(function (error, hashNamedFile, realPath) {
    if (error) {
      console.log('Errors Occur:' + error);
    } else {
      console.log('Hashed file name: ' + hashNamedFile);
      console.log('Saved file place: ' + realPath);
    }
  },
  path.resolve(process.env.PWD, cli.input[0]),
  path.resolve(process.env.PWD, cli.input[1]),
  cli.flags.type,
  cli.flags.case === 'upper'
);
