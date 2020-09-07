module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  extends: [
    'plugin:vue/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/mustache-interpolation-spacing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'camelcase': 'off',
    'vue/attribute-hyphenation': ['error', "never", { "ignore": ["custom-prop"] }]
  }
}
