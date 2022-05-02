/*
【ts的编译方式】
1. ts-loader 编译的时候可以进行类型检查 -- 新项目选择
2. babel-loader @babel/preset-typescript 不能进行类型检查, 可以依赖插件实现

【lint 工具】
1. tslint 进行ts代码检查 生态较少 逐渐废弃
2. eslint 社区通用 生态完整

【jest配置相关】
1. cnpm i jest @types/jest ts-jest -D
   npx ts-jest config:init --> 生成 jest配置文件
*/