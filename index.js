import{a as L,S as q,i as l}from"./assets/vendor-BLPZKqeQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const $="https://pixabay.com/api/",S="49926039-70f4c194fbb0b63068557ead5";let n=1;const d=async o=>{const r=`${$}?key=${S}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=${n}&per_page=40`;return console.log(n),n++,(await L.get(r)).data.hits},w=()=>n=1,g=document.querySelector(".gallery"),m=document.querySelector(".loader-div"),p=document.querySelector(".loading-button"),O=new q(".gallery a",{captionsData:"alt",captionDelay:250}),y=function(o,r){const c=o.map(({largeImageURL:i,webformatURL:e,tags:t,likes:s,views:h,comments:v,downloads:b})=>`<div class="img-div"><a href="${i}"><img class="image" src="${e}" alt="${t.split(",").slice(0,3).join(",")}"></a>
    <section class="inner-section">
      <div class="info-div">
        <strong>Likes</strong>${s}
      </div>
      <div class="info-div">
        <strong>Views</strong>${h}
      </div>
      <div class="info-div">
        <strong>Comments</strong>${v}
      </div>
      <div class="info-div">
        <strong>Downloads</strong>${b}
      </div>
    </section></div>`).join("");g.insertAdjacentHTML(r,c),O.refresh()},P=()=>{g.innerHTML=""},R=()=>{m.style.display="flex"},f=()=>{p.style.display="block"},x=()=>{p.style.display="none"},U=()=>{m.style.display="none"},u=document.querySelector(".form"),D=document.querySelector(".input"),j=document.querySelector(".loading-button");let a;u.addEventListener("submit",async o=>{if(a=D.value,o.preventDefault(),P(),R(),w(),x(),a.trim()==="")return l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"./public/error.png"});try{const r=await d(a.trim());if(y(r,"afterbegin"),r.length<=0)return u.reset(),l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"./public/error.png"});f(),U()}catch(r){l.error({message:`${r.message}`,position:"topRight",timeout:3e3,iconUrl:"./public/error.png"})}u.reset()});j.addEventListener("click",async()=>{const o=await d(a.trim());y(o,"beforeend"),f()});
//# sourceMappingURL=index.js.map
