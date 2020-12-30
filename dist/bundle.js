(()=>{"use strict";var e,t,n,o,r,c,a,l,i,u,d,s,m,v,f,p,g,h,y,E,L;h=document.querySelector("#timer-hours"),y=document.querySelector("#timer-minutes"),E=document.querySelector("#timer-seconds"),L=document.querySelector("#timer-days"),function e(){var t,n,o,r,c=(t=(new Date("31 december 2020").getTime()-(new Date).getTime())/1e3,n=Math.floor(t%60),o=Math.floor(t/60%60),r=Math.floor(t/60/60)%24,{timeRemining:t,days:Math.floor(t/60/60/24),hours:r,minutes:o,seconds:n});h.textContent=c.hours<10?"0"+c.hours:c.hours,y.textContent=c.minutes<10?"0"+c.minutes:c.minutes,E.innerHTML=c.seconds<10?"0"+c.seconds:c.seconds,L.textContent=c.days<10?"0"+c.days:c.days,c.timeRemining<=0&&(h.textContent="00",h.style.color="red",y.textContent="00",y.style.color="red",E.innerHTML="00",E.style.color="red",L.textContent="00",L.style.color="red",clearInterval(c.timeRemining)),setInterval((function(){e()}),1e3)}(),function(){var e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelectorAll("ul>li"),o=function(){t.classList.toggle("active-menu")};e.addEventListener("click",o),t.addEventListener("click",(function(e){var t=e.target;return t.classList.contains("close-btn")?o():(t=t.closest(".menu"))?void 0:o()}));var r=document.querySelector(".service"),c=document.querySelector(".portfolio");n[0].addEventListener("click",(function(){event.preventDefault(),document.documentElement.scrollTop=900,r.scrollIntoView({behavior:"smooth",block:"start"})})),n[1].addEventListener("click",(function(){event.preventDefault(),document.documentElement.scrollTop=1980,c.scrollIntoView({behavior:"smooth",block:"start"})})),n[2].addEventListener("click",(function(){event.preventDefault(),document.documentElement.scrollTop=2375})),n[3].addEventListener("click",(function(){event.preventDefault(),document.documentElement.scrollTop=3545})),n[4].addEventListener("click",(function(){event.preventDefault(),document.documentElement.scrollTop=4745}))}(),p=document.querySelectorAll(".popup-btn"),g=document.querySelector(".popup"),p.forEach((function(e){return e.addEventListener("click",(function(){g.style.display="block";var e=document.querySelector(".popup-content");e.style.top="0 px";var t=0,n=function(){t++,e.style.top=t+"px",t<300&&setTimeout(n,10),clearTimeout(n)};n(),clearTimeout(n),window.innerWidth<768&&(n="")}))})),g.addEventListener("click",(function(e){var t=e.target;t.classList.contains("popup-close")?g.style.display="none":(t=t.closest(".popup-content"))||(g.style.display="none")})),(f=document.querySelector("body > main > a")).addEventListener("click",(function(e){e.preventDefault();var t=f.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})})),s=document.querySelector(".service-header"),m=s.querySelectorAll(".service-header-tab"),v=document.querySelectorAll(".service-tab"),s.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&m.forEach((function(e,n){e===t&&function(e){for(var t=0;t<v.length;t++)e===t?(m[t].classList.add("active"),v[t].classList.remove("d-none")):(m[t].classList.remove("active"),v[t].classList.add("d-none"))}(n)}))})),function(){var e,t=document.querySelector(".portfolio-content"),n=document.querySelectorAll(".portfolio-item"),o=0;!function(){var e=document.querySelector(".portfolio-dots"),t=document.createElement("li");e.appendChild(t),t.classList.add("dot");for(var o=0;o<n.length-1;o++)e.append(t.cloneNode());document.querySelector("#all-progects > ul > li:nth-child(1)").classList.add("dot-active")}();var r=document.querySelectorAll(".dot"),c=function(e,t,n){e[t].classList.remove(n)},a=function(e,t,n){e[t].classList.add(n)},l=function(){c(n,o,"portfolio-item-active"),c(r,o,"dot-active"),++o>=n.length&&(o=0),a(n,o,"portfolio-item-active"),a(r,o,"dot-active")},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;e=setInterval(l,t)},u=function(){clearInterval(e)};u(),t.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.matches(".portfolio-btn, .dot")&&(c(n,o,"portfolio-item-active"),c(r,o,"dot-active"),t.matches("#arrow-left")?o--:t.matches("#arrow-right")?o++:t.matches(".dot")&&r.forEach((function(e,n){e===t&&(o=n)})),o>=n.length&&(o=0),o<0&&(o=n.length-1),a(n,o,"portfolio-item-active"),a(r,o,"dot-active"))})),t.addEventListener("mouseover",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&u()})),t.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&i()})),i(1500)}(),u=document.querySelector("#command"),d=u.querySelectorAll(".command__photo"),u.addEventListener("mouseover",(function(e){if(e.target.matches(".command__photo"))for(var t=0;t<d.length;t++)if(e.target===d[t]){var n=e.target.src;e.target.src=e.target.dataset.img,e.target.dataset.img=n}})),u.addEventListener("mouseout",(function(e){if(e.target.matches(".command__photo"))for(var t=0;t<d.length;t++)if(e.target===d[t]){var n=e.target.src;e.target.src=e.target.dataset.img,e.target.dataset.img=n}})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),r=document.querySelector(".calc-count"),c=document.querySelector(".calc-day"),a=document.getElementById("total"),l=t.querySelectorAll("input"),i=function(){var t,l=1,i=1,u=n.options[n.selectedIndex].value,d=+o.value;r.value>1&&(l+=(r.value-1)/10),c.value&&c.value<5?i*=2:c.value&&c.value<10?i*=1.5:i=1,t=u&&d?e*u*d*l*i:0,a.textContent=t;var s=0;setInterval((function(){s<t&&(s++,a.textContent=s)}),2),console.log(t)};t.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&i()})),t.addEventListener("input",(function(e){for(var t=e.target,n=0;n<l.length;n++)t.matches("input")&&(l[n].value=l[n].value.replace(/\D/i,""))}))}(100),l=document.getElementById("form1"),(i=document.createElement("div")).style.color="#19b5fe",i.style.margin="25px",l.addEventListener("submit",(function(e){e.preventDefault(),l.appendChild(i),new FormData(l),i.textContent="Загрузка...",fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:"formData"}).then((function(e){if(200!==e.status)throw new Error("status network not 200");i.textContent="Спасибо! Мы скоро с Вами свяжемся!"})).catch((function(e){i.textContent="Что-то пошло не так...",console.error(e)})),setTimeout((function(){l.querySelectorAll("input").forEach((function(e){e.value=""}))}),2e3)})),e=document.getElementById("form2-message"),t=document.getElementById("form1-name"),n=document.getElementById("form2-name"),o=document.getElementById("form3-name"),r=document.getElementById("form1-phone"),c=document.getElementById("form3-phone"),a=document.getElementById("form2-phone"),e.addEventListener("input",(function(){e.value=e.value.replace(/[a-zA-Z]/g,"")})),t.addEventListener("input",(function(){t.value=t.value.replace(/[a-zA-Z]/g,"")})),n.addEventListener("input",(function(){n.value=n.value.replace(/[a-zA-Z]/g,"")})),o.addEventListener("input",(function(){o.value=o.value.replace(/[a-zA-Z]/g,"")})),r.addEventListener("input",(function(){r.value=r.value.replace(/[^0-9+]/g,"")})),c.addEventListener("input",(function(){c.value=c.value.replace(/[^0-9+]/g,"")})),a.addEventListener("input",(function(){a.value=a.value.replace(/[^0-9+]/g,"")}))})();