"use strict";var majinbuu=function(t,n){function e(n){return t[n]||i(n)}function i(i){var o={},r={exports:o};return n[i].call(o,window,e,r,o),t[i]=r.exports}var o=e(0);return o.__esModule?o.default:o}([],[function(t,n,e,i){/*! Copyright (c) 2017, Andrea Giammarchi, @WebReflection */
var o=t.Int32Array||Array,r=function(t,n,e){var i=t.length,o=n.length,r=(e||1/0)<Math.sqrt((i||1)*(o||1));i<1||r?(o||r)&&t.splice.apply(t,[0,i].concat(n)):o<1?t.splice(0):s(t,l(t,n,c(t,n)))},u=function(t,n){var e=n.splice;return n.splice=function i(){n.splice=e;var o=t.splice.apply(t,arguments);return n.splice=i,o},n},c=function(t,n){var e=t.length+1,i=n.length+1,r=new o(e*i),u=0,c=0,a=0,l=0,s=0,p=0,f=void 0,v=void 0,d=void 0;for(r[0]=0;++u<i;)r[u]=u;for(;++c<e;){for(a=u=0,p=s,r[(s=c*i)+u]=c;++u<i;)f=r[p+u]+1,v=r[s+a]+1,d=r[p+a]+(t[l]==n[a]?0:1),r[s+u]=f<v?f<d?f:d:v<d?v:d,++a;l=c}return r},a=function(t,n,e,i,o,r){t.unshift({type:n,x:e,y:i,count:o,items:r})},l=function(t,n,e){for(var i=[],o=t.length+1,r=n.length+1,u=o-1,c=r-1,l=void 0,s=void 0,p=void 0,f=void 0,v=void 0,d=void 0;c&&u;)d=(v=u*r+c)-r,l=e[v],s=e[d],p=e[v-1],(f=e[d-1])<=p&&f<=s&&f<=l?(c--,u--,f<l&&a(i,"sub",c,u,1,[n[c]])):p<=s&&p<=l?a(i,"ins",--c,u,0,[n[c]]):a(i,"del",c,--u,1,[]);for(;c--;)a(i,"ins",c,u,0,[n[c]]);for(;u--;)a(i,"del",c,u,1,[]);return i},s=function(t,n){var e=n.length,i=0,o=1,r=void 0,u=void 0,c=void 0;if(e){for(c=u=n[0];o<e;)r=n[o++],u.type===r.type&&r.x-u.x<=1&&r.y-u.y<=1?(c.count+=r.count,c.items=c.items.concat(r.items)):(t.splice.apply(t,[c.y+i,c.count].concat(c.items)),i+="ins"===c.type?c.items.length:"del"===c.type?-c.count:0,c=r),u=r;t.splice.apply(t,[c.y+i,c.count].concat(c.items))}};r.aura=u,Object.defineProperty(i,"__esModule",{value:!0}).default=r,i.aura=u,i.majinbuu=r}]);