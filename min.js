var majinbuu=function(){"use strict";function t(t,n){var e,c,r=Math.min,u=t.length,p=n.length,s=0,l=0,a=0,f=0;if(u<1)p&&t.splice.apply(t,[0,0].concat(n));else if(p<1)t.splice(0);else{for(e=[[0]];f++<p;)e[0][f]=f;for(;a++<u;){for(s=f=0,c=t[l],e[a]=[a];f++<p;)e[a][f]=r(e[l][f]+1,e[a][s]+1,e[l][s]+(c===n[s]?0:1)),s++;l++}o(t,i(t,n,e))}}function n(t){n.prototype=s,this._=t,this.splice=c}function e(t,n,e,i,o,c){t.unshift({type:n,x:e,y:i,count:o,items:c})}function i(t,n,i){for(var o,c,s,l,a=[],f=t.length+1-1,y=n.length+1-1;y&&f;)o=i[f][y],c=i[f-1][y],s=i[f][y-1],(l=i[f-1][y-1])<=s&&l<=c&&l<=o?(y--,f--,l<o&&e(a,p,y,f,1,[n[y]])):s<=c&&s<=o?e(a,u,--y,f,0,[n[y]]):e(a,r,y,--f,1,[]);for(;y--;)e(a,u,y,f,0,[n[y]]);for(;f--;)e(a,r,y,f,1,[]);return a}function o(t,n){var e,i,o,c=0,p=1,s=n.length;if(s){for(o=i=n[0];p<s;)e=n[p++],i.type===e.type&&e.x-i.x<=1&&e.y-i.y<=1?(o.count+=e.count,o.items=o.items.concat(e.items)):(t.splice.apply(t,[o.y+c,o.count].concat(o.items)),c+=o.type===u?o.items.length:o.type===r?-o.count:0,o=e),i=e;t.splice.apply(t,[o.y+c,o.count].concat(o.items))}}function c(){return this._.splice.apply(this._,arguments)}/*! Copyright (c) 2017, Andrea Giammarchi, @WebReflection */
var r="del",u="ins",p="sub",s=n.prototype;return t.aura=function(t,e){return n.prototype=e,new n(t)},t}();try{module.exports=majinbuu}catch(t){}