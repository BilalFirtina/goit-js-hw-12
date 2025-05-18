import{a as w,S as L,i as a}from"./assets/vendor-BLPZKqeQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const S=async(t,r)=>{const n={params:{key:"49926039-70f4c194fbb0b63068557ead5",page:r,per_page:40,image_type:"photo",orientation:"horizontal",safesearch:!0,q:t}};try{return(await w.get("https://pixabay.com/api/",n)).data}catch(i){throw new Error(i.message)}},g=document.querySelector(".gallery"),p=document.querySelector(".loader-div"),m=document.querySelector(".loading-button"),q=new L(".gallery a",{captionsData:"alt",captionDelay:250}),P=function(t){const r=t.map(({largeImageURL:n,webformatURL:i,tags:e,likes:o,views:s,comments:b,downloads:v})=>`<li class="image-li">
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
            ${b}</div>
            </li>

            <li>
             <div class="div-inner"><b>Downloads</b>
            ${v}</div>
            </li>

            </ul>
          </div>
        </li>`).join("");g.insertAdjacentHTML("beforeend",r),q.refresh()},j=()=>{p.style.display="flex"},x=()=>{m.style.display="block"},y=()=>{m.style.display="none"},$=()=>{p.style.display="none"},l=document.querySelector(".form"),O=document.querySelector(".input"),B=document.querySelector(".loading-button");let d,f=0,u="",c=1;l.addEventListener("submit",D);async function D(t){if(t.preventDefault(),u=O.value.trim().toLowerCase(),c=1,!u){a.info({message:"The input field is empty, try again.",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"}),l.reset();return}g.innerHTML="",h()}async function h(){j();try{const t=await S(u,c);if(t.hits.length===0){a.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"}),l.reset();return}const r=t.hits;P(r),d=document.querySelector(".image-li"),f=d.getBoundingClientRect().height*2,x(),Math.ceil(t.totalHits/40)===c&&(y(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"}))}catch{a.warning({message:"An error occurred. Please try again later.",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"})}finally{$(),l.reset()}}B.addEventListener("click",async()=>{c++,y(),await h(),E(0,f)});function E(t,r){window.scrollBy({top:r,left:t,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
