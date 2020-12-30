(()=>{"use strict";(function(e){const t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds"),c=document.querySelector("#timer-days");!function e(){const r=function(){const e=(new Date("31 december 2020").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),o=Math.floor(e/60%60),n=Math.floor(e/60/60)%24;return{timeRemining:e,days:Math.floor(e/60/60/24),hours:n,minutes:o,seconds:t}}();t.textContent=r.hours<10?"0"+r.hours:r.hours,o.textContent=r.minutes<10?"0"+r.minutes:r.minutes,n.innerHTML=r.seconds<10?"0"+r.seconds:r.seconds,c.textContent=r.days<10?"0"+r.days:r.days,r.timeRemining<=0&&(t.textContent="00",t.style.color="red",o.textContent="00",o.style.color="red",n.innerHTML="00",n.style.color="red",c.textContent="00",c.style.color="red",clearInterval(r.timeRemining)),setInterval((()=>{e()}),1e3)}()})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=t.querySelectorAll("ul>li"),n=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",n),t.addEventListener("click",(e=>{let t=e.target;return t.classList.contains("close-btn")?n():(t=t.closest(".menu"),t?void 0:n())}));const c=document.querySelector(".service"),r=document.querySelector(".portfolio");o[0].addEventListener("click",(()=>{event.preventDefault(),document.documentElement.scrollTop=900,c.scrollIntoView({behavior:"smooth",block:"start"})})),o[1].addEventListener("click",(()=>{event.preventDefault(),document.documentElement.scrollTop=1980,r.scrollIntoView({behavior:"smooth",block:"start"})})),o[2].addEventListener("click",(()=>{event.preventDefault(),document.documentElement.scrollTop=2375})),o[3].addEventListener("click",(()=>{event.preventDefault(),document.documentElement.scrollTop=3545})),o[4].addEventListener("click",(()=>{event.preventDefault(),document.documentElement.scrollTop=4745}))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup");e.forEach((e=>e.addEventListener("click",(()=>{t.style.display="block";const e=document.querySelector(".popup-content");e.style.top="0 px";let o=0,n=function(){o++,e.style.top=o+"px",o<300&&setTimeout(n,10),clearTimeout(n)};n(),clearTimeout(n),window.innerWidth<768&&(n="")})))),t.addEventListener("click",(e=>{let o=e.target;o.classList.contains("popup-close")?t.style.display="none":(o=o.closest(".popup-content"),o||(t.style.display="none"))}))})(),(()=>{const e=document.querySelector("body > main > a");e.addEventListener("click",(t=>{t.preventDefault();const o=e.getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{let n=e.target;n=n.closest(".service-header-tab"),n&&t.forEach(((e,c)=>{e===n&&(e=>{for(let n=0;n<o.length;n++)e===n?(t[n].classList.add("active"),o[n].classList.remove("d-none")):(t[n].classList.remove("active"),o[n].classList.add("d-none"))})(c)}))}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item");let o,n=0;!function(){const e=document.querySelector(".portfolio-dots"),o=document.createElement("li");e.appendChild(o),o.classList.add("dot");for(let n=0;n<t.length-1;n++)e.append(o.cloneNode());document.querySelector("#all-progects > ul > li:nth-child(1)").classList.add("dot-active")}();const c=document.querySelectorAll(".dot"),r=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)},a=()=>{r(t,n,"portfolio-item-active"),r(c,n,"dot-active"),n++,n>=t.length&&(n=0),l(t,n,"portfolio-item-active"),l(c,n,"dot-active")},s=(e=3e3)=>{o=setInterval(a,e)},d=()=>{clearInterval(o)};d(),e.addEventListener("click",(e=>{e.preventDefault();const o=e.target;o.matches(".portfolio-btn, .dot")&&(r(t,n,"portfolio-item-active"),r(c,n,"dot-active"),o.matches("#arrow-left")?n--:o.matches("#arrow-right")?n++:o.matches(".dot")&&c.forEach(((e,t)=>{e===o&&(n=t)})),n>=t.length&&(n=0),n<0&&(n=t.length-1),l(t,n,"portfolio-item-active"),l(c,n,"dot-active"))})),e.addEventListener("mouseover",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&d()})),e.addEventListener("mouseout",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&s()})),s(1500)})(),(()=>{const e=document.querySelector("#command"),t=e.querySelectorAll(".command__photo");e.addEventListener("mouseover",(e=>{if(e.target.matches(".command__photo"))for(let o=0;o<t.length;o++)if(e.target===t[o]){const t=e.target.src;e.target.src=e.target.dataset.img,e.target.dataset.img=t}})),e.addEventListener("mouseout",(e=>{if(e.target.matches(".command__photo"))for(let o=0;o<t.length;o++)if(e.target===t[o]){const t=e.target.src;e.target.src=e.target.dataset.img,e.target.dataset.img=t}}))})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),c=document.querySelector(".calc-count"),r=document.querySelector(".calc-day"),l=document.getElementById("total"),a=t.querySelectorAll("input");t.addEventListener("change",(t=>{const a=t.target;(a.matches("select")||a.matches("input"))&&(()=>{let t=0,a=1,s=1;const d=o.options[o.selectedIndex].value,u=+n.value;c.value>1&&(a+=(c.value-1)/10),r.value&&r.value<5?s*=2:r.value&&r.value<10?s*=1.5:s=1,t=d&&u?e*d*u*a*s:0,l.textContent=t;let i=0;setInterval((()=>{i<t&&(i++,l.textContent=i)}),2),console.log(t)})()})),t.addEventListener("input",(e=>{const t=e.target;for(let e=0;e<a.length;e++)t.matches("input")&&(a[e].value=a[e].value.replace(/\D/i,""))}))})(100),(()=>{const e=document.getElementById("form1"),t=document.createElement("div");t.style.color="#19b5fe",t.style.margin="25px",e.addEventListener("submit",(o=>{o.preventDefault(),e.appendChild(t),new FormData(e),t.textContent="Загрузка...",fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:"formData"}).then((e=>{if(200!==e.status)throw new Error("status network not 200");t.textContent="Спасибо! Мы скоро с Вами свяжемся!"})).catch((e=>{t.textContent="Что-то пошло не так...",console.error(e)})),setTimeout((()=>{e.querySelectorAll("input").forEach((e=>{e.value=""}))}),2e3)}))})(),(()=>{const e=document.getElementById("form2-message"),t=document.getElementById("form1-name"),o=document.getElementById("form2-name"),n=document.getElementById("form3-name"),c=document.getElementById("form1-phone"),r=document.getElementById("form3-phone"),l=document.getElementById("form2-phone");e.addEventListener("input",(()=>{e.value=e.value.replace(/[a-zA-Z]/g,"")})),t.addEventListener("input",(()=>{t.value=t.value.replace(/[a-zA-Z]/g,"")})),o.addEventListener("input",(()=>{o.value=o.value.replace(/[a-zA-Z]/g,"")})),n.addEventListener("input",(()=>{n.value=n.value.replace(/[a-zA-Z]/g,"")})),c.addEventListener("input",(()=>{c.value=c.value.replace(/[^0-9+]/g,"")})),r.addEventListener("input",(()=>{r.value=r.value.replace(/[^0-9+]/g,"")})),l.addEventListener("input",(()=>{l.value=l.value.replace(/[^0-9+]/g,"")}))})()})();