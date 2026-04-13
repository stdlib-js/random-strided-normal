"use strict";var q=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var d=q(function(I,p){
var g=require('@stdlib/array-base-assert-is-accessor-array/dist'),s=require('@stdlib/random-base-normal/dist');function O(a,e,u,i,c,n,f,t){var r,v,l;if(r={arity:0,fcn:null},f){if(e===0&&c===0)return g(a)?v=a.get(u):v=a[u],g(i)?l=i.get(n):l=i[n],r.fcn=s.factory(v,l,t),r;r.fcn=s.factory(t)}else r.fcn=s;return r.arity+=2,r}p.exports=O
});var h=q(function(J,b){
var R=require('@stdlib/strided-base-nullary/dist'),j=require('@stdlib/strided-base-binary/dist'),w=d();function z(a,e,u,i,c,n,f,t){var r=w(e,u,0,i,c,0,arguments.length>7,t);return r.arity===0?(R([n],[a],[f],r.fcn),n):(j([e,i,n],[a],[u,c,f],r.fcn),n)}b.exports=z
});var k=q(function(K,A){
var B=require('@stdlib/strided-base-nullary/dist').ndarray,C=require('@stdlib/strided-base-binary/dist').ndarray,D=d();function E(a,e,u,i,c,n,f,t,r,v,l){var y=D(e,u,i,c,n,f,arguments.length>10,l);return y.arity===0?(B([t],[a],[r],[v],y.fcn),t):(C([e,c,t],[a],[u,n,r],[i,f,v],y.fcn),t)}A.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=h(),G=k();F(x,"ndarray",G);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
