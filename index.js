'use strict';
var fs = require("fs");
var path = require("path");
var fash = require('file-hash');

module.exports = function (next, filename, dir, type, upper) {
  if (!fs.existsSync(filename)) {
    throw Error(filename + " not exists");
  }
  fash(function (hash) {
      var hashNamedFile = hash + path.extname(filename);
      var realPath = hashNamedFile;
      if (dir) {
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
        }
        realPath = path.resolve(dir, hashNamedFile);
      }
      if (fs.existsSync(realPath)) {
        fs.unlink(realPath);
      }
      fs.createReadStream(filename).pipe(fs.createWriteStream(realPath)).on('finish', function (error) {
        next(error, hashNamedFile, realPath);
      });
    },
    filename,
    type,
    upper
  );
};
