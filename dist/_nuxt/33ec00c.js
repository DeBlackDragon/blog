(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{273:function(t,e,r){"use strict";r.r(e);var n=r(8),c=(r(46),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.params,e.next=3,r("articles").only(["title","description","img","slug","author"]).sortBy("createdAt","asc").fetch();case 3:return n=e.sent,e.abrupt("return",{articles:n});case 5:case"end":return e.stop()}}),e)})))()}}),o=r(45),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Blog Posts")]),t._v(" "),r("ul",t._l(t.articles,(function(article){return r("li",{key:article.slug},[r("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[r("div",[r("h2",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v("by "+t._s(article.author.name))]),t._v(" "),r("p",[t._v(t._s(article.description))])])])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);