

module.exports = {
  entry: './app/app.jsx',
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
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
