import{_ as s,o as a,c as n,M as l}from"./chunks/framework.b26238a1.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"overview/code_framework.md","filePath":"overview/code_framework.md"}'),e={name:"overview/code_framework.md"},p=l(`<h2 id="项目目录结构说明" tabindex="-1">项目目录结构说明 <a class="header-anchor" href="#项目目录结构说明" aria-label="Permalink to &quot;项目目录结构说明&quot;">​</a></h2><p>代码目录说明</p><h3 id="开启前准备工作" tabindex="-1">开启前准备工作 <a class="header-anchor" href="#开启前准备工作" aria-label="Permalink to &quot;开启前准备工作&quot;">​</a></h3><ul><li>先看公共模块，图标平台分为 空间、仪表盘、邮件、嵌入、数据管理等模块，如果不是跨模块的，请不要放入公共领域重。 <ul><li>请先看一遍 style，了解图表的平台的全局样式。譬如： flex layout text size等样式。 新增公用样式、变量，主要添加到相应模块</li><li>看公共组件(components)的使用，了解图表的平台的公共组件。譬如： action-wrapper chart-wrapper等组件</li><li>看hooks的使用，了解图表的平台的hooks。</li><li>国际化，主要好各个模块，不如不是跨模块的，请不要放到common中</li></ul></li><li>对照store看仪表盘的数据结构，理清图表平台的架构</li><li>了解各类规范：设计规范、代码规范、git规范等</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">|-- src 项目源码</span></span>
<span class="line"><span style="color:#babed8;">	|-- api 接口请求文件</span></span>
<span class="line"><span style="color:#babed8;">    |--- http.ts  axios封装包 </span></span>
<span class="line"><span style="color:#babed8;">    |--- modules  请求接口</span></span>
<span class="line"><span style="color:#babed8;">	|-- assets 静态资源目录</span></span>
<span class="line"><span style="color:#babed8;">    |-- components 自定义公共组件</span></span>
<span class="line"><span style="color:#babed8;">		|-- action-wrapper 交互插件容器</span></span>
<span class="line"><span style="color:#babed8;">			|-- index.tsx 入口</span></span>
<span class="line"><span style="color:#babed8;">        |-- chart-wrapper 图表组件容器</span></span>
<span class="line"><span style="color:#babed8;">			|-- index.tsx 入口</span></span>
<span class="line"><span style="color:#babed8;">	|-- constants	常量	</span></span>
<span class="line"><span style="color:#babed8;">        |-- index.ts 入口</span></span>
<span class="line"><span style="color:#babed8;">        |-- common.ts 公用</span></span>
<span class="line"><span style="color:#babed8;">        |-- chart.ts 图表变量</span></span>
<span class="line"><span style="color:#babed8;">        |-- ...</span></span>
<span class="line"><span style="color:#babed8;">	|-- i18n 国际化配置</span></span>
<span class="line"><span style="color:#babed8;">	|-- lang 语言配置</span></span>
<span class="line"><span style="color:#babed8;">		|-- en 英文配置</span></span>
<span class="line"><span style="color:#babed8;">		    |-- index.ts 入口</span></span>
<span class="line"><span style="color:#babed8;">		    |-- common.ts 公用配置</span></span>
<span class="line"><span style="color:#babed8;">		    |-- dashboard.ts 仪表盘</span></span>
<span class="line"><span style="color:#babed8;">		    |-- ...</span></span>
<span class="line"><span style="color:#babed8;">		|-- zh-cn 中文配置</span></span>
<span class="line"><span style="color:#babed8;">            |-- index.ts 入口</span></span>
<span class="line"><span style="color:#babed8;">		    |-- common.ts 公用配置</span></span>
<span class="line"><span style="color:#babed8;">		    |-- dashboard.ts 仪表盘</span></span>
<span class="line"><span style="color:#babed8;">		    |-- ...</span></span>
<span class="line"><span style="color:#babed8;">	|-- pages 页面组件/业务组件</span></span>
<span class="line"><span style="color:#babed8;">		|-- action-editor 筛选器编辑	</span></span>
<span class="line"><span style="color:#babed8;">		|-- dashboard 仪表盘	</span></span>
<span class="line"><span style="color:#babed8;">		|-- home 首页</span></span>
<span class="line"><span style="color:#babed8;">		|-- panel-edit 图表编辑页</span></span>
<span class="line"><span style="color:#babed8;">		|-- Dashboard.tsx 分享/邮件页面</span></span>
<span class="line"><span style="color:#babed8;">		|-- LoginSuccess.tsx 登录成功跳转</span></span>
<span class="line"><span style="color:#babed8;">		|-- Main.tsx 入口页面</span></span>
<span class="line"><span style="color:#babed8;">		|-- Preview.tsx 预览页面</span></span>
<span class="line"><span style="color:#babed8;">	|-- plugins 插件</span></span>
<span class="line"><span style="color:#babed8;">		|-- actions 交互插件</span></span>
<span class="line"><span style="color:#babed8;">		|-- charts 图表插件</span></span>
<span class="line"><span style="color:#babed8;">		|-- dataSource 数据源插件</span></span>
<span class="line"><span style="color:#babed8;">		|-- dashboard 面板插件</span></span>
<span class="line"><span style="color:#babed8;">		|-- layout 布局插件</span></span>
<span class="line"><span style="color:#babed8;">		|-- index.ts 导出插件</span></span>
<span class="line"><span style="color:#babed8;">	|-- router 定义路由</span></span>
<span class="line"><span style="color:#babed8;">	|-- store 公共数据管理中心</span></span>
<span class="line"><span style="color:#babed8;">	|-- style 公共样式</span></span>
<span class="line"><span style="color:#babed8;">		|-- variables 全局样式变量</span></span>
<span class="line"><span style="color:#babed8;">			|-- theme 主题变量</span></span>
<span class="line"><span style="color:#babed8;">				|-- default.scss 默认主题变量</span></span>
<span class="line"><span style="color:#babed8;">				|-- dark.scss 深色主题变量</span></span>
<span class="line"><span style="color:#babed8;">			|-- common.scss</span></span>
<span class="line"><span style="color:#babed8;">			|-- dimension.scss 尺寸变量</span></span>
<span class="line"><span style="color:#babed8;">		|-- common.scss 普通通用样式</span></span>
<span class="line"><span style="color:#babed8;">		|-- size.scss 尺寸通用样式</span></span>
<span class="line"><span style="color:#babed8;">		|-- font.scss 字体通用样式</span></span>
<span class="line"><span style="color:#babed8;">		|-- text.scss 文本通用样式</span></span>
<span class="line"><span style="color:#babed8;">		|-- layout.scss 布局通用样式</span></span>
<span class="line"><span style="color:#babed8;">		|-- color.scss 布局通用样式</span></span>
<span class="line"><span style="color:#babed8;">		|-- flex.scss flex样式</span></span>
<span class="line"><span style="color:#babed8;">		|-- index.scss 公共样式入口</span></span>
<span class="line"><span style="color:#babed8;">		|-- variables.scss 全局变量入口</span></span>
<span class="line"><span style="color:#babed8;">	|-- theme 主题样式</span></span>
<span class="line"><span style="color:#babed8;">	|-- typings 类型约束</span></span>
<span class="line"><span style="color:#babed8;">		|-- chartsource.ts 图表约束</span></span>
<span class="line"><span style="color:#babed8;">		|-- dashboard.ts dashboard约束</span></span>
<span class="line"><span style="color:#babed8;">		|-- data.ts 数据约束</span></span>
<span class="line"><span style="color:#babed8;">		|-- dataSource.ts 数据源约束</span></span>
<span class="line"><span style="color:#babed8;">		|-- index.ts 统一导出约束配置</span></span>
<span class="line"><span style="color:#babed8;">		|-- panel.ts 面板约束</span></span>
<span class="line"><span style="color:#babed8;">		|-- variables.ts 变量约束</span></span>
<span class="line"><span style="color:#babed8;">	|-- utils 工具文件夹</span></span>
<span class="line"><span style="color:#babed8;">	|-- main.ts 入口文件</span></span>
<span class="line"><span style="color:#babed8;">	|-- tsx.d.ts </span></span>
<span class="line"><span style="color:#babed8;">	|-- vue.d.ts</span></span>
<span class="line"><span style="color:#babed8;">|-- static</span></span>
<span class="line"><span style="color:#babed8;">|-- .browserslistrc 浏览器限制配置</span></span>
<span class="line"><span style="color:#babed8;">|-- .eslintignore eslint忽略配置（即配置需要eslint规范文件/文件夹）</span></span>
<span class="line"><span style="color:#babed8;">|-- .eslintrc.js 配置eslint规范</span></span>
<span class="line"><span style="color:#babed8;">|-- .gitignore 配置不要上传到git的文件夹/文件</span></span>
<span class="line"><span style="color:#babed8;">|-- .stylelintignore </span></span>
<span class="line"><span style="color:#babed8;">|-- .stylelintrc.js 样式文件规范</span></span>
<span class="line"><span style="color:#babed8;">|-- babel.config.js babel 配置文件</span></span>
<span class="line"><span style="color:#babed8;">|-- bk.config.js 项目配置文件</span></span>
<span class="line"><span style="color:#babed8;">|-- build.yml</span></span>
<span class="line"><span style="color:#babed8;">|-- index.html</span></span>
<span class="line"><span style="color:#babed8;">|-- package.json 项目所需依赖</span></span>
<span class="line"><span style="color:#babed8;">|-- package-lock.json 项目哥依赖之间的关系</span></span>
<span class="line"><span style="color:#babed8;">|-- README.md 项目使用文档</span></span>
<span class="line"><span style="color:#babed8;">|-- test2.json 测试数据</span></span>
<span class="line"><span style="color:#babed8;">|-- tsconfig.json ts配置文件</span></span>
<span class="line"><span style="color:#babed8;">|-- webpack.config.js webpack配置文件</span></span></code></pre></div>`,5),t=[p];function o(c,b,i,r,d,y){return a(),n("div",null,t)}const _=s(e,[["render",o]]);export{h as __pageData,_ as default};
