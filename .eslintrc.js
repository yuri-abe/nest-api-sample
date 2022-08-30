module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname, 
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
		'prettier',
  ],
  root: true,
  env: {
    browser: true,
    es2017: true,
		node: true,
  },
  ignorePatterns: ['.eslintrc.js', 'node_modules/', 'dist/'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'semi': ['error', 'never'], // 文末のセミコロンを禁止
		"quotes": ['warn', 'single'], // 文字列指定をシングルクォートに統一
    'curly': 'error', // ブロックに含まれるステートメントが1つの場合の中括弧の省略を禁止
    'no-unused-labels': 'warn', // 未使用のラベルの排除
    'no-unused-vars': 'off', // typescriptで不正確な挙動のため機能OFF
    'no-constant-condition': 'warn', // if条件に定数式が入っていることを検知
    'no-template-curly-in-string': 'warn',
    'no-var': 'error', // varでの宣言を拒絶
    'no-empty': 'warn', // 空のブロックステートメントを警告
    'prefer-const': 'warn', // 再割り当てされていないletを警告
    'max-len': ['warn', { 'code': 140 }], // 140文字を超えるコードを警告 - (Prettierで80文字に整形)
    'max-depth': ['warn', 3], // ネストの深さを指定
    'comma-spacing': ['warn', { 'before': false, 'after': true }], // カンマの前にスペースを拒否、後に要スペース
    'no-sequences': 'error', // コンマ演算子を許可しない
    'complexity': ['warn', 16], // コード内の循環pathの数を指定
    'block-spacing': ['warn', 'always'], // 閉じブロック{}内の半角スペースを必要とする
    'no-whitespace-before-property': 'warn', // .で繋ぐプロパティなどが同じ行にある際に空白が空いていると警告
    'space-infix-ops': 'warn', // 演算子の前後に空白スペースが必要
    'no-empty-function': 'warn', // 空の関数を警告
  },
};
