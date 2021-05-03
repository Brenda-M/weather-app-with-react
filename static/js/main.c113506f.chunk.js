(this["webpackJsonpweather-forecast-app-final"]=this["webpackJsonpweather-forecast-app-final"]||[]).push([[0],{16:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(11),s=n.n(r),i=(n(16),n(17),n(7)),j=n(28),o=n(1),h=function(e){var t=e.fetchData,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],s=a[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{class:"title",children:"What's the weather like today?"})}),Object(o.jsx)("div",{className:"search-box",children:Object(o.jsx)(j.a,{placeholder:"Enter city e.g Paris",onChange:function(e){s(e.target.value)},value:r,className:"search-bar"})}),Object(o.jsx)("button",{onClick:function(){return t(r)},className:"search-button",children:"Check Weather"})]})},l=n(26),u=n(25),d=n(27),b=function(e){var t=e.dt,n=e.temp_min,c=e.temp_max,a=e.main,r=e.icon,s=new Date(t);return Object(o.jsx)("div",{children:Object(o.jsx)(u.a,{children:Object(o.jsxs)(d.a,{className:"weather-cards p-3 m-4",style:{width:"15rem"},bg:"secondary",children:[Object(o.jsx)(d.a.Img,{variant:"top",src:"http://openweathermap.org/img/wn/".concat(r,"@2x.png")}),Object(o.jsxs)(d.a.Body,{children:[Object(o.jsx)(d.a.Title,{children:a}),Object(o.jsxs)("p",{children:[s.toLocaleDateString()," - ",s.toLocaleTimeString()]}),Object(o.jsxs)("p",{children:["Min: ",Math.round(n),"F"]}),Object(o.jsxs)("p",{children:["Max: ",Math.round(c),"F"]})]})]})})})},O=function(e){var t=e.weathers;return Object(o.jsx)(l.a,{children:t.map((function(e){var t=e.dt,n=e.main,c=e.weather;return Object(o.jsx)("div",{children:Object(o.jsx)(b,{temp_max:n.temp_max,temp_min:n.temp_min,dt:1e3*t,main:c[0].main,icon:c[0].icon})},t)}))})},p=function(e){var t=Object(c.useState)(null),n=Object(i.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(null),j=Object(i.a)(s,2),o=j[0],h=j[1],l=Object(c.useState)(null),u=Object(i.a)(l,2),d=u[0],b=u[1],O=Object(c.useState)(e),p=Object(i.a)(O,2),m=p[0],x=p[1];return Object(c.useEffect)((function(){m&&(b(!0),r(null),h(null),fetch(m).then((function(e){return e.json()})).then((function(e){b(!1),e.cod>=400?h(e.message):r(e)})).catch((function(e){b(!1),h(e)})))}),[m]),{data:a,error:o,isLoading:d,setUrl:x}},m=function(){return Object(o.jsx)("div",{})},x=function(){var e=p(),t=e.data,n=e.error,c=e.isLoading,a=e.setUrl;e.setData;return Object(o.jsxs)("main",{className:"App",children:[Object(o.jsx)(h,{fetchData:function(e){a("".concat("https://api.openweathermap.org/data/2.5","/forecast?q=").concat(e,"&cnt=5&appid=").concat("61989eeb4a4021720c5ede6548438281"))}}),n?Object(o.jsxs)("h2",{children:["Error when fetching: ",n]}):!t&&c?Object(o.jsx)("h2",{children:"LOADING..."}):t?Object(o.jsx)(O,{weathers:t.list}):null,Object(o.jsx)(m,{})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),f()}},[[24,1,2]]]);
//# sourceMappingURL=main.c113506f.chunk.js.map