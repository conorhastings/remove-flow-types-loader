Remove Flow Types Webpack Loader
==================

This plugin will remove [Flow](https://flowtype.org) type annotations during
bundling using [`flow-remove-types`](https://github.com/leebyron/flow-remove-types).

## Install

```
npm install --save remove-flow-types-loader
```

```js
module: {
    preLoaders: [{
        test: /\.jsx?$/,
        loader: "remove-flow-types",
        include: path.join(__dirname, "src")
    }]
}
```
