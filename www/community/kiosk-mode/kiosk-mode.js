"use strict";var r=document.querySelector("home-assistant").shadowRoot.querySelector("home-assistant-main").shadowRoot,e=r.querySelector(
"partial-panel-resolver"),i=r.querySelector("app-drawer-layout");function c(e){var o=window.location.href;return e.some(function(e){return o.includes(
e)})}function d(e){return e&&!e.querySelector("#kiosk_mode")}function l(e,o){var n=document.createElement("style");n.setAttribute("id","kiosk_mode"),
n.innerHTML=e,o.appendChild(n),window.dispatchEvent(new Event("resize"))}function s(e,o){window.localStorage.setItem(e,o)}function u(e){
return"true"==window.localStorage.getItem(e)}function o(){var e,o=window.location.href,n=u("kmHeader"),t=u("kmSidebar"),a=t||n;o.includes(
"disable_kiosk")||(e=r.querySelector("ha-panel-lovelace"),(c(["kiosk","hide_header","hide_sidebar"])||a)&&(e=e?e.shadowRoot.querySelector("hui-root"
).shadowRoot:null,(c(["kiosk","hide_header"])||n)&&e&&d(e)&&(l(
"\n          #view {\n            min-height: 100vh !important;\n          }\n          app-header {\n            display: none;\n          }\n        "
,e),o.includes("cache")&&s("kmHeader","true")),(c(["kiosk","hide_sidebar"])||t)&&d(i)&&(l(
"\n          :host {\n            --app-drawer-width: 0 !important;\n          }\n          #drawer {\n            display: none;\n          }\n        "
,i),o.includes("cache")&&s("kmSidebar","true"))))}function n(e){e.forEach(function(e){e.addedNodes.forEach(function(e){
"ha-panel-lovelace"==e.localName&&new MutationObserver(t).observe(e.shadowRoot,{childList:!0})})})}function t(e){e.forEach(function(e){
e.addedNodes.forEach(function(e){"hui-root"==e.localName&&new MutationObserver(a).observe(e.shadowRoot,{childList:!0})})})}function a(e){e.forEach(
function(e){e.addedNodes.forEach(function(e){"ha-app-layout"==e.localName&&o()})})}window.location.href.includes("clear_cache")&&["kmHeader",
"kmSidebar"].forEach(function(e){return s(e,"false")}),o(),new MutationObserver(n).observe(e,{childList:!0}),console.info(
"%c  KIOSK-MODE   \n%c Version 1.3.1 ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");