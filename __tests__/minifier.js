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
		var options = {
			"foo": "bar",
			"baz": "qux",
		};
		var plugin = htmlMinifier(undefined, options);
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
		expect(minify).toBeCalledWith("a", options);
		expect(minify).toBeCalledWith("b", options);
	});

	it("should call minify with default options when no options given", function () {
		var htmlMinifier = require(module);
		var plugin = htmlMinifier();

		plugin({
			"foo.html": {
				"contents": "a",
			}
		}, {
			// This isn't important
		}, function () {
			// This isn't important
		});

		var minify = require("html-minifier").minify;
		expect(minify.mock.calls.length).toBe(1);

		var defaultOptions = minify.mock.calls[0][1];
		expect(defaultOptions).toBeDefined();
		expect(defaultOptions).toEqual(jasmine.any(Object));
		expect(defaultOptions).not.toEqual({});
	});
});
