function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function r(t){return t.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/^\w/,function(t){return t.toUpperCase()})}var e=function(r){if(Array.isArray(r))return t(r)}(i=document.querySelectorAll("input"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(i)||function(r,e){if(r){if("string"==typeof r)return t(r,void 0);var n=Object.prototype.toString.call(r).slice(8,-1);if("Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(r,void 0)}}(i)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n=!0,o=!1,a=void 0;try{for(var i,l,u=e[Symbol.iterator]();!(n=(l=u.next()).done);n=!0){var c=l.value,f=document.createElement("label");f.setAttribute("for",c.id),f.classList.add("field-label"),f.textContent=r(c.getAttribute("name")),c.placeholder=r(c.getAttribute("name")),c.parentNode.append(f)}}catch(t){o=!0,a=t}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}
//# sourceMappingURL=index.36fc0a5c.js.map