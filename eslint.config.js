module.exports = {
  parserOptions: {
      ecmaVersion: 2017,
      impliedStrict: true,
      sourceType: 'module',
      ecmaFeatures: {
          impliedStrict: true,
          experimentalObjectRestSpread: true,
      },
},
"env": {
      "es6": true
  },
  plugins: ['prettier'],
  rules: {
      'prettier/prettier': 'error',
  },
}