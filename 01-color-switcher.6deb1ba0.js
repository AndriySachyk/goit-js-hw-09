const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=document.body;e.disabled=!0;let a=null;function n(){const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;d.style.backgroundColor=t}t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,a=setInterval(n,1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.6deb1ba0.js.map
