import o from"react";import t from"prop-types";function e(){return e=Object.assign?Object.assign.bind():function(o){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(o[r]=e[r])}return o},e.apply(this,arguments)}!function(o,t){void 0===t&&(t={});var e=t.insertAt;if(o&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===e&&r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n),n.styleSheet?n.styleSheet.cssText=o:n.appendChild(document.createTextNode(o))}}(".storybook-button{border:0;border-radius:3em;cursor:pointer;display:inline-block;font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:700;line-height:1}.storybook-button--primary{background-color:#1ea7fd;color:#fff}.storybook-button--secondary{background-color:transparent;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15);color:#333}.storybook-button--small{font-size:12px;padding:10px 16px}.storybook-button--medium{font-size:14px;padding:11px 20px}.storybook-button--large{font-size:16px;padding:12px 24px}");const r=({primary:t,backgroundColor:r,size:n,label:i,...s})=>{const a=t?"storybook-button--primary":"storybook-button--secondary";return o.createElement("button",e({type:"button",className:["storybook-button",`storybook-button--${n}`,a].join(" "),style:r&&{backgroundColor:r}},s),i)};r.propTypes={primary:t.bool,backgroundColor:t.string,size:t.oneOf(["small","medium","large"]),label:t.string.isRequired,onClick:t.func},r.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0};export{r as Button};