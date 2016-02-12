# Changelog

All notable changes to this project will be documented in this file.

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
