module.exports = {
  "env": {
    "node": true,
    "es2017": true
  },
  "extends": "airbnb-base",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "ignorePatterns": ["dist/", "node_modules/"],
  "rules": {
  }
};
