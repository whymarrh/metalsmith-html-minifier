"use strict";

var minify = require("html-minifier").minify;
var defaults = require("./defaults");

var isHtml = RegExp.prototype.test.bind(/\.html$/);

module.exports = function htmlMinifier(options) {
	options = options || {};
	defaults(options, {
		// See the README explainations of each of these options
		"collapseBooleanAttributes": true,
		"collapseWhitespace": true,
		"removeAttributeQuotes": true,
		"removeComments": true,
		"removeEmptyAttributes": true,
		"removeRedundantAttributes": true,
	});
	return function plugin(files, metalsmith, done) {
		try {
			 Object.keys(files)
			.filter(isHtml)
			.forEach(function (file) {
				var data = files[file];
				var contents = data.contents.toString();
				var minified = minify(contents, options);
				data.contents = new Buffer(minified, "utf8");
			});
			done();
		} catch (e) {
			done(e);
		}
	};
};
