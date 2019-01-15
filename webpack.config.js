const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function createWebpackConfig(environment) {
  const env = environment.dev ? 'dev' : 'prod';

  return {
    mode: getModeForEnv(env),
    devtool: getDevtoolForEnv(env),
    entry: path.join(__dirname, 'src', 'main.js'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'main.js'
    },
    module: {
      rules:[
        vueLoaderRule(env),
        babelLoaderRule(env),
        styleLoaderRule(env)
      ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['.js', '.vue', '.json']
    },
    plugins: getPlugins(env)
  };
};

function getModeForEnv(env) {
  switch (env) {
    case 'dev':
      return 'development';
    case 'prod':
      return 'production';
    default:
      return 'development';
  }
}

function getDevtoolForEnv(env) {
  return env === 'dev' ? 'inline-source-map' : '';
}

function vueLoaderRule(env) {
  return {
    test: /\.vue$/,
    loader: 'vue-loader'
  };
}

function babelLoaderRule(env) {
  return {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  };
}

function styleLoaderRule(env) {
  return {
    test: /\.s?[ac]ss/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      'css-loader',
      'sass-loader'
    ]
  };
}

function getPlugins(env) {
  return [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "main.css"
    }),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'dist', 'index.html'),
      template: path.join(__dirname, 'src', 'index.html')
    })
  ];
}

module.exports = createWebpackConfig;