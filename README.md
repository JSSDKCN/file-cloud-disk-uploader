#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> disk uploader for file cloud


## Install

```sh
$ npm install --save file-cloud-disk-uploader
```


## Usage

```js
var fileCloudDiskUploader = require('../');
var path = require('path');
var fs = require('fs');

fileCloudDiskUploader(function (error, hashNamedFile, filename) {
    assert.equal(true, hashNamedFile === 'b9b34ff32e8bfbb90974f8b3154133092ccbf288.txt');
    assert.equal(true, fs.existsSync(filename));
    done();
  },
  path.resolve(__dirname, 'asserts/a.txt'), path.resolve(__dirname, 'hashed/'));
```


```sh
$ npm install --global file-cloud-disk-uploader
$ fashcp --help

//fashcp a file to a hashed file
$ fashcp  a.txt 
//9a3f2bdd77e0bd4c87e954e154f05d525c85f844.txt


//fashcp a file with md5 hashed
$ fashcp a.jpg --type md5
//969996c794949bbf0e40827cefc98f2d.jpg

//specify a dir to take the out put file and with upper case file name
$ fashcp a.jpg images --type md5 --case upper
//images/969996C794949BBF0E40827CEFC98F2D.jpg
```

## License

MIT © [calidion](blog.3gcnbeta.com)


[npm-image]: https://badge.fury.io/js/file-cloud-disk-uploader.svg
[npm-url]: https://npmjs.org/package/file-cloud-disk-uploader
[travis-image]: https://travis-ci.org/file-cloud/file-cloud-disk-uploader.svg?branch=master
[travis-url]: https://travis-ci.org/file-cloud/file-cloud-disk-uploader
[daviddm-image]: https://david-dm.org/file-cloud/file-cloud-disk-uploader.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/file-cloud/file-cloud-disk-uploader
