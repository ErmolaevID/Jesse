module.exports = {
  globals: {
    MyGlobal: true
  },
  rules: {
    "no-var": "error",
    "semi": ["error", "always", { "omitLastInOneLineBlock": true }],
    "no-extra-semi": "error",
    "semi-spacing": ["error", {"before": false, "after": true}],
    "semi-style": ["error", "last"],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": ["error", { "max": 2 }],
    "prefer-const": "error",
    "no-use-before-define": "error",
    "for-direction": "error",
    "getter-return": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "curly": "error",
    "jsx-quotes": ["error", "prefer-double"],
    "quotes": ["error", "double"],
    "quote-props": ["error", "as-needed"],
    "arrow-spacing": ["error", { "before": true, "after": true }],
    "no-duplicate-imports": "error",
    "camelcase": ["error", { "properties": "always" }],
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    "no-whitespace-before-property": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "no-spaced-func": "error",
    "valid-jsdoc": "error",
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "never"]
  }
};