import{a as $,S,i as l}from"./assets/vendor-BLPZKqeQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const j="https://pixabay.com/api/",O="49926039-70f4c194fbb0b63068557ead5";let u=1;const g=async o=>{const r=`${j}?key=${O}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=${u}&per_page=40`;return u++,(await $.get(r)).data.hits},P=()=>u=1,m=document.querySelector(".gallery"),p=document.querySelector(".loader-div"),y=document.querySelector(".loading-button"),R=new S(".gallery a",{captionsData:"alt",captionDelay:250}),f=function(o,r){const c=o.map(({largeImageURL:i,webformatURL:e,tags:t,likes:s,views:L,comments:q,downloads:w})=>`<div class="img-div"><a href="${i}"><img class="image" src="${e}" alt="${t.split(",").slice(0,3).join(",")}"></a>
    <section class="inner-section">
      <div class="info-div">
        <strong>Likes</strong>${s}
      </div>
      <div class="info-div">
        <strong>Views</strong>${L}
      </div>
      <div class="info-div">
        <strong>Comments</strong>${q}
      </div>
      <div class="info-div">
        <strong>Downloads</strong>${w}
      </div>
    </section></div>`).join("");m.insertAdjacentHTML(r,c),R.refresh()},x=()=>{m.innerHTML=""},h=()=>{p.style.display="flex"},v=()=>{y.style.display="block"},b=()=>{y.style.display="none"},n=()=>{p.style.display="none"},d=document.querySelector(".form"),U=document.querySelector(".input"),D=document.querySelector(".loading-button");let a;d.addEventListener("submit",async o=>{if(a=U.value,o.preventDefault(),x(),h(),P(),b(),a.trim()==="")return n(),l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});try{const r=await g(a.trim());if(f(r,"afterbegin"),r.length<=0)return n(),d.reset(),l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});v(),n()}catch(r){l.error({message:`${r.message}`,position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"})}d.reset()});D.addEventListener("click",async()=>{b(),h();const o=await g(a.trim());f(o,"beforeend"),n(),v()});
//# sourceMappingURL=index.js.map
