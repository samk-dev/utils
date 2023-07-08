module.exports = {
  root: true,
  extends: [
    'plugin:prettier/recommended',
    '@nuxtjs/eslint-config-typescript',
    'prettier'
  ],
  plugins: ['prettier'],
  rules: {
    'vue/max-attributes-per-line': 0,
    'vue/multi-word-component-names': 0
  }
}
