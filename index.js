import{a as $,S,i as a}from"./assets/vendor-BLPZKqeQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const R="https://pixabay.com/api/",j="49926039-70f4c194fbb0b63068557ead5";let l=1;const m=async o=>{const r=`${R}?key=${j}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=${l}&per_page=40`;return await $.get(r)},O=()=>l=1,P=()=>{l++},p=document.querySelector(".gallery"),y=document.querySelector(".loader-div"),f=document.querySelector(".loading-button"),U=new S(".gallery a",{captionsData:"alt",captionDelay:250}),h=function(o,r){const u=o.map(({largeImageURL:n,webformatURL:e,tags:t,likes:i,views:L,comments:q,downloads:w})=>`<li class="image-li">
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
            ${q}</div>
            </li>

            <li>
             <div class="div-inner"><b>Downloads</b>
            ${w}</div>
            </li>

            </ul>
          </div>
        </li>`).join("");p.insertAdjacentHTML(r,u),U.refresh()},x=()=>{p.innerHTML=""},b=()=>{y.style.display="flex"},v=()=>{f.style.display="block"},g=()=>{f.style.display="none"},s=()=>{y.style.display="none"},d=document.querySelector(".form"),D=document.querySelector(".input"),H=document.querySelector(".loading-button");let c;d.addEventListener("submit",async o=>{if(c=D.value,o.preventDefault(),x(),b(),O(),g(),c.trim()==="")return s(),a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});try{const r=(await m(c.trim())).data.hits;if(h(r,"afterbegin"),r.length<=0)return s(),d.reset(),a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});v(),s()}catch(r){a.error({message:`a:${r.message}`,position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"})}d.reset()});H.addEventListener("click",async()=>{g(),b(),P();const o=await m(c.trim());if(Math.ceil(o.data.totalHits/40)<l)return s(),g(),a.info({message:"We're sorry, but you've reached the end of search results",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});h(o.data.hits,"beforeend"),s(),v()});
//# sourceMappingURL=index.js.map
