"use strict";

const defaults = require("lodash.defaultsdeep");
const minify = require("html-minifier").minify;
const multimatch = require("multimatch");

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
					const data = files[file];
					const contents = data.contents.toString();
					const minified = minify(contents, options.minifierOptions);
					data.contents = Buffer.from(minified, "utf8");
				}
			});
			done();
		} catch (e) {
			done(e);
		}
	};
};
