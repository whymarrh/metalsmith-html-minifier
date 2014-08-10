"use strict";

module.exports = function defaults(obj, src) {
	Object.keys(src).forEach(function (key) {
		if (!obj[key]) {
			obj[key] = src[key];
		}
	});
	return obj;
};
