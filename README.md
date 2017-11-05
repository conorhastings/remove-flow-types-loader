Remove Flow Types Webpack Loader
==================

This plugin will remove [Flow](https://flowtype.org) type annotations during
bundling using [`flow-remove-types`](https://github.com/leebyron/flow-remove-types).

Options passed to this loader are passed through to flow-remove-types.
## Install

```bash
# npm
npm install remove-flow-types-loader --save-dev

# yarn
yarn add remove-flow-types-loader --dev
```

## Configure Webpack

### Webpack 2

```js
module: {
    rules: [{
        test: /\.jsx?$/,
        enforce: "pre",
        use: ["remove-flow-types-loader"],
        include: path.join(__dirname, "src")
    }]
}
```

### Webpack 1

```js
module: {
    preLoaders: [{
        test: /\.jsx?$/,
        loader: "remove-flow-types",
        include: path.join(__dirname, "src")
    }]
}
```
