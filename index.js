import{a as $,S,i as l}from"./assets/vendor-BLPZKqeQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const R="https://pixabay.com/api/",j="49926039-70f4c194fbb0b63068557ead5";let u=1;const m=async r=>{const t=`${R}?key=${j}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=${u}&per_page=40`;return await $.get(t)},O=()=>u=1,P=()=>{u++},g=document.querySelector(".gallery"),y=document.querySelector(".loader-div"),f=document.querySelector(".loading-button"),U=new S(".gallery a",{captionsData:"alt",captionDelay:250}),h=function(r,t){const i=r.map(({largeImageURL:a,webformatURL:e,tags:o,likes:s,views:w,comments:L,downloads:q})=>`<li class="image-li">
           <a href="${a}"> <img class="li-img" src="${e}" alt="${o.split(",").slice(0,3).join(",")}"> </a>
          <div class="div-upper">
            <ul>
            <li>
              <div class="div-inner"><b>Likes</b>
            ${s}</div>
            </li>

            <li>
             <div class="div-inner"><b>Views</b>
            ${w}</div>
            </li>

            <li>
              <div class="div-inner"><b>Comments</b>
            ${L}</div>
            </li>

            <li>
             <div class="div-inner"><b>Downloads</b>
            ${q}</div>
            </li>

            </ul>
          </div>
        </li>`).join("");g.insertAdjacentHTML(t,i),U.refresh()},x=()=>{g.innerHTML=""},b=()=>{y.style.display="flex"},v=()=>{f.style.display="block"},p=()=>{f.style.display="none"},n=()=>{y.style.display="none"},d=document.querySelector(".form"),B=document.querySelector(".input"),D=document.querySelector(".loading-button");let c;d.addEventListener("submit",async r=>{if(c=B.value,r.preventDefault(),x(),b(),O(),p(),c.trim()==="")return n(),l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});try{const t=(await m(c.trim())).data.hits;if(h(t,"afterbegin"),t.length<=0)return n(),d.reset(),l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});v(),n()}catch(t){l.error({message:`a:${t.message}`,position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"})}d.reset()});D.addEventListener("click",async()=>{p(),b(),P();const r=await m(c.trim());if(r.data.totalHits<u*40)return n(),p(),l.info({message:"We're sorry, but you've reached the end of search results",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});h(r.data.hits,"beforeend"),n(),v();let i={top:g.getBoundingClientRect().bottom,left:0,behavior:"smooth"};window.scrollBy(i)});
//# sourceMappingURL=index.js.map
