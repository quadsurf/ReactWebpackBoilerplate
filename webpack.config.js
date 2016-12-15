

const webpack = require("webpack");

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    // 'script!foundation-sites/dist/foundation.min.js',
    'script!semantic-ui-css/semantic.min.js',
    // 'script!semantic-ui-react/dist/umd/semantic-ui-react.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/common/Nav.jsx',
      Home: 'app/components/routes/Home.jsx',
      Page2: 'app/components/routes/Page2.jsx',
      Page3: 'app/components/routes/Page3.jsx',
      Form1: 'app/components/routes/components/Form1.jsx',
      Form1Message: 'app/components/routes/components/Form1Message.jsx',
      Fetcher: 'app/api/Fetcher.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        loader: 'url-loader',
        test: /\.png$|\.woff$|\.woff2$|\.ttf$|\.eot$|\.svg$/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
