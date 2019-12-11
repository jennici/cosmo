(this.webpackJsonpcosmo=this.webpackJsonpcosmo||[]).push([[0],{147:function(e,t,a){e.exports=a(262)},152:function(e,t,a){},154:function(e,t,a){},262:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(131),s=a.n(i),r=(a(152),a(91)),m=a.n(r),c=a(132),l=a(133),h=a(22),u=a(23),d=a(25),p=a(24),b=a(26),g=(a(154),a(155),a(156),function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"ui secondary pointing menu",id:"myMenu"},o.a.createElement("button",{className:"active item",onClick:this.props.co2&&this.props.active},"Global CO2 emissions"),o.a.createElement("button",{className:"item",onClick:this.props.temp&&this.props.active},"Global Temperature"),o.a.createElement("button",{className:"item",onClick:this.props.glacier&&this.props.active},"Glacier Size")))}}]),t}(n.Component)),D=a(272),v=a(279),y=a(269),f=a(277),E=a(274),w=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={zoomDomain:{x:[new Date(1990,1,1),new Date(2009,1,1)]}},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"handleZoom",value:function(e){this.setState({zoomDomain:e})}},{key:"render",value:function(){var e=this.props.emission;if(void 0===e)return o.a.createElement("p",null,"No data avaiable.");var t=e.map((function(e){return{x:e.Year,y:e["Gas Fuel"]}}));return o.a.createElement("div",null,o.a.createElement("div",{className:"ui segment"},o.a.createElement("div",{className:"ui two wide grid",style:{width:"50%"}},o.a.createElement(D.a,{data:t,height:250,scale:{x:"time"},containerComponent:o.a.createElement(v.a,{zoomDimension:"x",zoomDomain:this.state.zoomDomain,onZoomDomainChange:this.handleZoom.bind(this)})},o.a.createElement(y.a,{style:{data:{stroke:"tomato"}},data:t})),o.a.createElement(D.a,{padding:{top:0,left:50,right:50,bottom:30},width:600,height:100,scale:{x:"time"},containerComponent:o.a.createElement(f.a,{brushDimension:"x",brushDomain:this.state.zoomDomain,onBrushDomainChange:this.handleZoom.bind(this)})},o.a.createElement(E.a,{tickFormat:function(e){return new Date(e).getFullYear()}}),o.a.createElement(y.a,{style:{data:{stroke:"tomato"}},data:t})),o.a.createElement(D.a,{width:600,height:470,scale:{x:"time"},containerComponent:o.a.createElement(v.a,{zoomDimension:"x",zoomDomain:this.state.zoomDomain,onZoomDomainChange:this.handleZoom.bind(this)})},o.a.createElement(y.a,{style:{data:{stroke:"tomato"}},data:t})),o.a.createElement(D.a,{padding:{top:0,left:50,right:50,bottom:30},width:600,height:100,scale:{x:"time"},containerComponent:o.a.createElement(f.a,{brushDimension:"x",brushDomain:this.state.zoomDomain,onBrushDomainChange:this.handleZoom.bind(this)})},o.a.createElement(E.a,{tickFormat:function(e){return new Date(e).getFullYear()}}),o.a.createElement(y.a,{style:{data:{stroke:"tomato"}},data:t})))))}}]),t}(n.Component),k=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).state={zoomDomain:{x:[new Date(1990,1,1),new Date(2009,1,1)]}},e}return Object(b.a)(t,e),Object(u.a)(t,[{key:"handleZoom",value:function(e){this.setState({zoomDomain:e})}},{key:"render",value:function(){var e=this.props.temperature;if(void 0===e)return o.a.createElement("p",null,"No data avaiable.");var t=e.map((function(e){return{x:e.Year,y:e["Mean cumulative mass balance"]}}));return o.a.createElement("div",null,o.a.createElement("div",{className:"ui segment"},o.a.createElement("div",{className:"ui two wide grid",style:{width:"50%"}},o.a.createElement(D.a,{width:600,height:470,scale:{x:"time"},containerComponent:o.a.createElement(v.a,{zoomDimension:"x",zoomDomain:this.state.zoomDomain,onZoomDomainChange:this.handleZoom.bind(this)})},o.a.createElement(y.a,{style:{data:{stroke:"tomato"}},data:t})),o.a.createElement(D.a,{padding:{top:0,left:50,right:50,bottom:30},width:600,height:100,scale:{x:"time"},containerComponent:o.a.createElement(f.a,{brushDimension:"x",brushDomain:this.state.zoomDomain,onBrushDomainChange:this.handleZoom.bind(this)})},o.a.createElement(E.a,{tickFormat:function(e){return new Date(e).getFullYear()}}),o.a.createElement(y.a,{style:{data:{stroke:"tomato"}},data:[{key:new Date(1982,1,1),b:125},{key:new Date(1987,1,1),b:257},{key:new Date(1993,1,1),b:345},{key:new Date(1997,1,1),b:515},{key:new Date(2001,1,1),b:132},{key:new Date(2005,1,1),b:305},{key:new Date(2011,1,1),b:270},{key:new Date(2015,1,1),b:470}],x:"key",y:"b"})),o.a.createElement(D.a,{width:600,height:470,scale:{x:"time"},containerComponent:o.a.createElement(v.a,{zoomDimension:"x",zoomDomain:this.state.zoomDomain,onZoomDomainChange:this.handleZoom.bind(this)})},o.a.createElement(y.a,{style:{data:{stroke:"tomato"}},data:t})),o.a.createElement(D.a,{padding:{top:0,left:50,right:50,bottom:30},width:600,height:100,scale:{x:"time"},containerComponent:o.a.createElement(f.a,{brushDimension:"x",brushDomain:this.state.zoomDomain,onBrushDomainChange:this.handleZoom.bind(this)})},o.a.createElement(E.a,{tickFormat:function(e){return new Date(e).getFullYear()}}),o.a.createElement(y.a,{style:{data:{stroke:"tomato"}},data:[{key:new Date(1982,1,1),b:125},{key:new Date(1987,1,1),b:257},{key:new Date(1993,1,1),b:345},{key:new Date(1997,1,1),b:515},{key:new Date(2001,1,1),b:132},{key:new Date(2005,1,1),b:305},{key:new Date(2011,1,1),b:270},{key:new Date(2015,1,1),b:470}],x:"key",y:"b"})))))}}]),t}(n.Component),O=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).state={zoomDomain:{x:[new Date(1990,1,1),new Date(2009,1,1)]}},e}return Object(b.a)(t,e),Object(u.a)(t,[{key:"handleZoom",value:function(e){this.setState({zoomDomain:e})}},{key:"render",value:function(){var e=this.props.glaciersize;if(void 0===e)return o.a.createElement("p",null,"No data avaiable.");var t=e.map((function(e){return{x:e.Year,y:e.Mean}}));return o.a.createElement("div",null,o.a.createElement("div",{className:"ui segment"},o.a.createElement("div",{className:"ui two wide grid",style:{width:"50%"}},o.a.createElement(D.a,{width:600,height:470,scale:{x:"time"},containerComponent:o.a.createElement(v.a,{zoomDimension:"x",zoomDomain:this.state.zoomDomain,onZoomDomainChange:this.handleZoom.bind(this)})},o.a.createElement(y.a,{style:{data:{stroke:"tomato"}},data:t})),o.a.createElement(D.a,{padding:{top:0,left:50,right:50,bottom:30},width:600,height:100,scale:{x:"time"},containerComponent:o.a.createElement(f.a,{brushDimension:"x",brushDomain:this.state.zoomDomain,onBrushDomainChange:this.handleZoom.bind(this)})},o.a.createElement(E.a,{tickFormat:function(e){return new Date(e).getFullYear()}}),o.a.createElement(y.a,{style:{data:{stroke:"tomato"}},data:t})),o.a.createElement(D.a,{width:600,height:470,scale:{x:"time"},containerComponent:o.a.createElement(v.a,{zoomDimension:"x",zoomDomain:this.state.zoomDomain,onZoomDomainChange:this.handleZoom.bind(this)})},o.a.createElement(y.a,{style:{data:{stroke:"tomato"}},data:t})),o.a.createElement(D.a,{padding:{top:0,left:50,right:50,bottom:30},width:600,height:100,scale:{x:"time"},containerComponent:o.a.createElement(f.a,{brushDimension:"x",brushDomain:this.state.zoomDomain,onBrushDomainChange:this.handleZoom.bind(this)})},o.a.createElement(E.a,{tickFormat:function(e){return new Date(e).getFullYear()}}),o.a.createElement(y.a,{style:{data:{stroke:"tomato"}},data:t})))))}}]),t}(n.Component);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={emission:[],temperature:[],glaciersize:[],sealevel:[],loading:!0,isCO2:!0,isTemp:!1,isGlacier:!1,active:!0},a.triggerCO2EmissionState=function(){a.setState(C({},a.state,{isCO2:!0,active:!0}))},a.triggerGlobalTemperatureState=function(){a.setState(C({},a.state,{isCO2:!1,isTemp:!0,active:!0}))},a.triggerGlacierSizeState=function(){a.setState(C({},a.state,{isCO2:!1,isGlacier:!0,active:!0}))},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)(m.a.mark((function e(){var t,a,n,o,i,s,r,c,l,h,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://my.api.mockaroo.com/co2.json?key=8eb9e6f0",t="https://my.api.mockaroo.com/temp.json?key=8eb9e6f0",a="https://my.api.mockaroo.com/glaciersize.json?key=8eb9e6f0",n="https://my.api.mockaroo.com/sealevel.json?key=8eb9e6f0",e.next=6,fetch("https://my.api.mockaroo.com/co2.json?key=8eb9e6f0");case 6:return o=e.sent,e.next=9,o.json();case 9:return i=e.sent,this.setState({emission:i,loading:!1}),e.next=13,fetch(t);case 13:return s=e.sent,e.next=16,s.json();case 16:return r=e.sent,this.setState({temperature:r,loading:!1}),e.next=20,fetch(a);case 20:return c=e.sent,e.next=23,c.json();case 23:return l=e.sent,this.setState({glaciersize:l,loading:!1}),e.next=27,fetch(n);case 27:return h=e.sent,e.next=30,h.json();case 30:u=e.sent,this.setState({sealevel:u,loading:!1}),console.log(this.state.emission),console.log(this.state.temperature),console.log(this.state.glaciersize),console.log(this.state.sealevel);case 36:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state.loading)return o.a.createElement("div",null,"loading...");if(!this.state.emission||!this.state.temperature||!this.state.glaciersize||!this.state.sealevel)return o.a.createElement("div",null,"didn't get Climate Change Graph");var e=o.a.createElement(w,{emission:this.state.emission,co2:this.state.isCO2,active:this.state.active});return this.state.isCO2&&(e=o.a.createElement(w,{emission:this.state.emission,co2:this.state.isCO2,active:this.state.active})),this.state.isTemp&&(e=o.a.createElement(k,{temperature:this.state.temperature,temp:this.state.isTemp,active:this.state.active})),this.state.isGlacier&&(e=o.a.createElement(O,{glaciersize:this.state.glaciersize,glacier:this.state.isGlacier,active:this.state.active})),o.a.createElement("div",{className:"App"},o.a.createElement(g,{co2:this.triggerCO2EmissionState,temp:this.triggerGlobalTemperatureState,glacier:this.triggerGlacierSizeState}),e)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[147,1,2]]]);
//# sourceMappingURL=main.41625995.chunk.js.map