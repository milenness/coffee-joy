(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u=document.querySelector(".mobile-menu"),i=document.querySelector(".menu-btn-open"),l=document.querySelector(".menu-btn-close"),d=()=>u.classList.toggle("is-open"),a=()=>document.body.classList.toggle("is-scroll-disabled");i.addEventListener("click",d);l.addEventListener("click",d);i.addEventListener("click",a);l.addEventListener("click",a);document.addEventListener("DOMContentLoaded",()=>{if(window.innerWidth<1440)return;const o=document.createElement("button");o.classList.add("theme-toggle"),o.setAttribute("aria-label","Перемкнути тему"),o.innerHTML=`
    <div class="icon-wrapper">
      <svg class="icon sun" viewBox="0 0 24 24">
        <path d="M12 4V2m0 20v-2m8-8h2M2 12h2m14.14 5.14l1.42 1.42M4.44 4.44l1.42 1.42m12.28 0l1.42-1.42M4.44 19.56l1.42-1.42M12 6a6 6 0 100 12 6 6 0 000-12z" fill="currentColor"/>
      </svg>
      <svg class="icon moon" viewBox="0 0 24 24">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor"/>
      </svg>
    </div>
  `,document.body.appendChild(o);const n=document.documentElement;function r(e){n.setAttribute("data-theme",e)}const c=localStorage.getItem("theme");if(c)r(c);else{const e=window.matchMedia("(prefers-color-scheme: dark)").matches;r(e?"dark":"light")}o.addEventListener("click",()=>{const t=n.getAttribute("data-theme")==="dark"?"light":"dark";r(t),localStorage.setItem("theme",t)})});
//# sourceMappingURL=index.js.map
