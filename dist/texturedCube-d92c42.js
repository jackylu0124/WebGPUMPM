!function(t){var n={};function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)r.d(e,a,function(n){return t[n]}.bind(null,a));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="dist/",r(r.s=17)}({0:function(t,n,r){"use strict";r.d(n,"a",(function(){return e})),r.d(n,"b",(function(){return a}));var e={};r.r(e),r.d(e,"create",(function(){return c})),r.d(e,"clone",(function(){return f})),r.d(e,"copy",(function(){return s})),r.d(e,"fromValues",(function(){return d})),r.d(e,"set",(function(){return h})),r.d(e,"identity",(function(){return l})),r.d(e,"transpose",(function(){return M})),r.d(e,"invert",(function(){return m})),r.d(e,"adjoint",(function(){return v})),r.d(e,"determinant",(function(){return b})),r.d(e,"multiply",(function(){return p})),r.d(e,"translate",(function(){return g})),r.d(e,"scale",(function(){return y})),r.d(e,"rotate",(function(){return x})),r.d(e,"rotateX",(function(){return P})),r.d(e,"rotateY",(function(){return S})),r.d(e,"rotateZ",(function(){return w})),r.d(e,"fromTranslation",(function(){return T})),r.d(e,"fromScaling",(function(){return U})),r.d(e,"fromRotation",(function(){return V})),r.d(e,"fromXRotation",(function(){return A})),r.d(e,"fromYRotation",(function(){return q})),r.d(e,"fromZRotation",(function(){return G})),r.d(e,"fromRotationTranslation",(function(){return L})),r.d(e,"fromQuat2",(function(){return O})),r.d(e,"getTranslation",(function(){return R})),r.d(e,"getScaling",(function(){return B})),r.d(e,"getRotation",(function(){return j})),r.d(e,"fromRotationTranslationScale",(function(){return C})),r.d(e,"fromRotationTranslationScaleOrigin",(function(){return D})),r.d(e,"fromQuat",(function(){return E})),r.d(e,"frustum",(function(){return _})),r.d(e,"perspective",(function(){return F})),r.d(e,"perspectiveFromFieldOfView",(function(){return I})),r.d(e,"ortho",(function(){return z})),r.d(e,"lookAt",(function(){return Q})),r.d(e,"targetTo",(function(){return X})),r.d(e,"str",(function(){return Y})),r.d(e,"frob",(function(){return k})),r.d(e,"add",(function(){return N})),r.d(e,"subtract",(function(){return Z})),r.d(e,"multiplyScalar",(function(){return H})),r.d(e,"multiplyScalarAndAdd",(function(){return W})),r.d(e,"exactEquals",(function(){return J})),r.d(e,"equals",(function(){return K})),r.d(e,"mul",(function(){return $})),r.d(e,"sub",(function(){return tt}));var a={};r.r(a),r.d(a,"create",(function(){return nt})),r.d(a,"clone",(function(){return rt})),r.d(a,"length",(function(){return et})),r.d(a,"fromValues",(function(){return at})),r.d(a,"copy",(function(){return ut})),r.d(a,"set",(function(){return ot})),r.d(a,"add",(function(){return it})),r.d(a,"subtract",(function(){return ct})),r.d(a,"multiply",(function(){return ft})),r.d(a,"divide",(function(){return st})),r.d(a,"ceil",(function(){return dt})),r.d(a,"floor",(function(){return ht})),r.d(a,"min",(function(){return lt})),r.d(a,"max",(function(){return Mt})),r.d(a,"round",(function(){return mt})),r.d(a,"scale",(function(){return vt})),r.d(a,"scaleAndAdd",(function(){return bt})),r.d(a,"distance",(function(){return pt})),r.d(a,"squaredDistance",(function(){return gt})),r.d(a,"squaredLength",(function(){return yt})),r.d(a,"negate",(function(){return xt})),r.d(a,"inverse",(function(){return Pt})),r.d(a,"normalize",(function(){return St})),r.d(a,"dot",(function(){return wt})),r.d(a,"cross",(function(){return Tt})),r.d(a,"lerp",(function(){return Ut})),r.d(a,"hermite",(function(){return Vt})),r.d(a,"bezier",(function(){return At})),r.d(a,"random",(function(){return qt})),r.d(a,"transformMat4",(function(){return Gt})),r.d(a,"transformMat3",(function(){return Lt})),r.d(a,"transformQuat",(function(){return Ot})),r.d(a,"rotateX",(function(){return Rt})),r.d(a,"rotateY",(function(){return Bt})),r.d(a,"rotateZ",(function(){return jt})),r.d(a,"angle",(function(){return Ct})),r.d(a,"zero",(function(){return Dt})),r.d(a,"str",(function(){return Et})),r.d(a,"exactEquals",(function(){return _t})),r.d(a,"equals",(function(){return Ft})),r.d(a,"sub",(function(){return zt})),r.d(a,"mul",(function(){return Qt})),r.d(a,"div",(function(){return Xt})),r.d(a,"dist",(function(){return Yt})),r.d(a,"sqrDist",(function(){return kt})),r.d(a,"len",(function(){return Nt})),r.d(a,"sqrLen",(function(){return Zt})),r.d(a,"forEach",(function(){return Ht}));var u=1e-6,o="undefined"!=typeof Float32Array?Float32Array:Array,i=Math.random;Math.PI;function c(){var t=new o(16);return o!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function f(t){var n=new o(16);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function s(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function d(t,n,r,e,a,u,i,c,f,s,d,h,l,M,m,v){var b=new o(16);return b[0]=t,b[1]=n,b[2]=r,b[3]=e,b[4]=a,b[5]=u,b[6]=i,b[7]=c,b[8]=f,b[9]=s,b[10]=d,b[11]=h,b[12]=l,b[13]=M,b[14]=m,b[15]=v,b}function h(t,n,r,e,a,u,o,i,c,f,s,d,h,l,M,m,v){return t[0]=n,t[1]=r,t[2]=e,t[3]=a,t[4]=u,t[5]=o,t[6]=i,t[7]=c,t[8]=f,t[9]=s,t[10]=d,t[11]=h,t[12]=l,t[13]=M,t[14]=m,t[15]=v,t}function l(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function M(t,n){if(t===n){var r=n[1],e=n[2],a=n[3],u=n[6],o=n[7],i=n[11];t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=r,t[6]=n[9],t[7]=n[13],t[8]=e,t[9]=u,t[11]=n[14],t[12]=a,t[13]=o,t[14]=i}else t[0]=n[0],t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=n[1],t[5]=n[5],t[6]=n[9],t[7]=n[13],t[8]=n[2],t[9]=n[6],t[10]=n[10],t[11]=n[14],t[12]=n[3],t[13]=n[7],t[14]=n[11],t[15]=n[15];return t}function m(t,n){var r=n[0],e=n[1],a=n[2],u=n[3],o=n[4],i=n[5],c=n[6],f=n[7],s=n[8],d=n[9],h=n[10],l=n[11],M=n[12],m=n[13],v=n[14],b=n[15],p=r*i-e*o,g=r*c-a*o,y=r*f-u*o,x=e*c-a*i,P=e*f-u*i,S=a*f-u*c,w=s*m-d*M,T=s*v-h*M,U=s*b-l*M,V=d*v-h*m,A=d*b-l*m,q=h*b-l*v,G=p*q-g*A+y*V+x*U-P*T+S*w;return G?(G=1/G,t[0]=(i*q-c*A+f*V)*G,t[1]=(a*A-e*q-u*V)*G,t[2]=(m*S-v*P+b*x)*G,t[3]=(h*P-d*S-l*x)*G,t[4]=(c*U-o*q-f*T)*G,t[5]=(r*q-a*U+u*T)*G,t[6]=(v*y-M*S-b*g)*G,t[7]=(s*S-h*y+l*g)*G,t[8]=(o*A-i*U+f*w)*G,t[9]=(e*U-r*A-u*w)*G,t[10]=(M*P-m*y+b*p)*G,t[11]=(d*y-s*P-l*p)*G,t[12]=(i*T-o*V-c*w)*G,t[13]=(r*V-e*T+a*w)*G,t[14]=(m*g-M*x-v*p)*G,t[15]=(s*x-d*g+h*p)*G,t):null}function v(t,n){var r=n[0],e=n[1],a=n[2],u=n[3],o=n[4],i=n[5],c=n[6],f=n[7],s=n[8],d=n[9],h=n[10],l=n[11],M=n[12],m=n[13],v=n[14],b=n[15];return t[0]=i*(h*b-l*v)-d*(c*b-f*v)+m*(c*l-f*h),t[1]=-(e*(h*b-l*v)-d*(a*b-u*v)+m*(a*l-u*h)),t[2]=e*(c*b-f*v)-i*(a*b-u*v)+m*(a*f-u*c),t[3]=-(e*(c*l-f*h)-i*(a*l-u*h)+d*(a*f-u*c)),t[4]=-(o*(h*b-l*v)-s*(c*b-f*v)+M*(c*l-f*h)),t[5]=r*(h*b-l*v)-s*(a*b-u*v)+M*(a*l-u*h),t[6]=-(r*(c*b-f*v)-o*(a*b-u*v)+M*(a*f-u*c)),t[7]=r*(c*l-f*h)-o*(a*l-u*h)+s*(a*f-u*c),t[8]=o*(d*b-l*m)-s*(i*b-f*m)+M*(i*l-f*d),t[9]=-(r*(d*b-l*m)-s*(e*b-u*m)+M*(e*l-u*d)),t[10]=r*(i*b-f*m)-o*(e*b-u*m)+M*(e*f-u*i),t[11]=-(r*(i*l-f*d)-o*(e*l-u*d)+s*(e*f-u*i)),t[12]=-(o*(d*v-h*m)-s*(i*v-c*m)+M*(i*h-c*d)),t[13]=r*(d*v-h*m)-s*(e*v-a*m)+M*(e*h-a*d),t[14]=-(r*(i*v-c*m)-o*(e*v-a*m)+M*(e*c-a*i)),t[15]=r*(i*h-c*d)-o*(e*h-a*d)+s*(e*c-a*i),t}function b(t){var n=t[0],r=t[1],e=t[2],a=t[3],u=t[4],o=t[5],i=t[6],c=t[7],f=t[8],s=t[9],d=t[10],h=t[11],l=t[12],M=t[13],m=t[14],v=t[15];return(n*o-r*u)*(d*v-h*m)-(n*i-e*u)*(s*v-h*M)+(n*c-a*u)*(s*m-d*M)+(r*i-e*o)*(f*v-h*l)-(r*c-a*o)*(f*m-d*l)+(e*c-a*i)*(f*M-s*l)}function p(t,n,r){var e=n[0],a=n[1],u=n[2],o=n[3],i=n[4],c=n[5],f=n[6],s=n[7],d=n[8],h=n[9],l=n[10],M=n[11],m=n[12],v=n[13],b=n[14],p=n[15],g=r[0],y=r[1],x=r[2],P=r[3];return t[0]=g*e+y*i+x*d+P*m,t[1]=g*a+y*c+x*h+P*v,t[2]=g*u+y*f+x*l+P*b,t[3]=g*o+y*s+x*M+P*p,g=r[4],y=r[5],x=r[6],P=r[7],t[4]=g*e+y*i+x*d+P*m,t[5]=g*a+y*c+x*h+P*v,t[6]=g*u+y*f+x*l+P*b,t[7]=g*o+y*s+x*M+P*p,g=r[8],y=r[9],x=r[10],P=r[11],t[8]=g*e+y*i+x*d+P*m,t[9]=g*a+y*c+x*h+P*v,t[10]=g*u+y*f+x*l+P*b,t[11]=g*o+y*s+x*M+P*p,g=r[12],y=r[13],x=r[14],P=r[15],t[12]=g*e+y*i+x*d+P*m,t[13]=g*a+y*c+x*h+P*v,t[14]=g*u+y*f+x*l+P*b,t[15]=g*o+y*s+x*M+P*p,t}function g(t,n,r){var e,a,u,o,i,c,f,s,d,h,l,M,m=r[0],v=r[1],b=r[2];return n===t?(t[12]=n[0]*m+n[4]*v+n[8]*b+n[12],t[13]=n[1]*m+n[5]*v+n[9]*b+n[13],t[14]=n[2]*m+n[6]*v+n[10]*b+n[14],t[15]=n[3]*m+n[7]*v+n[11]*b+n[15]):(e=n[0],a=n[1],u=n[2],o=n[3],i=n[4],c=n[5],f=n[6],s=n[7],d=n[8],h=n[9],l=n[10],M=n[11],t[0]=e,t[1]=a,t[2]=u,t[3]=o,t[4]=i,t[5]=c,t[6]=f,t[7]=s,t[8]=d,t[9]=h,t[10]=l,t[11]=M,t[12]=e*m+i*v+d*b+n[12],t[13]=a*m+c*v+h*b+n[13],t[14]=u*m+f*v+l*b+n[14],t[15]=o*m+s*v+M*b+n[15]),t}function y(t,n,r){var e=r[0],a=r[1],u=r[2];return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t[3]=n[3]*e,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=n[11]*u,t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function x(t,n,r,e){var a,o,i,c,f,s,d,h,l,M,m,v,b,p,g,y,x,P,S,w,T,U,V,A,q=e[0],G=e[1],L=e[2],O=Math.hypot(q,G,L);return O<u?null:(q*=O=1/O,G*=O,L*=O,a=Math.sin(r),i=1-(o=Math.cos(r)),c=n[0],f=n[1],s=n[2],d=n[3],h=n[4],l=n[5],M=n[6],m=n[7],v=n[8],b=n[9],p=n[10],g=n[11],y=q*q*i+o,x=G*q*i+L*a,P=L*q*i-G*a,S=q*G*i-L*a,w=G*G*i+o,T=L*G*i+q*a,U=q*L*i+G*a,V=G*L*i-q*a,A=L*L*i+o,t[0]=c*y+h*x+v*P,t[1]=f*y+l*x+b*P,t[2]=s*y+M*x+p*P,t[3]=d*y+m*x+g*P,t[4]=c*S+h*w+v*T,t[5]=f*S+l*w+b*T,t[6]=s*S+M*w+p*T,t[7]=d*S+m*w+g*T,t[8]=c*U+h*V+v*A,t[9]=f*U+l*V+b*A,t[10]=s*U+M*V+p*A,t[11]=d*U+m*V+g*A,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t)}function P(t,n,r){var e=Math.sin(r),a=Math.cos(r),u=n[4],o=n[5],i=n[6],c=n[7],f=n[8],s=n[9],d=n[10],h=n[11];return n!==t&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[4]=u*a+f*e,t[5]=o*a+s*e,t[6]=i*a+d*e,t[7]=c*a+h*e,t[8]=f*a-u*e,t[9]=s*a-o*e,t[10]=d*a-i*e,t[11]=h*a-c*e,t}function S(t,n,r){var e=Math.sin(r),a=Math.cos(r),u=n[0],o=n[1],i=n[2],c=n[3],f=n[8],s=n[9],d=n[10],h=n[11];return n!==t&&(t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=u*a-f*e,t[1]=o*a-s*e,t[2]=i*a-d*e,t[3]=c*a-h*e,t[8]=u*e+f*a,t[9]=o*e+s*a,t[10]=i*e+d*a,t[11]=c*e+h*a,t}function w(t,n,r){var e=Math.sin(r),a=Math.cos(r),u=n[0],o=n[1],i=n[2],c=n[3],f=n[4],s=n[5],d=n[6],h=n[7];return n!==t&&(t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=u*a+f*e,t[1]=o*a+s*e,t[2]=i*a+d*e,t[3]=c*a+h*e,t[4]=f*a-u*e,t[5]=s*a-o*e,t[6]=d*a-i*e,t[7]=h*a-c*e,t}function T(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function U(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function V(t,n,r){var e,a,o,i=r[0],c=r[1],f=r[2],s=Math.hypot(i,c,f);return s<u?null:(i*=s=1/s,c*=s,f*=s,e=Math.sin(n),o=1-(a=Math.cos(n)),t[0]=i*i*o+a,t[1]=c*i*o+f*e,t[2]=f*i*o-c*e,t[3]=0,t[4]=i*c*o-f*e,t[5]=c*c*o+a,t[6]=f*c*o+i*e,t[7]=0,t[8]=i*f*o+c*e,t[9]=c*f*o-i*e,t[10]=f*f*o+a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function A(t,n){var r=Math.sin(n),e=Math.cos(n);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e,t[6]=r,t[7]=0,t[8]=0,t[9]=-r,t[10]=e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function q(t,n){var r=Math.sin(n),e=Math.cos(n);return t[0]=e,t[1]=0,t[2]=-r,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=r,t[9]=0,t[10]=e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function G(t,n){var r=Math.sin(n),e=Math.cos(n);return t[0]=e,t[1]=r,t[2]=0,t[3]=0,t[4]=-r,t[5]=e,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function L(t,n,r){var e=n[0],a=n[1],u=n[2],o=n[3],i=e+e,c=a+a,f=u+u,s=e*i,d=e*c,h=e*f,l=a*c,M=a*f,m=u*f,v=o*i,b=o*c,p=o*f;return t[0]=1-(l+m),t[1]=d+p,t[2]=h-b,t[3]=0,t[4]=d-p,t[5]=1-(s+m),t[6]=M+v,t[7]=0,t[8]=h+b,t[9]=M-v,t[10]=1-(s+l),t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function O(t,n){var r=new o(3),e=-n[0],a=-n[1],u=-n[2],i=n[3],c=n[4],f=n[5],s=n[6],d=n[7],h=e*e+a*a+u*u+i*i;return h>0?(r[0]=2*(c*i+d*e+f*u-s*a)/h,r[1]=2*(f*i+d*a+s*e-c*u)/h,r[2]=2*(s*i+d*u+c*a-f*e)/h):(r[0]=2*(c*i+d*e+f*u-s*a),r[1]=2*(f*i+d*a+s*e-c*u),r[2]=2*(s*i+d*u+c*a-f*e)),L(t,n,r),t}function R(t,n){return t[0]=n[12],t[1]=n[13],t[2]=n[14],t}function B(t,n){var r=n[0],e=n[1],a=n[2],u=n[4],o=n[5],i=n[6],c=n[8],f=n[9],s=n[10];return t[0]=Math.hypot(r,e,a),t[1]=Math.hypot(u,o,i),t[2]=Math.hypot(c,f,s),t}function j(t,n){var r=new o(3);B(r,n);var e=1/r[0],a=1/r[1],u=1/r[2],i=n[0]*e,c=n[1]*a,f=n[2]*u,s=n[4]*e,d=n[5]*a,h=n[6]*u,l=n[8]*e,M=n[9]*a,m=n[10]*u,v=i+d+m,b=0;return v>0?(b=2*Math.sqrt(v+1),t[3]=.25*b,t[0]=(h-M)/b,t[1]=(l-f)/b,t[2]=(c-s)/b):i>d&&i>m?(b=2*Math.sqrt(1+i-d-m),t[3]=(h-M)/b,t[0]=.25*b,t[1]=(c+s)/b,t[2]=(l+f)/b):d>m?(b=2*Math.sqrt(1+d-i-m),t[3]=(l-f)/b,t[0]=(c+s)/b,t[1]=.25*b,t[2]=(h+M)/b):(b=2*Math.sqrt(1+m-i-d),t[3]=(c-s)/b,t[0]=(l+f)/b,t[1]=(h+M)/b,t[2]=.25*b),t}function C(t,n,r,e){var a=n[0],u=n[1],o=n[2],i=n[3],c=a+a,f=u+u,s=o+o,d=a*c,h=a*f,l=a*s,M=u*f,m=u*s,v=o*s,b=i*c,p=i*f,g=i*s,y=e[0],x=e[1],P=e[2];return t[0]=(1-(M+v))*y,t[1]=(h+g)*y,t[2]=(l-p)*y,t[3]=0,t[4]=(h-g)*x,t[5]=(1-(d+v))*x,t[6]=(m+b)*x,t[7]=0,t[8]=(l+p)*P,t[9]=(m-b)*P,t[10]=(1-(d+M))*P,t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function D(t,n,r,e,a){var u=n[0],o=n[1],i=n[2],c=n[3],f=u+u,s=o+o,d=i+i,h=u*f,l=u*s,M=u*d,m=o*s,v=o*d,b=i*d,p=c*f,g=c*s,y=c*d,x=e[0],P=e[1],S=e[2],w=a[0],T=a[1],U=a[2],V=(1-(m+b))*x,A=(l+y)*x,q=(M-g)*x,G=(l-y)*P,L=(1-(h+b))*P,O=(v+p)*P,R=(M+g)*S,B=(v-p)*S,j=(1-(h+m))*S;return t[0]=V,t[1]=A,t[2]=q,t[3]=0,t[4]=G,t[5]=L,t[6]=O,t[7]=0,t[8]=R,t[9]=B,t[10]=j,t[11]=0,t[12]=r[0]+w-(V*w+G*T+R*U),t[13]=r[1]+T-(A*w+L*T+B*U),t[14]=r[2]+U-(q*w+O*T+j*U),t[15]=1,t}function E(t,n){var r=n[0],e=n[1],a=n[2],u=n[3],o=r+r,i=e+e,c=a+a,f=r*o,s=e*o,d=e*i,h=a*o,l=a*i,M=a*c,m=u*o,v=u*i,b=u*c;return t[0]=1-d-M,t[1]=s+b,t[2]=h-v,t[3]=0,t[4]=s-b,t[5]=1-f-M,t[6]=l+m,t[7]=0,t[8]=h+v,t[9]=l-m,t[10]=1-f-d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function _(t,n,r,e,a,u,o){var i=1/(r-n),c=1/(a-e),f=1/(u-o);return t[0]=2*u*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*u*c,t[6]=0,t[7]=0,t[8]=(r+n)*i,t[9]=(a+e)*c,t[10]=(o+u)*f,t[11]=-1,t[12]=0,t[13]=0,t[14]=o*u*2*f,t[15]=0,t}function F(t,n,r,e,a){var u,o=1/Math.tan(n/2);return t[0]=o/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=a&&a!==1/0?(u=1/(e-a),t[10]=(a+e)*u,t[14]=2*a*e*u):(t[10]=-1,t[14]=-2*e),t}function I(t,n,r,e){var a=Math.tan(n.upDegrees*Math.PI/180),u=Math.tan(n.downDegrees*Math.PI/180),o=Math.tan(n.leftDegrees*Math.PI/180),i=Math.tan(n.rightDegrees*Math.PI/180),c=2/(o+i),f=2/(a+u);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=f,t[6]=0,t[7]=0,t[8]=-(o-i)*c*.5,t[9]=(a-u)*f*.5,t[10]=e/(r-e),t[11]=-1,t[12]=0,t[13]=0,t[14]=e*r/(r-e),t[15]=0,t}function z(t,n,r,e,a,u,o){var i=1/(n-r),c=1/(e-a),f=1/(u-o);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*f,t[11]=0,t[12]=(n+r)*i,t[13]=(a+e)*c,t[14]=(o+u)*f,t[15]=1,t}function Q(t,n,r,e){var a,o,i,c,f,s,d,h,M,m,v=n[0],b=n[1],p=n[2],g=e[0],y=e[1],x=e[2],P=r[0],S=r[1],w=r[2];return Math.abs(v-P)<u&&Math.abs(b-S)<u&&Math.abs(p-w)<u?l(t):(d=v-P,h=b-S,M=p-w,a=y*(M*=m=1/Math.hypot(d,h,M))-x*(h*=m),o=x*(d*=m)-g*M,i=g*h-y*d,(m=Math.hypot(a,o,i))?(a*=m=1/m,o*=m,i*=m):(a=0,o=0,i=0),c=h*i-M*o,f=M*a-d*i,s=d*o-h*a,(m=Math.hypot(c,f,s))?(c*=m=1/m,f*=m,s*=m):(c=0,f=0,s=0),t[0]=a,t[1]=c,t[2]=d,t[3]=0,t[4]=o,t[5]=f,t[6]=h,t[7]=0,t[8]=i,t[9]=s,t[10]=M,t[11]=0,t[12]=-(a*v+o*b+i*p),t[13]=-(c*v+f*b+s*p),t[14]=-(d*v+h*b+M*p),t[15]=1,t)}function X(t,n,r,e){var a=n[0],u=n[1],o=n[2],i=e[0],c=e[1],f=e[2],s=a-r[0],d=u-r[1],h=o-r[2],l=s*s+d*d+h*h;l>0&&(s*=l=1/Math.sqrt(l),d*=l,h*=l);var M=c*h-f*d,m=f*s-i*h,v=i*d-c*s;return(l=M*M+m*m+v*v)>0&&(M*=l=1/Math.sqrt(l),m*=l,v*=l),t[0]=M,t[1]=m,t[2]=v,t[3]=0,t[4]=d*v-h*m,t[5]=h*M-s*v,t[6]=s*m-d*M,t[7]=0,t[8]=s,t[9]=d,t[10]=h,t[11]=0,t[12]=a,t[13]=u,t[14]=o,t[15]=1,t}function Y(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}function k(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])}function N(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t[4]=n[4]+r[4],t[5]=n[5]+r[5],t[6]=n[6]+r[6],t[7]=n[7]+r[7],t[8]=n[8]+r[8],t[9]=n[9]+r[9],t[10]=n[10]+r[10],t[11]=n[11]+r[11],t[12]=n[12]+r[12],t[13]=n[13]+r[13],t[14]=n[14]+r[14],t[15]=n[15]+r[15],t}function Z(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t[4]=n[4]-r[4],t[5]=n[5]-r[5],t[6]=n[6]-r[6],t[7]=n[7]-r[7],t[8]=n[8]-r[8],t[9]=n[9]-r[9],t[10]=n[10]-r[10],t[11]=n[11]-r[11],t[12]=n[12]-r[12],t[13]=n[13]-r[13],t[14]=n[14]-r[14],t[15]=n[15]-r[15],t}function H(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=n[7]*r,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=n[11]*r,t[12]=n[12]*r,t[13]=n[13]*r,t[14]=n[14]*r,t[15]=n[15]*r,t}function W(t,n,r,e){return t[0]=n[0]+r[0]*e,t[1]=n[1]+r[1]*e,t[2]=n[2]+r[2]*e,t[3]=n[3]+r[3]*e,t[4]=n[4]+r[4]*e,t[5]=n[5]+r[5]*e,t[6]=n[6]+r[6]*e,t[7]=n[7]+r[7]*e,t[8]=n[8]+r[8]*e,t[9]=n[9]+r[9]*e,t[10]=n[10]+r[10]*e,t[11]=n[11]+r[11]*e,t[12]=n[12]+r[12]*e,t[13]=n[13]+r[13]*e,t[14]=n[14]+r[14]*e,t[15]=n[15]+r[15]*e,t}function J(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]&&t[9]===n[9]&&t[10]===n[10]&&t[11]===n[11]&&t[12]===n[12]&&t[13]===n[13]&&t[14]===n[14]&&t[15]===n[15]}function K(t,n){var r=t[0],e=t[1],a=t[2],o=t[3],i=t[4],c=t[5],f=t[6],s=t[7],d=t[8],h=t[9],l=t[10],M=t[11],m=t[12],v=t[13],b=t[14],p=t[15],g=n[0],y=n[1],x=n[2],P=n[3],S=n[4],w=n[5],T=n[6],U=n[7],V=n[8],A=n[9],q=n[10],G=n[11],L=n[12],O=n[13],R=n[14],B=n[15];return Math.abs(r-g)<=u*Math.max(1,Math.abs(r),Math.abs(g))&&Math.abs(e-y)<=u*Math.max(1,Math.abs(e),Math.abs(y))&&Math.abs(a-x)<=u*Math.max(1,Math.abs(a),Math.abs(x))&&Math.abs(o-P)<=u*Math.max(1,Math.abs(o),Math.abs(P))&&Math.abs(i-S)<=u*Math.max(1,Math.abs(i),Math.abs(S))&&Math.abs(c-w)<=u*Math.max(1,Math.abs(c),Math.abs(w))&&Math.abs(f-T)<=u*Math.max(1,Math.abs(f),Math.abs(T))&&Math.abs(s-U)<=u*Math.max(1,Math.abs(s),Math.abs(U))&&Math.abs(d-V)<=u*Math.max(1,Math.abs(d),Math.abs(V))&&Math.abs(h-A)<=u*Math.max(1,Math.abs(h),Math.abs(A))&&Math.abs(l-q)<=u*Math.max(1,Math.abs(l),Math.abs(q))&&Math.abs(M-G)<=u*Math.max(1,Math.abs(M),Math.abs(G))&&Math.abs(m-L)<=u*Math.max(1,Math.abs(m),Math.abs(L))&&Math.abs(v-O)<=u*Math.max(1,Math.abs(v),Math.abs(O))&&Math.abs(b-R)<=u*Math.max(1,Math.abs(b),Math.abs(R))&&Math.abs(p-B)<=u*Math.max(1,Math.abs(p),Math.abs(B))}Math.hypot||(Math.hypot=function(){for(var t=0,n=arguments.length;n--;)t+=arguments[n]*arguments[n];return Math.sqrt(t)});var $=p,tt=Z;function nt(){var t=new o(3);return o!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function rt(t){var n=new o(3);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n}function et(t){var n=t[0],r=t[1],e=t[2];return Math.hypot(n,r,e)}function at(t,n,r){var e=new o(3);return e[0]=t,e[1]=n,e[2]=r,e}function ut(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function ot(t,n,r,e){return t[0]=n,t[1]=r,t[2]=e,t}function it(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t}function ct(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t}function ft(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t[2]=n[2]*r[2],t}function st(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t[2]=n[2]/r[2],t}function dt(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t}function ht(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t}function lt(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t[2]=Math.min(n[2],r[2]),t}function Mt(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t[2]=Math.max(n[2],r[2]),t}function mt(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t}function vt(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t}function bt(t,n,r,e){return t[0]=n[0]+r[0]*e,t[1]=n[1]+r[1]*e,t[2]=n[2]+r[2]*e,t}function pt(t,n){var r=n[0]-t[0],e=n[1]-t[1],a=n[2]-t[2];return Math.hypot(r,e,a)}function gt(t,n){var r=n[0]-t[0],e=n[1]-t[1],a=n[2]-t[2];return r*r+e*e+a*a}function yt(t){var n=t[0],r=t[1],e=t[2];return n*n+r*r+e*e}function xt(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t}function Pt(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t}function St(t,n){var r=n[0],e=n[1],a=n[2],u=r*r+e*e+a*a;return u>0&&(u=1/Math.sqrt(u)),t[0]=n[0]*u,t[1]=n[1]*u,t[2]=n[2]*u,t}function wt(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function Tt(t,n,r){var e=n[0],a=n[1],u=n[2],o=r[0],i=r[1],c=r[2];return t[0]=a*c-u*i,t[1]=u*o-e*c,t[2]=e*i-a*o,t}function Ut(t,n,r,e){var a=n[0],u=n[1],o=n[2];return t[0]=a+e*(r[0]-a),t[1]=u+e*(r[1]-u),t[2]=o+e*(r[2]-o),t}function Vt(t,n,r,e,a,u){var o=u*u,i=o*(2*u-3)+1,c=o*(u-2)+u,f=o*(u-1),s=o*(3-2*u);return t[0]=n[0]*i+r[0]*c+e[0]*f+a[0]*s,t[1]=n[1]*i+r[1]*c+e[1]*f+a[1]*s,t[2]=n[2]*i+r[2]*c+e[2]*f+a[2]*s,t}function At(t,n,r,e,a,u){var o=1-u,i=o*o,c=u*u,f=i*o,s=3*u*i,d=3*c*o,h=c*u;return t[0]=n[0]*f+r[0]*s+e[0]*d+a[0]*h,t[1]=n[1]*f+r[1]*s+e[1]*d+a[1]*h,t[2]=n[2]*f+r[2]*s+e[2]*d+a[2]*h,t}function qt(t,n){n=n||1;var r=2*i()*Math.PI,e=2*i()-1,a=Math.sqrt(1-e*e)*n;return t[0]=Math.cos(r)*a,t[1]=Math.sin(r)*a,t[2]=e*n,t}function Gt(t,n,r){var e=n[0],a=n[1],u=n[2],o=r[3]*e+r[7]*a+r[11]*u+r[15];return o=o||1,t[0]=(r[0]*e+r[4]*a+r[8]*u+r[12])/o,t[1]=(r[1]*e+r[5]*a+r[9]*u+r[13])/o,t[2]=(r[2]*e+r[6]*a+r[10]*u+r[14])/o,t}function Lt(t,n,r){var e=n[0],a=n[1],u=n[2];return t[0]=e*r[0]+a*r[3]+u*r[6],t[1]=e*r[1]+a*r[4]+u*r[7],t[2]=e*r[2]+a*r[5]+u*r[8],t}function Ot(t,n,r){var e=r[0],a=r[1],u=r[2],o=r[3],i=n[0],c=n[1],f=n[2],s=a*f-u*c,d=u*i-e*f,h=e*c-a*i,l=a*h-u*d,M=u*s-e*h,m=e*d-a*s,v=2*o;return s*=v,d*=v,h*=v,l*=2,M*=2,m*=2,t[0]=i+s+l,t[1]=c+d+M,t[2]=f+h+m,t}function Rt(t,n,r,e){var a=[],u=[];return a[0]=n[0]-r[0],a[1]=n[1]-r[1],a[2]=n[2]-r[2],u[0]=a[0],u[1]=a[1]*Math.cos(e)-a[2]*Math.sin(e),u[2]=a[1]*Math.sin(e)+a[2]*Math.cos(e),t[0]=u[0]+r[0],t[1]=u[1]+r[1],t[2]=u[2]+r[2],t}function Bt(t,n,r,e){var a=[],u=[];return a[0]=n[0]-r[0],a[1]=n[1]-r[1],a[2]=n[2]-r[2],u[0]=a[2]*Math.sin(e)+a[0]*Math.cos(e),u[1]=a[1],u[2]=a[2]*Math.cos(e)-a[0]*Math.sin(e),t[0]=u[0]+r[0],t[1]=u[1]+r[1],t[2]=u[2]+r[2],t}function jt(t,n,r,e){var a=[],u=[];return a[0]=n[0]-r[0],a[1]=n[1]-r[1],a[2]=n[2]-r[2],u[0]=a[0]*Math.cos(e)-a[1]*Math.sin(e),u[1]=a[0]*Math.sin(e)+a[1]*Math.cos(e),u[2]=a[2],t[0]=u[0]+r[0],t[1]=u[1]+r[1],t[2]=u[2]+r[2],t}function Ct(t,n){var r=t[0],e=t[1],a=t[2],u=n[0],o=n[1],i=n[2],c=Math.sqrt(r*r+e*e+a*a)*Math.sqrt(u*u+o*o+i*i),f=c&&wt(t,n)/c;return Math.acos(Math.min(Math.max(f,-1),1))}function Dt(t){return t[0]=0,t[1]=0,t[2]=0,t}function Et(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"}function _t(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function Ft(t,n){var r=t[0],e=t[1],a=t[2],o=n[0],i=n[1],c=n[2];return Math.abs(r-o)<=u*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(e-i)<=u*Math.max(1,Math.abs(e),Math.abs(i))&&Math.abs(a-c)<=u*Math.max(1,Math.abs(a),Math.abs(c))}var It,zt=ct,Qt=ft,Xt=st,Yt=pt,kt=gt,Nt=et,Zt=yt,Ht=(It=nt(),function(t,n,r,e,a,u){var o,i;for(n||(n=3),r||(r=0),i=e?Math.min(e*n+r,t.length):t.length,o=r;o<i;o+=n)It[0]=t[o],It[1]=t[o+1],It[2]=t[o+2],a(It,It,u),t[o]=It[0],t[o+1]=It[1],t[o+2]=It[2];return t})},1:function(t,n,r){"use strict";r.d(n,"e",(function(){return e})),r.d(n,"b",(function(){return a})),r.d(n,"a",(function(){return u})),r.d(n,"c",(function(){return o})),r.d(n,"d",(function(){return i}));const e=40,a=0,u=16,o=32,i=new Float32Array([1,-1,1,1,1,0,1,1,1,1,-1,-1,1,1,0,0,1,1,0,1,-1,-1,-1,1,0,0,0,1,0,0,1,-1,-1,1,1,0,0,1,1,0,1,-1,1,1,1,0,1,1,1,1,-1,-1,-1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,0,1,1,-1,-1,1,1,0,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,0,0,-1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,-1,1,1,1,0,1,0,0,-1,1,-1,1,0,1,0,1,1,0,-1,1,1,1,0,1,1,1,1,1,1,1,-1,1,1,1,0,1,0,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,1,-1,1,0,1,0,1,0,0,-1,-1,-1,1,0,0,0,1,1,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,-1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,-1,1,1,0,0,1,1,0,0,-1,-1,1,1,0,0,1,1,0,0,1,-1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,1,1,-1,-1,-1,1,0,0,0,1,0,1,-1,1,-1,1,0,1,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,-1,-1,1,1,0,0,1,1,1,-1,1,-1,1,0,1,0,1,0,0])},17:function(t,n,r){"use strict";r.r(n),r.d(n,"title",(function(){return i})),r.d(n,"description",(function(){return c})),r.d(n,"init",(function(){return f})),r.d(n,"glslShaders",(function(){return s})),r.d(n,"wgslShaders",(function(){return d}));var e=r(0),a=r(1),u=r(2),o=function(t,n,r,e){return new(r||(r=Promise))((function(a,u){function o(t){try{c(e.next(t))}catch(t){u(t)}}function i(t){try{c(e.throw(t))}catch(t){u(t)}}function c(t){var n;t.done?a(t.value):(n=t.value,n instanceof r?n:new r((function(t){t(n)}))).then(o,i)}c((e=e.apply(t,n||[])).next())}))};const i="Textured Cube",c="This example shows how to bind and sample textures.";function f(t,n){return o(this,void 0,void 0,(function*(){const r=yield navigator.gpu.requestAdapter(),o=yield r.requestDevice(),i=yield Object(u.a)(),c=Math.abs(t.width/t.height);let f=e.a.create();e.a.perspective(f,2*Math.PI/5,c,1,100);const h=t.getContext("gpupresent").configureSwapChain({device:o,format:"bgra8unorm"}),l=o.createBuffer({size:a.d.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0});new Float32Array(l.getMappedRange()).set(a.d),l.unmap();const M=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,type:"uniform-buffer"},{binding:1,visibility:GPUShaderStage.FRAGMENT,type:"sampler"},{binding:2,visibility:GPUShaderStage.FRAGMENT,type:"sampled-texture"}]}),m=o.createPipelineLayout({bindGroupLayouts:[M]}),v=o.createRenderPipeline({layout:m,vertexStage:{module:n?o.createShaderModule({code:d.vertex}):o.createShaderModule({code:s.vertex,transform:t=>i.compileGLSL(t,"vertex")}),entryPoint:"main"},fragmentStage:{module:n?o.createShaderModule({code:d.fragment}):o.createShaderModule({code:s.fragment,transform:t=>i.compileGLSL(t,"fragment")}),entryPoint:"main"},primitiveTopology:"triangle-list",depthStencilState:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus-stencil8"},vertexState:{vertexBuffers:[{arrayStride:a.e,attributes:[{shaderLocation:0,offset:a.b,format:"float4"},{shaderLocation:1,offset:a.c,format:"float2"}]}]},rasterizationState:{cullMode:"back"},colorStates:[{format:"bgra8unorm"}]}),b={colorAttachments:[{attachment:void 0,loadValue:{r:.5,g:.5,b:.5,a:1}}],depthStencilAttachment:{attachment:o.createTexture({size:{width:t.width,height:t.height,depth:1},format:"depth24plus-stencil8",usage:GPUTextureUsage.OUTPUT_ATTACHMENT}).createView(),depthLoadValue:1,depthStoreOp:"store",stencilLoadValue:0,stencilStoreOp:"store"}},p=o.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let g;{const t=document.createElement("img");t.src="assets/img/Di-3d.png",yield t.decode();const n=yield createImageBitmap(t);g=o.createTexture({size:[n.width,n.height,1],format:"rgba8unorm",usage:GPUTextureUsage.SAMPLED|GPUTextureUsage.COPY_DST}),o.defaultQueue.copyImageBitmapToTexture({imageBitmap:n},{texture:g},[n.width,n.height,1])}const y=o.createSampler({magFilter:"linear",minFilter:"linear"}),x=o.createBindGroup({layout:v.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:p}},{binding:1,resource:y},{binding:2,resource:g.createView()}]});return function(){const t=function(){let t=e.a.create();e.a.translate(t,t,e.b.fromValues(0,0,-4));let n=Date.now()/1e3;e.a.rotate(t,t,1,e.b.fromValues(Math.sin(n),Math.cos(n),0));let r=e.a.create();return e.a.multiply(r,f,t),r}();o.defaultQueue.writeBuffer(p,0,t.buffer,t.byteOffset,t.byteLength),b.colorAttachments[0].attachment=h.getCurrentTexture().createView();const n=o.createCommandEncoder(),r=n.beginRenderPass(b);r.setPipeline(v),r.setBindGroup(0,x),r.setVertexBuffer(0,l),r.draw(36,1,0,0),r.endPass(),o.defaultQueue.submit([n.finish()])}}))}const s={vertex:"#version 450\nlayout(set = 0, binding = 0) uniform Uniforms {\n  mat4 modelViewProjectionMatrix;\n} uniforms;\n\nlayout(location = 0) in vec4 position;\nlayout(location = 1) in vec2 uv;\n\nlayout(location = 0) out vec2 fragUV;\nlayout(location = 1) out vec4 fragPosition;\n\nvoid main() {\n  fragPosition = 0.5 * (position + vec4(1.0));\n  gl_Position = uniforms.modelViewProjectionMatrix * position;\n  fragUV = uv;\n}\n",fragment:"#version 450\nlayout(set = 0, binding = 1) uniform sampler mySampler;\nlayout(set = 0, binding = 2) uniform texture2D myTexture;\n\nlayout(location = 0) in vec2 fragUV;\nlayout(location = 1) in vec4 fragPosition;\nlayout(location = 0) out vec4 outColor;\n\nvoid main() {\n  outColor =  texture(sampler2D(myTexture, mySampler), fragUV) * fragPosition;\n}\n"},d={vertex:"\n[[block]] struct Uniforms {\n  [[offset(0)]] modelViewProjectionMatrix : mat4x4<f32>;\n};\n[[binding(0), set(0)]] var<uniform> uniforms : Uniforms;\n\n[[location(0)]] var<in> position : vec4<f32>;\n[[location(1)]] var<in> uv : vec2<f32>;\n\n[[builtin(position)]] var<out> Position : vec4<f32>;\n[[location(0)]] var<out> fragUV : vec2<f32>;\n[[location(1)]] var<out> fragPosition: vec4<f32>;\n\n[[stage(vertex)]]\nfn main() -> void {\n  fragPosition = 0.5 * (position + vec4<f32>(1.0, 1.0, 1.0, 1.0));\n  Position = uniforms.modelViewProjectionMatrix * position;\n  fragUV = uv;\n  return;\n}\n",fragment:"\n[[binding(1), set(0)]] var<uniform_constant> mySampler: sampler;\n[[binding(2), set(0)]] var<uniform_constant> myTexture: texture_sampled_2d<f32>;\n\n[[location(0)]] var<in> fragUV: vec2<f32>;\n[[location(1)]] var<in> fragPosition: vec4<f32>;\n[[location(0)]] var<out> outColor : vec4<f32>;\n\n[[stage(fragment)]]\nfn main() -> void {\n  outColor =  textureSample(myTexture, mySampler, fragUV) * fragPosition;\n  return;\n}\n"}},2:function(t,n,r){"use strict";var e=function(t,n,r,e){return new(r||(r=Promise))((function(a,u){function o(t){try{c(e.next(t))}catch(t){u(t)}}function i(t){try{c(e.throw(t))}catch(t){u(t)}}function c(t){var n;t.done?a(t.value):(n=t.value,n instanceof r?n:new r((function(t){t(n)}))).then(o,i)}c((e=e.apply(t,n||[])).next())}))};let a=void 0;n.a=function(){return e(this,void 0,void 0,(function*(){if(void 0!==a)return a;const t=yield import("https://unpkg.com/@webgpu/glslang@0.0.15/dist/web-devel/glslang.js");return a=yield t.default(),a}))}}});
//# sourceMappingURL=texturedCube-d92c42.js.map