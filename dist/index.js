"use strict";var q=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var d=q(function(I,p){
var g=require('@stdlib/array-base-assert-is-accessor-array/dist'),s=require('@stdlib/random-base-normal/dist');function O(a,e,n,t,c,i,f,u){var r,v,l;if(r={arity:0,fcn:null},f){if(e===0&&c===0)return g(a)?v=a.get(n):v=a[n],g(t)?l=t.get(i):l=t[i],r.fcn=s.factory(v,l,u),r;r.fcn=s.factory(u)}else r.fcn=s;return r.arity+=2,r}p.exports=O
});var h=q(function(J,b){
var R=require('@stdlib/strided-base-nullary/dist'),j=require('@stdlib/strided-base-binary/dist'),w=d();function z(a,e,n,t,c,i,f,u){var r=w(e,n,0,t,c,0,arguments.length>7,u);return r.arity===0?(R([i],[a],[f],r.fcn),i):(j([e,t,i],[a],[n,c,f],r.fcn),i)}b.exports=z
});var k=q(function(K,A){
var B=require('@stdlib/strided-base-nullary/dist').ndarray,C=require('@stdlib/strided-base-binary/dist').ndarray,D=d();function E(a,e,n,t,c,i,f,u,r,v,l){var y=D(e,n,t,c,i,f,arguments.length>10,l);return y.arity===0?(B([u],[a],[r],[v],y.fcn),u):(C([e,c,u],[a],[n,i,r],[t,f,v],y.fcn),u)}A.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=h(),G=k();F(x,"ndarray",G);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
