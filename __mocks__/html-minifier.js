"use strict";

module.exports.minify = jest.fn();
module.exports.minify.mockImplementation(function (source, options) {
	return source;
});
