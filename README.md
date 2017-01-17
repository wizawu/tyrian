# inferno-beaker ![build status](https://travis-ci.org/wizawu/inferno-beaker.svg)

A handy devtool for [inferno](https://github.com/infernojs/inferno).

* Built upon webpack
* TypeScript (.tsx) only
* Bundled `inferno`, `inferno-component`, `inferno-create-element` `inferno-router`
* Import CSS/Less to TypeScript
* Uglify
* Support source maps

### Installation

It is recommended to install `inferno-beaker` globally.

```
npm install -g inferno-beaker
```

### Project Structure

```
path/to/source
+-- html
|   +-- xxxx.html
+-- js
|   +-- @types
|   +-- entries
|       +-- yyyy.tsx
+-- package.json (optional)
+-- dist (output)
    +-- xxxx.html
    +-- yyyy.min.js
```

### Commands

```
inferno-beaker watch path/to/source
inferno-beaker build path/to/source
```
