!function(e){var t,r,o=!1;"function"==typeof define&&define.amd&&(define(e),o=!0),"object"==typeof exports&&(module.exports=e(),o=!0),o||(t=window.Storages,(r=window.Storages=e()).noConflict=function(){return window.Storages=t,r})}(function(){var e={},o=e.toString,n=e.hasOwnProperty,i=n.toString,s=i.call(Object),a=Object.getPrototypeOf,l={};function f(){var t,r,e,o,n,i=this._type,s=arguments.length,a=window[i],l=arguments,f=l[0];if(s<1)throw new Error("Minimum 1 argument must be given");if(Array.isArray(f)){for(o in r={},f)if(f.hasOwnProperty(o)){t=f[o];try{r[t]=JSON.parse(a.getItem(t))}catch(e){r[t]=a.getItem(t)}}return r}if(1!=s){try{r=JSON.parse(a.getItem(f))}catch(e){throw new ReferenceError(f+" is not defined in this storage")}for(o=1;o<s-1;o++)if(void 0===(r=r[l[o]]))throw new ReferenceError([].slice.call(l,1,o+1).join(".")+" is not defined in this storage");if(Array.isArray(l[o])){for(n in e=r,r={},l[o])l[o].hasOwnProperty(n)&&(r[l[o][n]]=e[l[o][n]]);return r}return r[l[o]]}try{return JSON.parse(a.getItem(f))}catch(e){return a.getItem(f)}}function u(){var e,t,r,o,n=this._type,i=arguments.length,s=window[n],a=arguments,l=a[0],f=a[1],u=isNaN(f)?{}:[];if(i<1||!m(l)&&i<2)throw new Error("Minimum 2 arguments must be given or first parameter must be an object");if(m(l)){for(o in l)l.hasOwnProperty(o)&&(m(e=l[o])||this.alwaysUseJson?s.setItem(o,JSON.stringify(e)):s.setItem(o,e));return l}if(2==i)return"object"==typeof f||this.alwaysUseJson?s.setItem(l,JSON.stringify(f)):s.setItem(l,f),f;try{null!=(r=s.getItem(l))&&(u=JSON.parse(r))}catch(e){}for(r=u,o=1;o<i-2;o++)e=a[o],t=isNaN(a[o+1])?"object":"array",r[e]&&("object"!=t||m(r[e]))&&("array"!=t||Array.isArray(r[e]))||(r[e]="array"==t?[]:{}),r=r[e];return r[a[o]]=a[o+1],s.setItem(l,JSON.stringify(u)),u}function c(){var e,t,r,o,n=this._type,i=arguments.length,s=window[n],a=arguments,l=a[0];if(i<1)throw new Error("Minimum 1 argument must be given");if(Array.isArray(l)){for(r in l)l.hasOwnProperty(r)&&s.removeItem(l[r]);return!0}if(1==i)return s.removeItem(l),!0;try{e=t=JSON.parse(s.getItem(l))}catch(e){throw new ReferenceError(l+" is not defined in this storage")}for(r=1;r<i-1;r++)if(void 0===(t=t[a[r]]))throw new ReferenceError([].slice.call(a,1,r).join(".")+" is not defined in this storage");if(Array.isArray(a[r]))for(o in a[r])a[r].hasOwnProperty(o)&&delete t[a[r][o]];else delete t[a[r]];return s.setItem(l,JSON.stringify(e)),!0}function t(e){var t,r=w.call(this);for(t in r)r.hasOwnProperty(t)&&c.call(this,r[t]);if(e)for(t in l.namespaceStorages)l.namespaceStorages.hasOwnProperty(t)&&p(t)}function h(){var e,t=arguments.length,r=arguments,o=r[0];if(0==t)return 0==w.call(this).length;if(Array.isArray(o)){for(e=0;e<o.length;e++)if(!h.call(this,o[e]))return!1;return!0}try{var n=f.apply(this,arguments);for(e in Array.isArray(r[t-1])||(n={totest:n}),n)if(n.hasOwnProperty(e)&&!(m(n[e])&&function(e){var t;for(t in e)return!1;return!0}(n[e])||Array.isArray(n[e])&&!n[e].length||"boolean"!=typeof n[e]&&!n[e]))return!1;return!0}catch(e){return!0}}function g(){var e,t=arguments.length,r=arguments,o=r[0];if(t<1)throw new Error("Minimum 1 argument must be given");if(Array.isArray(o)){for(e=0;e<o.length;e++)if(!g.call(this,o[e]))return!1;return!0}try{var n=f.apply(this,arguments);for(e in Array.isArray(r[t-1])||(n={totest:n}),n)if(n.hasOwnProperty(e)&&(void 0===n[e]||null===n[e]))return!1;return!0}catch(e){return!1}}function w(){var e=this._type,t=arguments.length,r=window[e],o=[],n={};if((n=0<t?f.apply(this,arguments):r)&&n._cookie){var i=Cookies.get();for(var s in i)i.hasOwnProperty(s)&&""!=s&&o.push(s.replace(n._prefix,""))}else for(var a in n)n.hasOwnProperty(a)&&o.push(a);return o}function p(e){if(!e||"string"!=typeof e)throw new Error("First parameter must be a string");d?(window.localStorage.getItem(e)||window.localStorage.setItem(e,"{}"),window.sessionStorage.getItem(e)||window.sessionStorage.setItem(e,"{}")):(window.localCookieStorage.getItem(e)||window.localCookieStorage.setItem(e,"{}"),window.sessionCookieStorage.getItem(e)||window.sessionCookieStorage.setItem(e,"{}"));var t={localStorage:r({},l.localStorage,{_ns:e}),sessionStorage:r({},l.sessionStorage,{_ns:e})};return S&&(window.cookieStorage.getItem(e)||window.cookieStorage.setItem(e,"{}"),t.cookieStorage=r({},l.cookieStorage,{_ns:e})),l.namespaceStorages[e]=t}function m(e){var t,r;return e&&"[object Object]"===o.call(e)&&(!(t=a(e))||"function"==typeof(r=n.call(t,"constructor")&&t.constructor)&&i.call(r)===s)}function r(e){for(var t=1,r=e;t<arguments.length;t++){var o=arguments[t];for(var n in o)o.hasOwnProperty(n)&&(r[n]=o[n])}return r}var y,d=function(e){var t="jsapi";try{return window[e]?(window[e].setItem(t,t),window[e].removeItem(t),!0):!1}catch(e){return!1}}("localStorage"),S="undefined"!=typeof Cookies,_={_type:"",_ns:"",_callMethod:function(e,t){var r=[],o=(t=Array.prototype.slice.call(t))[0];return this._ns&&r.push(this._ns),"string"==typeof o&&-1!==o.indexOf(".")&&(t.shift(),[].unshift.apply(t,o.split("."))),[].push.apply(r,t),e.apply(this,r)},alwaysUseJson:!1,get:function(){return d||S?this._callMethod(f,arguments):null},set:function(){var e=arguments.length,t=arguments,r=t[0];if(e<1||!m(r)&&e<2)throw new Error("Minimum 2 arguments must be given or first parameter must be an object");if(!d&&!S)return null;if(m(r)&&this._ns){for(var o in r)r.hasOwnProperty(o)&&this._callMethod(u,[o,r[o]]);return r}var n=this._callMethod(u,t);return this._ns?n[r.split(".")[0]]:n},remove:function(){if(arguments.length<1)throw new Error("Minimum 1 argument must be given");return d||S?this._callMethod(c,arguments):null},removeAll:function(e){return d||S?this._ns?(this._callMethod(u,[{}]),!0):this._callMethod(t,[e]):null},isEmpty:function(){return d||S?this._callMethod(h,arguments):null},isSet:function(){if(arguments.length<1)throw new Error("Minimum 1 argument must be given");return d||S?this._callMethod(g,arguments):null},keys:function(){return d||S?this._callMethod(w,arguments):null}};return S&&(window.name||(window.name=Math.floor(1e8*Math.random())),y={_cookie:!0,_prefix:"",_expires:null,_path:null,_domain:null,setItem:function(e,t){Cookies.set(this._prefix+e,t,{expires:this._expires,path:this._path,domain:this._domain})},getItem:function(e){return Cookies.get(this._prefix+e)},removeItem:function(e){return Cookies.remove(this._prefix+e,{path:this._path})},clear:function(){var e=Cookies.get();for(var t in e)e.hasOwnProperty(t)&&""!=t&&(!this._prefix&&-1===t.indexOf("ls_")&&-1===t.indexOf("ss_")||this._prefix&&0===t.indexOf(this._prefix))&&Cookies.remove(t)},setExpires:function(e){return this._expires=e,this},setPath:function(e){return this._path=e,this},setDomain:function(e){return this._domain=e,this},setConf:function(e){return e.path&&(this._path=e.path),e.domain&&(this._domain=e.domain),e.expires&&(this._expires=e.expires),this},setDefaultConf:function(){this._path=this._domain=this._expires=null}},d||(window.localCookieStorage=r({},y,{_prefix:"ls_",_expires:3650}),window.sessionCookieStorage=r({},y,{_prefix:"ss_"+window.name+"_"})),window.cookieStorage=r({},y),l.cookieStorage=r({},_,{_type:"cookieStorage",setExpires:function(e){return window.cookieStorage.setExpires(e),this},setPath:function(e){return window.cookieStorage.setPath(e),this},setDomain:function(e){return window.cookieStorage.setDomain(e),this},setConf:function(e){return window.cookieStorage.setConf(e),this},setDefaultConf:function(){return window.cookieStorage.setDefaultConf(),this}})),l.initNamespaceStorage=p,d?(l.localStorage=r({},_,{_type:"localStorage"}),l.sessionStorage=r({},_,{_type:"sessionStorage"})):(l.localStorage=r({},_,{_type:"localCookieStorage"}),l.sessionStorage=r({},_,{_type:"sessionCookieStorage"})),l.namespaceStorages={},l.removeAllStorages=function(e){l.localStorage.removeAll(e),l.sessionStorage.removeAll(e),l.cookieStorage&&l.cookieStorage.removeAll(e),e||(l.namespaceStorages={})},l.alwaysUseJsonInStorage=function(e){_.alwaysUseJson=e,l.localStorage.alwaysUseJson=e,l.sessionStorage.alwaysUseJson=e,l.cookieStorage&&(l.cookieStorage.alwaysUseJson=e)},l});