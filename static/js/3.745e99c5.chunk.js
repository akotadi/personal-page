(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{191:function(e,t,a){},192:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),c=a(5),i=a(4),l=a(6),o=a(0),s=a.n(o),u=(a(191),a(7)),d=a(40),m=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={link:e.link},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state.link;return s.a.createElement("a",{className:"button button-primary",target:"_blank",rel:"noopener noreferrer",href:e},s.a.createElement(u.a,{icon:d.a})," Find out more")}}]),t}(o.Component),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={link:e.link},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state.link;return s.a.createElement("div",{className:"card-footer"},s.a.createElement(m,{link:e}))}}]),t}(o.Component),h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={title:e.title,description:e.text,date:e.date},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,n=e.date;return s.a.createElement("div",{className:"card-body"},s.a.createElement("p",{className:"date"},n),s.a.createElement("h2",null,t),s.a.createElement("p",{className:"content"},a))}}]),t}(o.Component),j=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={image:e.image,section:e.section,onClickCardHeader:e.onClickCardHeader},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state,t=e.image,a=e.section,n=e.onClickCardHeader,r={backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url("+t+")"};return s.a.createElement("header",{style:r,id:t,className:"card-header",onClick:function(){return n()}},s.a.createElement("h4",null,a))}}]),t}(o.Component);a.d(t,"default",function(){return k});var k=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).handleClickCardHeader=function(){var e=a.state.project.title.trim().replace(/\s+/g,"-").toLowerCase();a.state.onClickCard(e)},a.state={project:e.project,onClickCard:e.onClickCard},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state.project;return s.a.createElement("div",{className:"custom-card"},s.a.createElement(j,{image:e.thumbnail,section:e.section,onClickCardHeader:this.handleClickCardHeader}),s.a.createElement(h,{title:e.title,text:e.description,date:e.date}),s.a.createElement(b,{link:e.repository}))}}]),t}(o.Component)}}]);
//# sourceMappingURL=3.745e99c5.chunk.js.map