module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [0, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'docs', //  仅仅修改了文档等
        'feat', // A新增feature
        'fix', // 修复bug
        'style', // 仅仅修改ui样式等，不改变代码逻辑
        'perf', // 优化相关，比如提升性能、体验
        'refactor', // 代码重构，没有加新功能或者修复bug
        'revert', // 回滚到上一个版本
        'test', // 测试用例，包括单元测试、集成测试等
        'build', // 构建
        'ci', // ci配置，脚本文件等更新
        'chore', // 改变构建流程、或者增加依赖库、工具等
      ],
    ],
  },
}
