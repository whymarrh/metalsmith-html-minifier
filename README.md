Metalsmith HTML Minifier
========================

[![npm](https://img.shields.io/npm/v/metalsmith-html-minifier.svg)](https://www.npmjs.com/package/metalsmith-html-minifier)

A Metalsmith plug-in to minify HTML files using [kangax/html-minifier][1].

Be aware that certain optimizations are enabled by default in this plug-in, some of which may not be what you want. Please read the documentation to ensure you understand what is happening to your markup and disable options as required.

  [1]:https://github.com/kangax/html-minifier

Installation
------------

The usual:

```
$ npm install --save metalsmith-html-minifier
```

How do I use this thing?
------------------------

A quick example:

```js
var Metalsmith   = require("metalsmith");
var htmlMinifier = require("metalsmith-html-minifier");
Metalsmith(__dirname)
    .use(htmlMinifier()) // Use the default options
    .build();
```

The above will minify all the HTML files (files ending in `.html`) it processes. To provide a custom glob for files to minify:

```js
var Metalsmith   = require("metalsmith");
var htmlMinifier = require("metalsmith-html-minifier");
Metalsmith(__dirname)
    .use(htmlMinifier("*.html"))
    .build();
```

To pass options to the minifier (to enable or disable optimizations):

```js
var Metalsmith   = require("metalsmith");
var htmlMinifier = require("metalsmith-html-minifier");
Metalsmith(__dirname)
    .use(htmlMinifier("*.html", {
        removeComments: false,
        // etc.
    }))
    .build();
```

Options
-------

See [Options Quick Reference][2] for a full reference. Suffice it to say that the options passed to the plug-in are merged with the defaults (see below) and passed to the minifier directly.

The following options are enabled by default. **To disable any of these you will need to explicitly set them to `false`.**

| Option                         | Description     |
|--------------------------------|-----------------|
| `collapseBooleanAttributes`    | [Omit attribute values from boolean attributes](http://perfectionkills.com/experimenting-with-html-minifier/#collapse_boolean_attributes)
| `collapseWhitespace`           | [Collapse white space that contributes to text nodes in a document tree](http://perfectionkills.com/experimenting-with-html-minifier/#collapse_whitespace)
| `removeAttributeQuotes`        | [Remove quotes around attributes when possible](http://perfectionkills.com/experimenting-with-html-minifier/#remove_attribute_quotes)
| `removeComments`               | [Strip HTML comments](http://perfectionkills.com/experimenting-with-html-minifier/#remove_comments)
| `removeEmptyAttributes`        | [Remove all attributes with whitespace-only values](http://perfectionkills.com/experimenting-with-html-minifier/#remove_empty_or_blank_attributes)
| `removeRedundantAttributes`    | [Remove attributes when value matches default](http://perfectionkills.com/experimenting-with-html-minifier/#remove_redundant_attributes)

  [2]:https://github.com/kangax/html-minifier/tree/v1.0.0#options-quick-reference

Tests
-----

To run the tests:

```
$ npm test
```

License
-------

This software is released under the MIT License. See [LICENSE.md](LICENSE.md) for more information.
