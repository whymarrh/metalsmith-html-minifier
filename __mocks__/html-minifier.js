"use strict";

module.exports.minify = jest.genMockFunction().mockImplementation(function (source, options) {
	return source;
});
