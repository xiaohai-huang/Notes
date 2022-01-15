# Loader vs Plugin

References:

- <https://developpaper.com/the-difference-between-loader-and-plugin/>

Webpack treats all files as modules, but webpack can only parse JavaScript files. If you want ot bundle other files, you will use loader. So the function of loader is to parse and load non JavaScript files.
While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.

## Loader

Loaders describe to webpack how to process non-native modules and include these dependencies into your bundles. This means that you can write CoffeeScript, TS, JSX, Sass, Less in your project.

Module loaders can be chained. Each loader in the chain applies transformations to the processed resource. A chain is executed in reverse order. The first loader passes its result (resource with applied transformations) to the next one, and so forth. Finally, webpack expects _JavaScript_ to be returned by the last loader in the chain.

```js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

## Plugin
