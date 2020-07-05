const minifier = require('html-minifier');

jest.mock('html-minifier');
minifier.minify.mockImplementation(source => source);

describe("metalsmith-html-minifier", function () {
	it("should be a function", function () {
		expect(require("../lib/index")).toEqual(expect.any(Function));
	});

	it("should return a function", function () {
		const plugin = require("../lib/index")();
		expect(plugin).toEqual(expect.any(Function));
	});

	it("should call minify with each HTML files' contents", function () {
		const htmlMinifier = require("../lib/index");
		const minifierOptions = {
			"foo": "bar",
			"baz": "qux",
		};
		const plugin = htmlMinifier({
			minifierOptions,
		});
		const files = {
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
		const done = jest.fn();

		plugin(files, {
			// This isn't important
		}, done);
		expect(done).not.toBeCalledWith(expect.anything());

		const minify = require("html-minifier").minify;
		expect(minify.mock.calls.length).toBe(2);
		expect(minify).toBeCalledWith("a", minifierOptions);
		expect(minify).toBeCalledWith("b", minifierOptions);
	});

	it("should call minify with each HTML and XHTML files' contents (two extensions)", function () {
		const htmlMinifier = require("../lib/index");
		const minifierOptions = {
			"foo": "bar",
			"baz": "qux",
		};
		const plugin = htmlMinifier({
			pattern: ["*.html", "*.xhtml"],
			minifierOptions,
		});
		const files = {
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
		const done = jest.fn();

		plugin(files, {
			// This isn't important
		}, done);
		expect(done).not.toBeCalledWith(expect.anything());

		const minify = require("html-minifier").minify;
		expect(minify.mock.calls.length).toBe(2);
		expect(minify).toBeCalledWith("a", minifierOptions);
		expect(minify).toBeCalledWith("b", minifierOptions);
	});

	it("should call minify with default options when no options given", function () {
		const htmlMinifier = require("../lib/index");
		const plugin = htmlMinifier();
		const done = jest.fn();

		plugin({
			"foo.html": {
				"contents": "a",
			}
		}, {
			// This isn't important
		}, done);
		expect(done).not.toBeCalledWith(expect.anything());

		const minify = require("html-minifier").minify;
		expect(minify.mock.calls.length).toBe(1);

		const defaultOptions = minify.mock.calls[0][1];
		expect(defaultOptions).toBeDefined();
		expect(defaultOptions).toEqual(jasmine.any(Object));
		expect(defaultOptions).not.toEqual({});
	});

	it("should call minify with each HTML files' contents matching the base name", function () {
		const htmlMinifier = require("../lib/index");
		const minifierOptions = {
			"foo": "bar",
			"baz": "qux",
		};
		const plugin = htmlMinifier({
			minifierOptions,
		});
		const files = {
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
		const done = jest.fn();

		plugin(files, {
			// This isn't important
		}, done);
		expect(done).not.toBeCalledWith(expect.anything());

		const minify = require("html-minifier").minify;
		expect(minify.mock.calls.length).toBe(2);
		expect(minify).toBeCalledWith("a", minifierOptions);
		expect(minify).toBeCalledWith("b", minifierOptions);
	});
});
