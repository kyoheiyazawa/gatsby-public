(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return l});var n=a(0),r=a.n(n),c=a(145),i=a(149);t.default=function(e){var t=e.data.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement(c.a,{to:t.frontmatter.path,key:t.id,className:"postPreviewLink"},r.a.createElement("div",{className:"postPreviewContainer"},r.a.createElement("h1",null,t.frontmatter.title),r.a.createElement("p",{className:"datep"},t.frontmatter.date),r.a.createElement("p",null,t.excerpt)))});return r.a.createElement(i.a,null,t)};var l="4075880158"},145:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),c=a(4),i=a.n(c),l=a(32),u=a.n(l);a.d(t,"a",function(){return u.a});a(146);var o=r.a.createContext({}),d=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},146:function(e,t,a){var n;e.exports=(n=a(148))&&n.default||n},147:function(e){e.exports={data:{site:{siteMetadata:{title:"kyohei yazawa"}}}}},148:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),l=a(54),u=a(2),o=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},149:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(147),i=a(145),l=function(e){e.siteName;return r.a.createElement(i.b,{query:"2729156960",render:function(e){return r.a.createElement(i.a,{id:"site-logo-link",to:"/"},r.a.createElement("div",{id:"site-logo"},r.a.createElement("h1",null,e.site.siteMetadata.title)))},data:c})},u=function(e){var t=e.to,a=e.text;return r.a.createElement("li",null,r.a.createElement(i.a,{to:t,activeClassName:"active"},r.a.createElement("p",null,a)))},o=function(){return r.a.createElement("ul",{id:"headerLinks"},r.a.createElement(u,{to:"/blog",text:"blog"}),r.a.createElement(u,{to:"/about",text:"about"}),r.a.createElement(u,{to:"/contact",text:"contact"}))},d=function(){return r.a.createElement("div",{id:"header-container"},r.a.createElement("div",{id:"header-inner-container"},r.a.createElement(l,null),r.a.createElement(o,null)))},s=function(){return r.a.createElement("div",{id:"footer-container"})};a(150);a.d(t,"a",function(){return m});var m=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement("div",{id:"page-container"},t),r.a.createElement(s,null))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-52a8ac9458adbbbf1a60.js.map