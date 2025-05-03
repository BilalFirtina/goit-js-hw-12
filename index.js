import{a as $,S,i as a}from"./assets/vendor-BLPZKqeQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const j="https://pixabay.com/api/",R="49926039-70f4c194fbb0b63068557ead5";let l=1;const m=async o=>{const r=`${j}?key=${R}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=${l}&per_page=40`;return l++,await $.get(r)},O=()=>l=1,p=document.querySelector(".gallery"),f=document.querySelector(".loader-div"),y=document.querySelector(".loading-button"),P=new S(".gallery a",{captionsData:"alt",captionDelay:250}),h=function(o,r){const d=o.map(({largeImageURL:n,webformatURL:e,tags:t,likes:s,views:L,comments:w,downloads:q})=>`<div class="img-div"><a href="${n}"><img class="image" src="${e}" alt="${t.split(",").slice(0,3).join(",")}"></a>
    <section class="inner-section">
      <div class="info-div">
        <strong>Likes</strong>${s}
      </div>
      <div class="info-div">
        <strong>Views</strong>${L}
      </div>
      <div class="info-div">
        <strong>Comments</strong>${w}
      </div>
      <div class="info-div">
        <strong>Downloads</strong>${q}
      </div>
    </section></div>`).join("");p.insertAdjacentHTML(r,d),P.refresh()},U=()=>{p.innerHTML=""},v=()=>{f.style.display="flex"},b=()=>{y.style.display="block"},g=()=>{y.style.display="none"},i=()=>{f.style.display="none"},u=document.querySelector(".form"),x=document.querySelector(".input"),D=document.querySelector(".loading-button");let c;u.addEventListener("submit",async o=>{if(c=x.value,o.preventDefault(),U(),v(),O(),g(),c.trim()==="")return i(),a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});try{const r=(await m(c.trim())).data.hits;if(h(r,"afterbegin"),r.length<=0)return i(),u.reset(),a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});b(),i()}catch(r){a.error({message:`a:${r.message}`,position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"})}u.reset()});D.addEventListener("click",async()=>{g(),v();const o=await m(c.trim());if(Math.ceil(o.data.totalHits/40)<l)return i(),g(),a.info({message:"We're sorry, but you've reached the end of search results",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});h(o.data.hits,"beforeend"),i(),b()});
//# sourceMappingURL=index.js.map
