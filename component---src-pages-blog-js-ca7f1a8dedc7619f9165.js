(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return c});var n=a(0),r=a.n(n),i=a(146),l=a(151);t.default=function(e){var t=e.data.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement(i.a,{to:t.frontmatter.path,key:t.id,className:"postPreviewLink"},r.a.createElement("div",{className:"postPreviewContainer"},r.a.createElement("h1",null,t.frontmatter.title),r.a.createElement("p",{className:"datep"},t.frontmatter.date),r.a.createElement("p",null,t.excerpt)))});return r.a.createElement(l.a,{title:"Blog",path:"/blog"},t)};var c="4075880158"},146:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(32),o=a.n(c);a.d(t,"a",function(){return o.a});a(147);var u=r.a.createContext({}),s=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},147:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Kyohei Yazawa",baseUrl:"https://kyoheiyazawa.com"}}}}},149:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(54),o=a(2),u=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=u},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Kyohei Yazawa"}}}}},151:function(e,t,a){"use strict";var n=a(148),r=a(146),i=a(0),l=a.n(i),c=a(152),o=a(150),u=function(e){e.siteName;return l.a.createElement(r.b,{query:"2729156960",render:function(e){return l.a.createElement(r.a,{id:"site-logo-link",to:"/"},l.a.createElement("div",{id:"site-logo"},l.a.createElement("h1",null,e.site.siteMetadata.title.toLowerCase())))},data:o})},s=function(e){var t=e.to,a=e.text;return l.a.createElement("li",null,l.a.createElement(r.a,{to:t,activeClassName:"active"},l.a.createElement("p",null,a)))},d=function(){return l.a.createElement("ul",{id:"headerLinks"},l.a.createElement(s,{to:"/blog",text:"blog"}),l.a.createElement(s,{to:"/about",text:"about"}),l.a.createElement(s,{to:"/contact",text:"contact"}))},m=function(){return l.a.createElement("div",{id:"header-container"},l.a.createElement("div",{id:"header-inner-container"},l.a.createElement(u,null),l.a.createElement(d,null)))},p=function(){return l.a.createElement("div",{id:"footer-container"})};a(153);a.d(t,"a",function(){return E});var E=function(e){var t=e.children,a=e.title,i=e.path,o=e.description;return l.a.createElement(r.b,{query:"2351193646",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.Helmet,null,l.a.createElement("title",null,a?a+" | "+e.site.siteMetadata.title:e.site.siteMetadata.title),l.a.createElement("meta",{property:"og:title",content:a||e.site.siteMetadata.title}),l.a.createElement("meta",{property:"og:url",content:i?e.site.siteMetadata.baseUrl+i:e.site.siteMetadata.baseUrl}),l.a.createElement("meta",{property:"og:description",content:o})),l.a.createElement(m,null),l.a.createElement("div",{id:"page-container"},t),l.a.createElement(p,null))},data:n})}}}]);
//# sourceMappingURL=component---src-pages-blog-js-ca7f1a8dedc7619f9165.js.map