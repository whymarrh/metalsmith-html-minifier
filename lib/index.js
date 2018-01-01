"use strict";

var defaults = require("lodash.defaultsdeep");
var minify = require("html-minifier").minify;
var multimatch = require("multimatch");

module.exports = function htmlMinifier(options = {}) {
	defaults(options, {
		pattern: "**/*.html",
		minifierOptions: {
			// See the README explainations of each of these options
			"collapseBooleanAttributes": true,
			"collapseWhitespace": true,
			"removeAttributeQuotes": true,
			"removeComments": true,
			"removeEmptyAttributes": true,
			"removeRedundantAttributes": true,
		},
	});
	return function plugin(files, metalsmith, done) {
		try {
			Object.keys(files)
			.forEach(function (file) {
				if (multimatch(file, options.pattern).length) {
					var data = files[file];
					var contents = data.contents.toString();
					var minified = minify(contents, options.minifierOptions);
					data.contents = new Buffer(minified, "utf8");
				}
			});
			done();
		} catch (e) {
			done(e);
		}
	};
};
