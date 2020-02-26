parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"IwFA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setState=t,exports.state=void 0;const e={searchTerm:null,recipe:null,videos:null,video:null};function t(t,s){e[t]=s}exports.state=e;
},{}],"pIbI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=require("./state");function t(){const t=`https://api.edamam.com/search?q=${e.state.searchTerm}&app_id=d010c74d&app_key=a78a3c4b083eb79d624c09e09fe86a77&rom=0&to=1`;return fetch(t).then(e=>e.json()).then(e=>e.hits[0]).catch(e=>console.log(e))}
},{"./state":"IwFA"}],"PMYb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=require("./state");function t(){const t=`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=AIzaSyAGe_FTMQJMizv6xwYFLtW-beRGMidEzlE&q=${e.state.searchTerm}%20recipe`;return fetch(t).then(e=>e.json()).then(e=>e.items).catch(e=>console.log(e))}
},{"./state":"IwFA"}],"jAQW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=i,exports.removePreviousRecipe=n;var e=require("../../state");function i(){const i=e.state.recipe.recipe;let n=`\n<div id="recipe" class="ui items">\n  <div class="item">\n    <a class="ui small image">\n      <img src="${i.image}" alt="${i.label}" />\n    </a>\n    <div class="content">\n      <a class="header">${i.label}</a>\n      <div class="description">\n      <ul>`;return i.ingredientLines.forEach(e=>n+=`<li>${e}</li>`),n+="</ul>\n      </div>\n    </div>\n  </div>\n</div>\n"}function n(){const e=document.querySelector("#recipe");e&&e.remove()}
},{"../../state":"IwFA"}],"zhfx":[function(require,module,exports) {

},{}],"FdDv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.videoList=t,exports.init=i,exports.removeVideos=s;var e=require("../../state");function t(){const t=e.state.videos;let i='<div id="video-list" class="ui relaxed divided list">';return t.forEach(e=>{i+=`\n\t<div class="video-item item" data-id="${e.id.videoId}">\n\t<img class="ui image" src="${e.snippet.thumbnails.medium.url}" alt="${e.snippet.title}" />\n\t<div class="content">\n\t<div class="header">\n\t${e.snippet.title}\n\t</div>\n</div>\n</div>\n\t`}),i+="</div>"}function i(){Array.from(document.querySelectorAll("#video-list .item")).forEach(e=>{e.addEventListener("click",d)})}function d(t){t.preventDefault();const i=this.dataset.id,d=e.state.videos.filter(e=>i==e.id.videoId)[0];(0,e.setState)("video",d);let s=`<div id="video-player">\n<iframe width="720px" height="420px" src="https://www.youtube.com/embed/${d.id.videoId}" /></div>`;s+=`\n<div class="ui segment"><h2 class="ui header">${d.snippet.title}</h2>\n<p>${d.snippet.description}</p></div>`,document.querySelector("#selected-video").innerHTML=s}function s(){const e=document.querySelector("#video-player"),t=document.querySelector("#video-list");t&&t.remove(),e&&e.remove()}require("./index.css");
},{"../../state":"IwFA","./index.css":"zhfx"}],"UHbq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=c,exports.init=s;var e=require("../../state"),t=u(require("../../recipeData")),r=u(require("../../recipeVideos")),n=a(require("../recipeDisplay")),i=require("../videoList");function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=n?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}function u(e){return e&&e.__esModule?e:{default:e}}function c(){return'<div class="ui segment">\n\t<h1>Search for a Recipe</h1>\n    <form name="search" id="search" class="ui form">\n      <p><label for="search-field">Enter Search Term Below:</label></p>\n      <input id="search-field" name="search" type="search" />\n      <input type="submit" id="submit" value="Search" />\n    </form></div>'}function s(){document.querySelector("#search").addEventListener("submit",l)}async function l(o){o.preventDefault(),(0,n.removePreviousRecipe)(),(0,i.removeVideos)();const a=document.querySelector("#search-field").value.toLowerCase();(0,e.setState)("searchTerm",a);let[u,c]=await Promise.all([(0,t.default)(),(0,r.default)()]);(0,e.setState)("recipe",u),(0,e.setState)("videos",c),(0,e.setState)("video",c[0]);const s=(0,n.default)();document.querySelector("#app").insertAdjacentHTML("beforeend",s);const l=(0,i.videoList)();document.querySelector("#videos").insertAdjacentHTML("beforeend",l),(0,i.init)()}
},{"../../state":"IwFA","../../recipeData":"pIbI","../../recipeVideos":"PMYb","../recipeDisplay":"jAQW","../videoList":"FdDv"}],"H99C":[function(require,module,exports) {
"use strict";var e=r(require("./components/search"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var c=o?Object.getOwnPropertyDescriptor(e,u):null;c&&(c.get||c.set)?Object.defineProperty(n,u,c):n[u]=e[u]}return n.default=e,r&&r.set(e,n),n}function n(){let t=(0,e.default)();document.querySelector("#app").insertAdjacentHTML("beforeend",t),(0,e.init)()}n();
},{"./components/search":"UHbq"}]},{},["H99C"], null)
//# sourceMappingURL=src.de562859.js.map