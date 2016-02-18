# react-beaker ![build status](https://travis-ci.org/wizawu/react-beaker.svg)

A devtool to cut down heavy dependencies/devDependencies of React projects.

For example, in many cases, you may need a `package.json` like

```javascript
{
    "scripts": {
        "build": "...",
        "start": "...",
        "watch": "...",
        "publish": "...",
        ...
    },
    "dependencies": {
        "react": "...",
        "react-dom": "...",
        "react-router": "...",
        "redux": "...",
        ...
        "other-libs": "..."
    },
    "devDependencies": {
        "webpack": "...",
        "many-webpack-plugins": "...",
        "babel": "...",
        "many-babel-plugins": "...",
        "uglifyjs": "...",
        ...
    }
}
```

With `react-beaker`, you can simply write

```javascript
{
    "dependencies": {
        "other-libs": "..."
    }
}
```

### Installation

It is recommended to install `react-beaker` to global.

```shell
npm install -g react-beaker
```

### Usage

1. Project structure (or the frontend part) should be as follow.

    ```shell
    path/to/source/
    +-- html
    +-- js
    |   +-- entries
    +-- package.json (optional)
    ```

2. Commands

    ```shell
    react-beaker watch path/to/source
    react-beaker build path/to/source
    react-beaker publish path/to/source
    ```

    For `watch` and `publish`, all source files with extensions `.js` or `.jsx` will be output with extension `.min.js` to `dist`.

    ```shell
    path/to/source/
    +-- js
    |   +-- entries
    |       +-- a.js
    |       +-- b.jsx
    +-- dist
        +-- a.min.js
        +-- b.min.js
    ```

    For `build`, the extension would be `.js`.

    ```shell
    path/to/source/
    +-- js
    |   +-- entries
    |       +-- a.js
    |       +-- b.jsx
    +-- dist
        +-- a.js
        +-- b.js
    ```

    Meanwhile, HTML source files will also be compiled to `dist`.

    ```shell
    path/to/source/
    +-- html
    |   +-- app.html
    +-- dist
        +-- app.html
    ```

### Advanced

#### React Stuff

You will find `react-toolkit.min.js` in `dist`, which should be included in your HTML.

```html
<script src="./react-toolkit.min.js"></script>
```

Then you are able to import the most commonly used React libraries.

```javascript
import React from "react";
import ReactDOM from "react-dom";
import Redux from "redux";
import { IndexRoute, Route, Router } from "react-router";
```

#### Source Map

Source map is enabled when using `react-beaker watch`.

#### CSS and Less

```javascript
import "../css/default.css";
import "../css/theme.less";
```
