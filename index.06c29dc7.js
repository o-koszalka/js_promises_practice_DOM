var t=new Promise(function(t,e){document.addEventListener("click",function(e){0===e.button&&t("First promise was resolved")}),setTimeout(function(){e("First promise was rejected")},3e3)}),e=new Promise(function(t,e){document.addEventListener("mousedown",function(e){(0===e.button||2===e.button)&&t("Second promise was resolved")})}),n=new Promise(function(t,e){var n=!1,o=!1;document.addEventListener("mousedown",function(e){0===e.button&&(n=!0),2===e.button&&(o=!0),n&&o&&t("Third promise was resolved")})}),o=function(t){var e=document.createElement("div");e.classList.add("success"),e.setAttribute("data-qa","notification"),document.body.appendChild(e),e.textContent=t},i=function(t){var e=document.createElement("div");e.classList.add("error"),e.setAttribute("data-qa","notification"),document.body.appendChild(e),e.textContent=t};t.then(o).catch(i),e.then(o).catch(i),n.then(o).catch(i);
//# sourceMappingURL=index.06c29dc7.js.map