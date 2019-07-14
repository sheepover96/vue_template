const path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dst'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          '/node_modules/',
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { modules: false }]]
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        exclude: [
          '/node_modules/',
        ],
        use: [
          {
            loader: 'vue-loader',
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: [
          '/node_modules/',
        ],
        use: ['vue-style-loader', 'css-loader']
      },
      {
        enforce: 'pre',
        exclude: [
          '/node_modules/',
        ],
        test: /\.js$/,
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, "src")
    ],
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  plugins: [
    new VueLoaderPlugin()
  ],
}