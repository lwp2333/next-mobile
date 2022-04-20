module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['vue'],
  extends: ['plugin:vue/vue3-essential', '@vue/standard', '@vue/typescript/recommended'],
  globals: {
    defineProps: 'readonly',
    defineExpose: 'readonly',
    defineEmits: 'readonly',
  },
  rules: {
    // 自己写一些想配置的规则
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境禁用consele
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境禁用debugger
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-multiple-empty-lines': 'off',
    'space-before-function-paren': 'off',
    'vue/multi-word-component-names': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}
