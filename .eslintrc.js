module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: '@react-native-community',
  rules: {
    "no-eval": [0, {"allowIndirect": true}],
    "react-native/no-inline-styles": 0,
  }
};
