# Changelog

All notable changes to this project will be documented in this file.

## 2.4.4 - 2017-11-02

### Fixed

- File names would not match the base name (e.g. `*.html` would not match `x/y/z.html`) but the whole path ([#27](https://github.com/whymarrh/metalsmith-html-minifier/issues/27), [#28](https://github.com/whymarrh/metalsmith-html-minifier/pull/28))

## 2.4.3 - 2017-10-02

### Added

- An array of patterns (globs) can now be passed as the first argument (#22)

### Changed

- Replaced minimatch with multimatch (#22)

## 2.2.0 - 2016-10-12

### Changed

- Updated JSCS to v3
- Updated HTML Minifier to v3

## 2.1.0 - 2016-08-03

### Added

- The plugin now accepts a single object as its only argument to support using the Metalsmith CLI ([#13](https://github.com/whymarrh/metalsmith-html-minifier/pull/13))

## 2.0.0 - 2016-02-12

### Changed
- The plugin now accepts two arguments, a file glob pattern and the html-minifier options, respectively.

## 1.1.0 - 2014-12-17

### Added
- Nothing

### Deprecated
- Nothing

### Removed
- Nothing

### Fixed
- Minification errors were not passed along to the `done` callback

## 1.0.2 - 2014-11-01

### Added
- Nothing

### Deprecated
- Nothing

### Removed
- Nothing

### Fixed
- Issue where defaults could not be overriden correctly ([#2](https://github.com/whymarrh/metalsmith-html-minifier/pull/2))

## 1.0.1 - 2014-10-06

### Added
- Metalsmith (`>= 0.9.0`) is a peer dependency

### Deprecated
- Nothing

### Removed
- Nothing

### Fixed
- Nothing

## 1.0.0 - 2014-08-11

### Added
- Initial version of plug-in
- Default options enabled:
    - `collapseBooleanAttributes`
    - `collapseWhitespace`
    - `removeAttributeQuotes`
    - `removeComments`
    - `removeEmptyAttributes`
    - `removeRedundantAttributes`

### Deprecated
- Nothing

### Removed
- Nothing

### Fixed
- Nothing
