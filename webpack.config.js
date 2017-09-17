const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

// =========================================================
//  ENVIRONMENT VARS
// ---------------------------------------------------------
const WEBPACK_HOST = "localhost";
const WEBPACK_PORT = process.env.PORT || 9001;
const ENV_DEVELOPMENT = process.env.NODE_ENV === "development";
const ENV_BUILD = process.env.NODE_ENV.indexOf("build") === 0;
const MINIFY = process.env.NODE_ENV === "build-min";

// =========================================================
//  CONFIG
// ---------------------------------------------------------
const config = {};
module.exports = config;

config.resolve = {
  extensions: [".js", ".jsx"],
  modules: [path.join(__dirname, "src"), "node_modules"]
};

// =====================================
//  DEVELOPMENT
// -------------------------------------
if (ENV_DEVELOPMENT) {
  config.devtool = "inline-source-map";
  config.entry = [
    `webpack-dev-server/client?http://${WEBPACK_HOST}:${WEBPACK_PORT}`,
    "./src/demo/index.jsx"
  ];

  config.module = {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader?importLoaders=1",
          {
            loader: "sass-loader",
            query: {
              sourceMap: true,
              sourceComments: true,
              includePaths: ["./src"]
            }
          }
        ]
      }
    ]
  };

  config.output = {
    filename: "index.js",
    path: path.resolve("./dist"),
    publicPath: "/"
  };

  config.plugins = [
    new HtmlWebpackPlugin({
      filename: "index.html",
      hash: false,
      inject: "body"
    })
  ];

  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  );

  config.devServer = {
    historyApiFallback: {
      index: "/index.html"
    },
    host: WEBPACK_HOST,
    hot: true,
    port: WEBPACK_PORT,
    publicPath: config.output.publicPath,
    stats: {
      cached: true,
      cachedAssets: true,
      chunks: true,
      chunkModules: false,
      colors: true,
      hash: false,
      reasons: true,
      timings: true,
      version: false
    }
  };
}

if (ENV_BUILD) {
  config.entry = "./src/index.jsx";

  const extractSASSToCSS = new ExtractTextPlugin({
    filename: "ReactCalendar.css"
  });
  const extractSASSToSASS = new ExtractTextPlugin({
    filename: "ReactCalendar.scss"
  });

  config.module = {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: extractSASSToCSS.extract([
          "css-loader?importLoaders=1",
          "sass-loader"
        ])
      }
    ]
  };

  config.externals = {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "react"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      root: "react-dom"
    },
    "prop-types": {
      commonjs: "prop-types",
      commonjs2: "prop-types",
      amd: "prop-types",
      root: "prop-types"
    },
    "date-fns": {
      commonjs: "date-fns",
      commonjs2: "date-fns",
      amd: "date-fns",
      root: "date-fns"
    }
  };

  config.output = {
    filename: MINIFY ? "ReactCalendar.min.js" : "ReactCalendar.js",
    library: "reactCal",
    libraryTarget: "umd",
    path: path.resolve("./dist"),
    publicPath: "/"
  };

  config.plugins = [
    MINIFY ? new UglifyJSPlugin({ minimize: true }) : false,
    extractSASSToSASS,
    extractSASSToCSS
  ].filter(Boolean);
}
