"use strict";

var minify = require("html-minifier").minify;
var defaults = require("./defaults");

var isHtml = RegExp.prototype.test.bind(/\.html$/);

module.exports = function htmlMinifier(options) {
	options = options || {
		"minifyOptions": {
			// See defaults below
		}
	};
	defaults(options.minifyOptions, {
		"removeComments": true
	});
	return function (files, metalsmith, done) {
		 Object.keys(files)
		.filter(isHtml)
		.forEach(function (file) {
			var data = files[file];
			var contents = data.contents.toString();
			var minified = minify(contents, options.minifyOptions);
			data.contents = new Buffer(minified, "utf8");
		});
		done();
	};
};
