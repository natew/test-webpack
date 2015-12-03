module.exports = {
  loaders:
   [
    { test: /\.json$/, loader: "json" }
   ],
  resolve: {
    root: '/Users/nw/company/tests/loaders/.flint'
  },
  entry: '.internal/deps/externals.in.js',
  output: { filename: '/Users/nw/company/tests/loaders/.flint/.internal/deps/externals.js' } }