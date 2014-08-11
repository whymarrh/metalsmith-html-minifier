"use strict";

var module = "../lib/index";
jest.dontMock(module);

describe("metalsmith-html-minifier", function() {
	it("should be a function", function () {
		expect(require(module)).toEqual(jasmine.any(Function));
	});

	it("should return a function", function () {
		var plugin = require(module)();
		expect(plugin).toEqual(jasmine.any(Function));
	});

	it("should call minify with each HTML files' contents", function () {
		var htmlMinifier = require(module);
		var plugin = htmlMinifier({
			"foo": "bar",
			"baz": "qux",
		});
		var files = {
			"foo.html": {
				"contents": "a",
			},
			"bar.html": {
				"contents": "b",
			},
			"baz.scss": {
				"contents": "c",
			}
		};

		plugin(files, {
			// This isn't important
		}, function () {
			// This isn't important
		});

		var minify = require("html-minifier").minify;
		expect(minify.mock.calls.length).toBe(2);
		expect(minify).toBeCalledWith("a", jasmine.any(Object));
		expect(minify).toBeCalledWith("b", jasmine.any(Object));
	});
});
