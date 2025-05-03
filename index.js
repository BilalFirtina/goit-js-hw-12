import{a as $,S,i as a}from"./assets/vendor-BLPZKqeQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const j="https://pixabay.com/api/",R="49926039-70f4c194fbb0b63068557ead5";let c=1;const m=async o=>{const r=`${j}?key=${R}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=${c}&per_page=40`;return c++,await $.get(r)},O=()=>c=1,p=document.querySelector(".gallery"),y=document.querySelector(".loader-div"),f=document.querySelector(".loading-button"),P=new S(".gallery a",{captionsData:"alt",captionDelay:250}),h=function(o,r){const u=o.map(({largeImageURL:n,webformatURL:e,tags:t,likes:i,views:L,comments:w,downloads:q})=>`<li class="image-li">
           <a href="${n}"> <img class="li-img" src="${e}" alt="${t.split(",").slice(0,3).join(",")}"> </a>
          <div class="div-upper">
            <ul>
            <li>
              <div class="div-inner"><b>Likes</b>
            ${i}</div>
            </li>

            <li>
             <div class="div-inner"><b>Views</b>
            ${L}</div>
            </li>

            <li>
              <div class="div-inner"><b>Comments</b>
            ${w}</div>
            </li>

            <li>
             <div class="div-inner"><b>Downloads</b>
            ${q}</div>
            </li>

            </ul>
          </div>
        </li>`).join("");p.insertAdjacentHTML(r,u),P.refresh()},U=()=>{p.innerHTML=""},b=()=>{y.style.display="flex"},v=()=>{f.style.display="block"},g=()=>{f.style.display="none"},s=()=>{y.style.display="none"},d=document.querySelector(".form"),x=document.querySelector(".input"),D=document.querySelector(".loading-button");let l;d.addEventListener("submit",async o=>{if(l=x.value,o.preventDefault(),U(),b(),O(),g(),l.trim()==="")return s(),a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});try{const r=(await m(l.trim())).data.hits;if(h(r,"afterbegin"),r.length<=0)return s(),d.reset(),a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});v(),s()}catch(r){a.error({message:`a:${r.message}`,position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"})}d.reset()});D.addEventListener("click",async()=>{g(),b();const o=await m(l.trim());if(Math.ceil(o.data.totalHits/40)<c)return s(),g(),a.info({message:"We're sorry, but you've reached the end of search results",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});h(o.data.hits,"beforeend"),s(),v()});
//# sourceMappingURL=index.js.map
