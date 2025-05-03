import{a as m,S as p,i as l}from"./assets/vendor-BLPZKqeQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",h="49926039-70f4c194fbb0b63068557ead5";let n=1;const v=async o=>{const r=`${y}?key=${h}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=${n}&per_page=40`;return console.log(n),n++,(await m.get(r)).data.hits},L=()=>n=1,d=document.querySelector(".gallery"),b=new p(".gallery a",{captionsData:"alt",captionDelay:250}),$=function(o){const r=o.map(({largeImageURL:a,webformatURL:i,tags:e,likes:t,views:s,comments:g,downloads:f})=>`<div class="img-div"><a href="${a}"><img class="image" src="${i}" alt="${e.split(",").slice(0,3).join(",")}"></a>
    <section class="inner-section">
      <div class="info-div">
        <strong>Likes</strong>${t}
      </div>
      <div class="info-div">
        <strong>Views</strong>${s}
      </div>
      <div class="info-div">
        <strong>Comments</strong>${g}
      </div>
      <div class="info-div">
        <strong>Downloads</strong>${f}
      </div>
    </section></div>`).join("");d.insertAdjacentHTML("beforeend",r),b.refresh()},q=()=>{d.innerHTML=""},c=document.querySelector(".form"),u=document.querySelector(".input");c.addEventListener("submit",async o=>{if(o.preventDefault(),q(),L(),u.value.trim()==="")return l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/error.png"});const r=await v(u.value.trim());if(r.length<=0)return c.reset(),l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/error.png"});$(r),c.reset()});
//# sourceMappingURL=index.js.map
