import{a as L,S,i as a}from"./assets/vendor-BLPZKqeQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const q=async(t,r)=>{const n={params:{key:"49926039-70f4c194fbb0b63068557ead5",page:r,per_page:40,image_type:"photo",orientation:"horizontal",safesearch:!0,q:t}};try{return(await L.get("https://pixabay.com/api/",n)).data}catch(i){throw new Error(i.message)}},p=document.querySelector(".gallery"),m=document.querySelector(".loader-div"),h=document.querySelector(".loading-button"),P=new S(".gallery a",{captionsData:"alt",captionDelay:250}),$=function(t){const r=t.map(({largeImageURL:n,webformatURL:i,tags:e,likes:o,views:s,comments:v,downloads:w})=>`<li class="image-li">
           <a href="${n}"> <img class="li-img" src="${i}" alt="${e.split(",").slice(0,3).join(",")}"> </a>
          <div class="div-upper">
            <ul>
            <li>
              <div class="div-inner"><b>Likes</b>
            ${o}</div>
            </li>

            <li>
             <div class="div-inner"><b>Views</b>
            ${s}</div>
            </li>

            <li>
              <div class="div-inner"><b>Comments</b>
            ${v}</div>
            </li>

            <li>
             <div class="div-inner"><b>Downloads</b>
            ${w}</div>
            </li>

            </ul>
          </div>
        </li>`).join("");p.insertAdjacentHTML("beforeend",r),P.refresh()},j=()=>{m.style.display="flex"},x=()=>{h.style.display="block"},y=()=>{h.style.display="none"},E=()=>{m.style.display="none"},c=document.querySelector(".form"),u=document.querySelector(".input"),O=document.querySelector(".loading-button");let g,f=0,l="",d=1;c.addEventListener("submit",B);async function B(t){if(t.preventDefault(),l=u.value.trim().toLowerCase(),d=1,!l){a.info({message:"The input field is empty, try again.",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"}),c.reset();return}p.innerHTML="",b(),u.placeholder=`En son arama: ${l}`}async function b(){j();try{const t=await q(l,d);if(t.hits.length===0){a.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"}),c.reset();return}const r=t.hits;$(r),g=document.querySelector(".image-li"),f=g.getBoundingClientRect().height*2,x(),Math.ceil(t.totalHits/40)===d&&(y(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"}))}catch{a.warning({message:"An error occurred. Please try again later.",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"})}finally{E(),c.reset()}}O.addEventListener("click",async()=>{d++,y(),await b(),D(0,f)});function D(t,r){window.scrollBy({top:r,left:t,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
