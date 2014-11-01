"use strict";

// __tests__/defaults.js
jest.dontMock("../lib/defaults");

describe("defaults", function() {
	it("merges defaults into an empty object", function () {
		var defaults = require("../lib/defaults");

		// Empty object
		var emptyObject = {};
		// Defaults
		var defaultsObject = {
			"a": 1
		};

		expect(defaults(emptyObject, defaultsObject)).toEqual(defaultsObject);
	});

	it("merges defaults into an object with properties", function () {
		var defaults = require("../lib/defaults");
		expect(defaults({
			"a": 1,
			"b": 2,
			"c": 3,
		}, {
			"b": 0,
			"d": 4,
		})).toEqual({
			"a": 1,
			"b": 2,
			"c": 3,
			"d": 4,
		});
	});

	it("merges boolean values", function () {
		var defaults = require("../lib/defaults");
		expect(defaults({
			"a": false,
			"b": false,
		}, {
			"b": true,
			"d": true,
		})).toEqual({
			"a": false,
			"b": false,
			"d": true,
		});
	});

	it("merges nothing when defaults is empty", function () {
		var defaults = require("../lib/defaults");
		var obj = {
			"a": 1,
			"b": 2,
			"c": 3,
		};
		var emptyObj = {};
		expect(defaults(obj, emptyObj)).toEqual(obj);
	});
});
