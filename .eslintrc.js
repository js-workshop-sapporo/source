module.exports = {
  'env': {
    'es6': true
  },
  'rules': {
    // ==を使おうが===を使おうが気にしない。
    'eqeqeq': 'off',
    // if文などで{}を略したらwarning。
    'curly': 'warn',
    // ダブルクォートを使う。シングルクォートを使ってたらLinterエラー。
    'quotes': ['error', 'single'],
    // セミコロンは必須。無かったらLinterエラー。
    'semi': ['error', 'always'],
    'indent': ['error', 2],
  }
};
