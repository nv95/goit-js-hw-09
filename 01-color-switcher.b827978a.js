!function(){function t(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}var n={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")},o=null,e=function(){n.body.style.backgroundColor=t(),n.body.style.color=t()};n.startBtn.addEventListener("click",(function(){o=setInterval(e,1e3),n.startBtn.disabled=!0})),n.stopBtn.addEventListener("click",(function(){clearInterval(o),n.startBtn.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.b827978a.js.map
