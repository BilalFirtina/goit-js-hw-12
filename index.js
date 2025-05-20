import{a as L,S,i as a}from"./assets/vendor-BLPZKqeQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const q=async(t,r)=>{const i={params:{key:"49926039-70f4c194fbb0b63068557ead5",page:r,per_page:40,image_type:"photo",orientation:"horizontal",safesearch:!0,q:t}};try{return(await L.get("https://pixabay.com/api/",i)).data}catch(n){throw new Error(n.message)}},g=document.querySelector(".gallery"),m=document.querySelector(".loader-div"),h=document.querySelector(".loading-button"),$=new S(".gallery a",{captionsData:"alt",captionDelay:250}),j=function(t){const r=t.map(({largeImageURL:i,webformatURL:n,tags:e,likes:o,views:s,comments:v,downloads:w})=>`<li class="image-li">
           <a href="${i}"> <img class="li-img" src="${n}" alt="${e.split(",").slice(0,3).join(",")}"> </a>
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
        </li>`).join("");g.insertAdjacentHTML("beforeend",r),$.refresh()},P=()=>{m.style.display="flex"},x=()=>{h.style.display="block"},y=()=>{h.style.display="none"},E=()=>{m.style.display="none"},c=document.querySelector(".form"),d=document.querySelector(".input"),O=document.querySelector(".loading-button");let p,f=0,l="",u=1;c.addEventListener("submit",B);async function B(t){if(t.preventDefault(),l=d.value.trim().toLowerCase(),u=1,!l){a.info({message:"The input field is empty, try again.",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"}),c.reset();return}g.innerHTML="",b(),d.placeholder=`En son arama: ${l}`}async function b(){P();try{const t=await q(l,u);if(t.hits.length===0){a.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"}),c.reset();return}const r=t.hits;j(r),p=document.querySelector(".image-li"),f=p.getBoundingClientRect().height*2;let i=Math.ceil(t.totalHits/40);if(u<i)x();else{y(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});return}}catch{a.warning({message:"An error occurred. Please try again later.",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"})}finally{E(),c.reset()}}O.addEventListener("click",async()=>{u++,y(),await b(),D(0,f)});function D(t,r){window.scrollBy({top:r,left:t,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
