parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
var n=document.querySelector(".container"),r=document.querySelector("#style"),e="/*你好我是张博。\n下面我来打一个太极:\n*/\n.tj-box{\n    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);\n}\n.tj-box::before{\n    content: '';\n    display: block;\n    width: 50%;\n    height: 50%;\n    position: absolute;\n    top: 0%;\n    left: 50%;\n    transform: translateX(-50%);\n    border-radius: 50%;\n    background: black;\n    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);\n}\n.tj-box::after{\n    content: '';\n    display: block;\n    width: 50%;\n    height: 50%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%);\n    border-radius: 50%;\n    background: white;\n    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);\n}\n",t=0,o=function o(){console.log(e[t]),n.innerHTML=e.substring(0,t).replace(/\n/g,"</br>").replace(/\s/g,"&nbsp"),r.innerHTML=e.substring(0,t),window.scrollTo(0,9999),n.scrollTo(0,9999),t<e.length&&(t++,setTimeout(o,50))};o();
},{}]},{},["Focm"], null)
//# sourceMappingURL=/src.f2a153ee.js.map