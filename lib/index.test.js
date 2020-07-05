var minifier = require('html-minifier')

jest.mock('html-minifier');
minifier.minify.mockImplementation(source => source);

describe("metalsmith-html-minifier", function () {
	it("should be a function", function () {
		expect(require("../lib/index")).toEqual(expect.any(Function));
	});

	it("should return a function", function () {
		var plugin = require("../lib/index")();
		expect(plugin).toEqual(expect.any(Function));
	});

	it("should call minify with each HTML files' contents", function () {
		var htmlMinifier = require("../lib/index");
		var minifierOptions = {
			"foo": "bar",
			"baz": "qux",
		};
		var plugin = htmlMinifier({
			minifierOptions,
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
		var done = jest.fn();

		plugin(files, {
			// This isn't important
		}, done);
		expect(done).not.toBeCalledWith(expect.anything());

		var minify = require("html-minifier").minify;
		expect(minify.mock.calls.length).toBe(2);
		expect(minify).toBeCalledWith("a", minifierOptions);
		expect(minify).toBeCalledWith("b", minifierOptions);
	});

	it("should call minify with each HTML and XHTML files' contents (two extensions)", function () {
		var htmlMinifier = require("../lib/index");
		var minifierOptions = {
			"foo": "bar",
			"baz": "qux",
		};
		var plugin = htmlMinifier({
			pattern: ["*.html", "*.xhtml"],
			minifierOptions,
		});
		var files = {
			"foo.html": {
				"contents": "a",
			},
			"bar.xhtml": {
				"contents": "b",
			},
			"baz.scss": {
				"contents": "c",
			}
		};
		var done = jest.fn();

		plugin(files, {
			// This isn't important
		}, done);
		expect(done).not.toBeCalledWith(expect.anything());

		var minify = require("html-minifier").minify;
		expect(minify.mock.calls.length).toBe(2);
		expect(minify).toBeCalledWith("a", minifierOptions);
		expect(minify).toBeCalledWith("b", minifierOptions);
	});

	it("should call minify with default options when no options given", function () {
		var htmlMinifier = require("../lib/index");
		var plugin = htmlMinifier();
		var done = jest.fn();

		plugin({
			"foo.html": {
				"contents": "a",
			}
		}, {
			// This isn't important
		}, done);
		expect(done).not.toBeCalledWith(expect.anything());

		var minify = require("html-minifier").minify;
		expect(minify.mock.calls.length).toBe(1);

		var defaultOptions = minify.mock.calls[0][1];
		expect(defaultOptions).toBeDefined();
		expect(defaultOptions).toEqual(jasmine.any(Object));
		expect(defaultOptions).not.toEqual({});
	});

	it("should call minify with each HTML files' contents matching the base name", function () {
		var htmlMinifier = require("../lib/index");
		var minifierOptions = {
			"foo": "bar",
			"baz": "qux",
		};
		var plugin = htmlMinifier({
			minifierOptions,
		});
		var files = {
			"some/dir/that/exists/foo.html": {
				"contents": "a",
			},
			"some/dir/that has spaces/bar.html": {
				"contents": "b",
			},
			"html/in/the/path.html/baz.scss": {
				"contents": "c",
			}
		};
		var done = jest.fn();

		plugin(files, {
			// This isn't important
		}, done);
		expect(done).not.toBeCalledWith(expect.anything());

		var minify = require("html-minifier").minify;
		expect(minify.mock.calls.length).toBe(2);
		expect(minify).toBeCalledWith("a", minifierOptions);
		expect(minify).toBeCalledWith("b", minifierOptions);
	});
});
