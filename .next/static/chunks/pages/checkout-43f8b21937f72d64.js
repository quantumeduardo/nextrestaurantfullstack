(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{6664:function(e,t,r){!function(e,t){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(){}function o(){}t=t&&t.hasOwnProperty("default")?t.default:t,o.resetWarningCache=n;var a,s,i=(a=s={exports:{}},s.exports,a.exports=function(){function e(e,t,r,n,o,a){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==a){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:n};return r.PropTypes=r,r}(),s.exports),c=function(e){return null!==e&&"object"===r(e)},l="[object Object]",p=function e(t,r){if(!c(t)||!c(r))return t===r;var n=Array.isArray(t);if(n!==Array.isArray(r))return!1;var o=Object.prototype.toString.call(t)===l;if(o!==(Object.prototype.toString.call(r)===l)||!o&&!n)return!1;var a=Object.keys(t),s=Object.keys(r);if(a.length!==s.length)return!1;for(var i={},p=0;p<a.length;p+=1)i[a[p]]=!0;for(var u=0;u<s.length;u+=1)i[s[u]]=!0;var d=Object.keys(i);return d.length===a.length&&d.every(function(n){return e(t[n],r[n])})},u=function(e){var r=t.useRef(e);return t.useEffect(function(){r.current=e},[e]),r.current},d=function(e){if(null===e||c(e)&&"function"==typeof e.elements&&"function"==typeof e.createToken&&"function"==typeof e.createPaymentMethod&&"function"==typeof e.confirmCardPayment)return e;throw Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")},f=function(e){if(c(e)&&"function"==typeof e.then)return{tag:"async",stripePromise:Promise.resolve(e).then(d)};var t=d(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},x=t.createContext(null);x.displayName="ElementsContext";var m=function(e,t){if(!e)throw Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},b=function(e){var r,n=e.stripe,o=e.options,a=e.children,s=t.useRef(!1),i=t.useRef(!0),c=t.useMemo(function(){return f(n)},[n]),l=function(e){if(Array.isArray(e))return e}(r=t.useState(function(){return{stripe:null,elements:null}}))||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var s,i=e[Symbol.iterator]();!(n=(s=i.next()).done)&&(r.push(s.value),2!==r.length);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}}(r,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance")}(),d=l[0],m=l[1],b=u(n),h=u(o);return null===b||(b!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."),p(o,h)||console.warn("Unsupported prop change on Elements: You cannot change the `options` prop after setting the `stripe` prop.")),s.current||("sync"===c.tag&&(s.current=!0,m({stripe:c.stripe,elements:c.stripe.elements(o)})),"async"===c.tag&&(s.current=!0,c.stripePromise.then(function(e){e&&i.current&&m({stripe:e,elements:e.elements(o)})}))),t.useEffect(function(){return function(){i.current=!1}},[]),t.useEffect(function(){var e=d.stripe;e&&e._registerWrapper&&e._registerWrapper({name:"react-stripe-js",version:"1.1.2"})},[d.stripe]),t.createElement(x.Provider,{value:d},a)};b.propTypes={stripe:i.any,options:i.object};var h=function(e){return m(t.useContext(x),e)},g=function(e){return(0,e.children)(h("mounts <ElementsConsumer>"))};g.propTypes={children:i.func.isRequired};var y=function(e){var r=t.useRef(e);return t.useEffect(function(){r.current=e},[e]),function(){r.current&&r.current.apply(r,arguments)}},w=function(e){return c(e)?(e.paymentRequest,function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["paymentRequest"])):{}},v=function(){},j=function(e,r){var n="".concat(e.charAt(0).toUpperCase()+e.slice(1),"Element"),o=r?function(e){h("mounts <".concat(n,">"));var r=e.id,o=e.className;return t.createElement("div",{id:r,className:o})}:function(r){var o=r.id,a=r.className,s=r.options,i=void 0===s?{}:s,c=r.onBlur,l=void 0===c?v:c,u=r.onFocus,d=void 0===u?v:u,f=r.onReady,x=void 0===f?v:f,m=r.onChange,b=void 0===m?v:m,g=r.onEscape,j=void 0===g?v:g,k=r.onClick,E=void 0===k?v:k,S=h("mounts <".concat(n,">")).elements,N=t.useRef(null),z=t.useRef(null),C=y(x),O=y(l),_=y(d),R=y(E),P=y(b),T=y(j);t.useLayoutEffect(function(){if(null==N.current&&S&&null!=z.current){var t=S.create(e,i);N.current=t,t.mount(z.current),t.on("ready",function(){return C(t)}),t.on("change",P),t.on("blur",O),t.on("focus",_),t.on("escape",T),t.on("click",R)}});var Z=t.useRef(i);return t.useEffect(function(){Z.current&&Z.current.paymentRequest!==i.paymentRequest&&console.warn("Unsupported prop change: options.paymentRequest is not a customizable property.");var e=w(i);0!==Object.keys(e).length&&!p(e,w(Z.current))&&N.current&&(N.current.update(e),Z.current=i)},[i]),t.useEffect(function(){return function(){N.current&&N.current.destroy()}},[]),t.createElement("div",{id:o,className:a,ref:z})};return o.propTypes={id:i.string,className:i.string,onChange:i.func,onBlur:i.func,onFocus:i.func,onReady:i.func,onClick:i.func,options:i.object},o.displayName=n,o.__elementType=e,o},k="undefined"==typeof window,E=j("auBankAccount",k),S=j("card",k),N=j("cardNumber",k),z=j("cardExpiry",k),C=j("cardCvc",k),O=j("fpxBank",k),_=j("iban",k),R=j("idealBank",k),P=j("paymentRequestButton",k);e.AuBankAccountElement=E,e.CardCvcElement=C,e.CardElement=S,e.CardExpiryElement=z,e.CardNumberElement=N,e.Elements=b,e.ElementsConsumer=g,e.FpxBankElement=O,e.IbanElement=_,e.IdealBankElement=R,e.PaymentRequestButtonElement=P,e.useElements=function(){return h("calls useElements()").elements},e.useStripe=function(){return h("calls useStripe()").stripe},Object.defineProperty(e,"__esModule",{value:!0})}(t,r(7294))},4301:function(e,t,r){r(6477),e.exports=self.fetch.bind(self)},6477:function(e,t){"use strict";t.Headers=self.Headers,t.Request=self.Request,t.Response=self.Response,t.fetch=self.fetch},5248:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkout",function(){return r(3092)}])},3092:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return R}});var n=r(5893),o=r(7294),a=r(267),s=r(1252),i="https://js.stripe.com/v3",c=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,l=function(){for(var e=document.querySelectorAll('script[src^="'.concat(i,'"]')),t=0;t<e.length;t++){var r=e[t];if(c.test(r.src))return r}return null},p=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(i).concat(t);var n=document.head||document.body;if(!n)throw Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return n.appendChild(r),r},u=function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.10.0",startTime:t})},d=null,f=function(e,t,r){if(null===e)return null;var n=e.apply(void 0,t);return u(n,r),n},x=Promise.resolve().then(function(){return null!==d?d:d=new Promise(function(e,t){if("undefined"==typeof window){e(null);return}if(window.Stripe,window.Stripe){e(window.Stripe);return}try{var r=l();r||(r=p(null)),r.addEventListener("load",function(){window.Stripe?e(window.Stripe):t(Error("Stripe.js not available"))}),r.addEventListener("error",function(){t(Error("Failed to load Stripe.js"))})}catch(e){t(e);return}})}),m=!1;x.catch(function(e){m||console.warn(e)});var b=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];m=!0;var n=Date.now();return x.then(function(e){return f(e,t,n)})},h=r(6664),g=r(1822),y=r.n(g),w=r(2669),v=r(7954),j=r(609),k=r(4301),E=r.n(k),S=function(e){return(0,n.jsxs)("div",{className:"jsx-2213986cca10df41",children:[(0,n.jsxs)("div",{className:"jsx-2213986cca10df41",children:[(0,n.jsx)("label",{htmlFor:"card-element",className:"jsx-2213986cca10df41",children:"Credit or debit card"}),(0,n.jsx)("div",{className:"jsx-2213986cca10df41",children:(0,n.jsx)("fieldset",{style:{border:"none"},className:"jsx-2213986cca10df41",children:(0,n.jsxs)("div",{className:"jsx-2213986cca10df41 form-row",children:[(0,n.jsx)("div",{id:"card-element",style:{width:"100%"},className:"jsx-2213986cca10df41",children:(0,n.jsx)(h.CardElement,{options:{style:{width:"100%",base:{fontSize:"18px"}}}})}),(0,n.jsx)("br",{className:"jsx-2213986cca10df41"}),(0,n.jsx)("div",{className:"jsx-2213986cca10df41 order-button-wrapper",children:(0,n.jsx)("button",{onClick:e.submitOrder,className:"jsx-2213986cca10df41",children:"Confirm order"})}),e.stripeError?(0,n.jsx)("div",{className:"jsx-2213986cca10df41",children:e.stripeError.toString()}):null,(0,n.jsx)("div",{id:"card-errors",role:"alert",className:"jsx-2213986cca10df41"})]})})})]}),(0,n.jsx)(y(),{id:"2213986cca10df41",children:".order-button-wrapper.jsx-2213986cca10df41{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}"})]})},N=r(2440),z=r(6808),C=r.n(z),O=function(){let[e,t]=(0,o.useState)({address:"",city:"",state:"",stripe_id:""}),[r,a]=(0,o.useState)(""),s=(0,h.useStripe)(),i=(0,h.useElements)(),c=(0,o.useContext)(N.Z);function l(r){let n=e[r.target.name]=r.target.value;t({...e,updateItem:n})}async function p(){let t=i.getElement(h.CardElement),r=await s.createToken(t),n=C().get("token"),o=await E()("".concat("http://localhost:1337","/orders"),{method:"POST",headers:n&&{Authorization:"Bearer ".concat(n)},body:JSON.stringify({amount:Number(Math.round(c.cart.total+"e2")+"e-2"),dishes:c.cart.items,address:e.address,city:e.city,state:e.state,token:r.token.id})});o.ok||(a(o.statusText),console.log("SUCCESS"))}return(0,n.jsxs)("div",{className:"jsx-81a0afea84137dc1 paper",children:[(0,n.jsx)("h5",{className:"jsx-81a0afea84137dc1",children:"Your information:"}),(0,n.jsx)("hr",{className:"jsx-81a0afea84137dc1"}),(0,n.jsx)(w.Z,{style:{display:"flex"},children:(0,n.jsxs)("div",{style:{flex:"0.90",marginRight:10},className:"jsx-81a0afea84137dc1",children:[(0,n.jsx)(v.Z,{children:"Address"}),(0,n.jsx)(j.Z,{name:"address",onChange:l})]})}),(0,n.jsxs)(w.Z,{style:{display:"flex"},children:[(0,n.jsxs)("div",{style:{flex:"0.65",marginRight:"6%"},className:"jsx-81a0afea84137dc1",children:[(0,n.jsx)(v.Z,{children:"City"}),(0,n.jsx)(j.Z,{name:"city",onChange:l})]}),(0,n.jsxs)("div",{style:{flex:"0.25",marginRight:0},className:"jsx-81a0afea84137dc1",children:[(0,n.jsx)(v.Z,{children:"State"}),(0,n.jsx)(j.Z,{name:"state",onChange:l})]})]}),(0,n.jsx)(S,{data:e,stripeError:r,submitOrder:p}),(0,n.jsx)(y(),{id:"81a0afea84137dc1",children:'.paper{border:1px solid lightgray;-webkit-box-shadow:0px 1px 3px 0px rgba(0,0,0,.2),0px 1px 1px 0px rgba(0,0,0,.14),0px 2px 1px -1px rgba(0,0,0,.12);-moz-box-shadow:0px 1px 3px 0px rgba(0,0,0,.2),0px 1px 1px 0px rgba(0,0,0,.14),0px 2px 1px -1px rgba(0,0,0,.12);box-shadow:0px 1px 3px 0px rgba(0,0,0,.2),0px 1px 1px 0px rgba(0,0,0,.14),0px 2px 1px -1px rgba(0,0,0,.12);height:550px;padding:30px;background:#fff;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;margin-top:90px}.form-half{-webkit-box-flex:.5;-webkit-flex:.5;-moz-box-flex:.5;-ms-flex:.5;flex:.5}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}body,html{background-color:#f6f9fc;font-size:18px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}h1{color:#32325d;font-weight:400;line-height:50px;font-size:40px;margin:20px 0;padding:0}.Checkout{margin:0 auto;max-width:800px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0 5px}label{color:#6b7c93;font-weight:300;letter-spacing:.025em}button{white-space:nowrap;border:0;outline:0;display:inline-block;height:40px;line-height:40px;padding:0 14px;-webkit-box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);-moz-box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);color:#fff;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;font-size:15px;font-weight:600;text-transform:uppercase;letter-spacing:.025em;background-color:#6772e5;text-decoration:none;-webkit-transition:all 150ms ease;-moz-transition:all 150ms ease;-o-transition:all 150ms ease;transition:all 150ms ease;margin-top:10px}form{margin-bottom:40px;padding-bottom:40px;border-bottom:3px solid#e6ebf1}button:hover{color:#fff;cursor:pointer;background-color:#7795f8;-webkit-transform:translatey(-1px);-moz-transform:translatey(-1px);-ms-transform:translatey(-1px);-o-transform:translatey(-1px);transform:translatey(-1px);-webkit-box-shadow:0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08);-moz-box-shadow:0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08);box-shadow:0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08)}input,.StripeElement{display:block;background-color:#f8f9fa!important;margin:10px 0 20px 0;max-width:500px;padding:10px 14px;font-size:1em;font-family:"Source Code Pro",monospace;-webkit-box-shadow:rgba(50,50,93,.14902)0px 1px 3px,rgba(0,0,0,.0196078)0px 1px 0px;-moz-box-shadow:rgba(50,50,93,.14902)0px 1px 3px,rgba(0,0,0,.0196078)0px 1px 0px;box-shadow:rgba(50,50,93,.14902)0px 1px 3px,rgba(0,0,0,.0196078)0px 1px 0px;border:0;outline:0;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background:white}input::-webkit-input-placeholder{color:#aab7c4}input:-moz-placeholder{color:#aab7c4}input::-moz-placeholder{color:#aab7c4}input:-ms-input-placeholder{color:#aab7c4}input::-ms-input-placeholder{color:#aab7c4}input::placeholder{color:#aab7c4}input:focus,.StripeElement--focus{-webkit-box-shadow:rgba(50,50,93,.109804)0px 4px 6px,rgba(0,0,0,.0784314)0px 1px 3px;-moz-box-shadow:rgba(50,50,93,.109804)0px 4px 6px,rgba(0,0,0,.0784314)0px 1px 3px;box-shadow:rgba(50,50,93,.109804)0px 4px 6px,rgba(0,0,0,.0784314)0px 1px 3px;-webkit-transition:all 150ms ease;-moz-transition:all 150ms ease;-o-transition:all 150ms ease;transition:all 150ms ease}.StripeElement.IdealBankElement,.StripeElement.PaymentRequestButton{padding:0}'})]})},_=r(1187),R=function(){let{isAuthenticated:e}=(0,o.useContext)(N.Z),t=b("pk_test_51HaLhVGgpfLkdZwmHVQcCOdUzwLWqV7umg9EbicemJqLOcLBPDrPtszruyxf4UzqH0lKwaNj5se3tHldNx92nPjI00Zoi8VgBN");return(0,n.jsxs)(a.Z,{children:[(0,n.jsxs)(s.Z,{style:{paddingRight:0},sm:{size:3,order:1,offset:2},children:[(0,n.jsx)("h1",{style:{margin:20},children:"Checkout"}),(0,n.jsx)(_.Z,{isAuthenticated:e})]}),(0,n.jsx)(s.Z,{style:{paddingLeft:5},sm:{size:6,order:2},children:(0,n.jsx)(h.Elements,{stripe:t,children:(0,n.jsx)(O,{})})})]})}},2669:function(e,t,r){"use strict";var n=r(7462),o=r(3366),a=r(7294),s=r(5697),i=r.n(s),c=r(4184),l=r.n(c),p=r(3663),u={children:i().node,row:i().bool,check:i().bool,inline:i().bool,disabled:i().bool,tag:p.iC,className:i().string,cssModule:i().object},d=function(e){var t=e.className,r=e.cssModule,s=e.row,i=e.disabled,c=e.check,u=e.inline,d=e.tag,f=(0,o.Z)(e,["className","cssModule","row","disabled","check","inline","tag"]),x=(0,p.mx)(l()(t,!!s&&"row",c?"form-check":"form-group",!!c&&!!u&&"form-check-inline",!!c&&!!i&&"disabled"),r);return"fieldset"===d&&(f.disabled=i),a.createElement(d,(0,n.Z)({},f,{className:x}))};d.propTypes=u,d.defaultProps={tag:"div"},t.Z=d},7954:function(e,t,r){"use strict";var n=r(7462),o=r(3366),a=r(7294),s=r(5697),i=r.n(s),c=r(4184),l=r.n(c),p=r(3663),u=i().oneOfType([i().number,i().string]),d=i().oneOfType([i().bool,i().string,i().number,i().shape({size:u,order:u,offset:u})]),f={children:i().node,hidden:i().bool,check:i().bool,size:i().string,for:i().string,tag:p.iC,className:i().string,cssModule:i().object,xs:d,sm:d,md:d,lg:d,xl:d,widths:i().array},x=function(e,t,r){return!0===r||""===r?e?"col":"col-"+t:"auto"===r?e?"col-auto":"col-"+t+"-auto":e?"col-"+r:"col-"+t+"-"+r},m=function(e){var t=e.className,r=e.cssModule,s=e.hidden,i=e.widths,c=e.tag,u=e.check,d=e.size,f=e.for,m=(0,o.Z)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];i.forEach(function(t,n){var o=e[t];if(delete m[t],o||""===o){var a=!n;if((0,p.Kn)(o)){var s,i,c=a?"-":"-"+t+"-";s=x(a,t,o.size),b.push((0,p.mx)(l()(((i={})[s]=o.size||""===o.size,i["order"+c+o.order]=o.order||0===o.order,i["offset"+c+o.offset]=o.offset||0===o.offset,i))),r)}else s=x(a,t,o),b.push(s)}});var h=(0,p.mx)(l()(t,!!s&&"sr-only",!!u&&"form-check-label",!!d&&"col-form-label-"+d,b,!!b.length&&"col-form-label"),r);return a.createElement(c,(0,n.Z)({htmlFor:f},m,{className:h}))};m.propTypes=f,m.defaultProps={tag:"label",widths:["xs","sm","md","lg","xl"]},t.Z=m}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5248)}),_N_E=e.O()}]);