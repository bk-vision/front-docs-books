import{_ as s,c as n,o as a,a as l}from"./app.dbcac417.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9879\u76EE\u76EE\u5F55\u7ED3\u6784\u8BF4\u660E","slug":"\u9879\u76EE\u76EE\u5F55\u7ED3\u6784\u8BF4\u660E","link":"#\u9879\u76EE\u76EE\u5F55\u7ED3\u6784\u8BF4\u660E","children":[]}],"relativePath":"overview/code_framework.md"}'),p={name:"overview/code_framework.md"},t=l(`<h2 id="\u9879\u76EE\u76EE\u5F55\u7ED3\u6784\u8BF4\u660E" tabindex="-1">\u9879\u76EE\u76EE\u5F55\u7ED3\u6784\u8BF4\u660E <a class="header-anchor" href="#\u9879\u76EE\u76EE\u5F55\u7ED3\u6784\u8BF4\u660E" aria-hidden="true">#</a></h2><p>\u4EE3\u7801\u76EE\u5F55\u8BF4\u660E</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">|-- src \u9879\u76EE\u6E90\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">	|-- api \u63A5\u53E3\u8BF7\u6C42\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    |--- http.ts  axios\u5C01\u88C5\u5305 </span></span>
<span class="line"><span style="color:#A6ACCD;">    |--- modules  \u8BF7\u6C42\u63A5\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">	|-- assets \u9759\u6001\u8D44\u6E90\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">	|-- common </span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- import-magicbox.ts \u6CE8\u518C\u5168\u5C40magicBOx\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- systemjs-import.js \u63D2\u4EF6\u52A0\u8F7D\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">  |-- components \u81EA\u5B9A\u4E49\u516C\u5171\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- editors \u7F16\u8F91\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">			|-- RichtextEditor \u5BCC\u6587\u672C\u7F16\u8F91\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- monaco-editor.vue monaco\u7F16\u8F91\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">	|-- i18n \u56FD\u9645\u5316\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">	|-- lang \u8BED\u8A00\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- en.json \u82F1\u6587\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- zn-cn.json \u4E2D\u6587\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">	|-- pages \u9875\u9762\u7EC4\u4EF6/\u4E1A\u52A1\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- config \u914D\u7F6E\u9875</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- dashboard	</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- home \u9996\u9875</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- panel-edit \u56FE\u8868\u7F16\u8F91\u9875</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- app.scss</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- app.tsx \u9875\u9762\u5165\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- panel.tsx \u56FE\u8868\u5206\u4EAB\u5165\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">	|-- plugins \u63D2\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- charts \u56FE\u8868\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- dataSource \u6570\u636E\u6E90\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- dashboard \u9762\u677F\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- index.ts \u5BFC\u51FA\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">	|-- router \u5B9A\u4E49\u8DEF\u7531</span></span>
<span class="line"><span style="color:#A6ACCD;">	|-- store vuex\u516C\u5171\u6570\u636E\u7BA1\u7406\u4E2D\u5FC3</span></span>
<span class="line"><span style="color:#A6ACCD;">	|-- style \u516C\u5171\u6837\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- variables \u5168\u5C40\u6837\u5F0F\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">			|-- theme \u4E3B\u9898\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">				|-- default.scss \u9ED8\u8BA4\u4E3B\u9898\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">				|-- dark.scss \u6DF1\u8272\u4E3B\u9898\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">			|-- common.scss</span></span>
<span class="line"><span style="color:#A6ACCD;">			|-- dimension.scss \u5C3A\u5BF8\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- common.scss \u666E\u901A\u901A\u7528\u6837\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- size.scss \u5C3A\u5BF8\u901A\u7528\u6837\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- font.scss \u5B57\u4F53\u901A\u7528\u6837\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- text.scss \u6587\u672C\u901A\u7528\u6837\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- layout.scss \u5E03\u5C40\u901A\u7528\u6837\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- color.scss \u5E03\u5C40\u901A\u7528\u6837\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- flex.scss flex\u6837\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- index.scss \u516C\u5171\u6837\u5F0F\u5165\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- variables.scss \u5168\u5C40\u53D8\u91CF\u5165\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">	|-- theme \u4E3B\u9898\u6837\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">	|-- typings \u7C7B\u578B\u7EA6\u675F</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- chartsource.ts \u56FE\u8868\u7EA6\u675F</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- dashboard.ts dashboard\u7EA6\u675F</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- data.ts \u6570\u636E\u7EA6\u675F</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- dataSource.ts \u6570\u636E\u6E90\u7EA6\u675F</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- index.ts \u7EDF\u4E00\u5BFC\u51FA\u7EA6\u675F\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- panel.ts \u9762\u677F\u7EA6\u675F</span></span>
<span class="line"><span style="color:#A6ACCD;">		|-- variables.ts \u53D8\u91CF\u7EA6\u675F</span></span>
<span class="line"><span style="color:#A6ACCD;">	|-- utils \u5DE5\u5177\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">	|-- main.ts \u5165\u53E3\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">	|-- tsx.d.ts </span></span>
<span class="line"><span style="color:#A6ACCD;">	|-- vue.d.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- static</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- .browserslistrc \u6D4F\u89C8\u5668\u9650\u5236\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- .eslintignore eslint\u5FFD\u7565\u914D\u7F6E\uFF08\u5373\u914D\u7F6E\u9700\u8981eslint\u89C4\u8303\u6587\u4EF6/\u6587\u4EF6\u5939\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- .eslintrc.js \u914D\u7F6Eeslint\u89C4\u8303</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- .gitignore \u914D\u7F6E\u4E0D\u8981\u4E0A\u4F20\u5230git\u7684\u6587\u4EF6\u5939/\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- .stylelintignore </span></span>
<span class="line"><span style="color:#A6ACCD;">|-- .stylelintrc.js \u6837\u5F0F\u6587\u4EF6\u89C4\u8303</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- babel.config.js babel \u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- bk.config.js \u9879\u76EE\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- build.yml</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- index.html</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- package.json \u9879\u76EE\u6240\u9700\u4F9D\u8D56</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- package-lock.json \u9879\u76EE\u54E5\u4F9D\u8D56\u4E4B\u95F4\u7684\u5173\u7CFB</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- README.md \u9879\u76EE\u4F7F\u7528\u6587\u6863</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- test2.json \u6D4B\u8BD5\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- tsconfig.json ts\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- webpack.config.js webpack\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,3),e=[t];function o(c,A,C,i,r,y){return a(),n("div",null,e)}const m=s(p,[["render",o]]);export{d as __pageData,m as default};
