import{a as L,S as q,i as s}from"./assets/vendor-BLPZKqeQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const p=async(e,r)=>{const a={params:{key:"49926039-70f4c194fbb0b63068557ead5",page:r,per_page:40,image_type:"photo",orientation:"horizontal",safesearch:!0,q:e}};try{return(await L.get("https://pixabay.com/api/",a)).data}catch(i){console.log(i.message)}},d=document.querySelector(".gallery"),y=document.querySelector(".loader-div"),f=document.querySelector(".loading-button"),j=new q(".gallery a",{captionsData:"alt",captionDelay:250}),P=function(e){const r=e.map(({largeImageURL:a,webformatURL:i,tags:t,likes:o,views:l,comments:w,downloads:S})=>`<li class="image-li">
           <a href="${a}"> <img class="li-img" src="${i}" alt="${t.split(",").slice(0,3).join(",")}"> </a>
          <div class="div-upper">
            <ul>
            <li>
              <div class="div-inner"><b>Likes</b>
            ${o}</div>
            </li>

            <li>
             <div class="div-inner"><b>Views</b>
            ${l}</div>
            </li>

            <li>
              <div class="div-inner"><b>Comments</b>
            ${w}</div>
            </li>

            <li>
             <div class="div-inner"><b>Downloads</b>
            ${S}</div>
            </li>

            </ul>
          </div>
        </li>`).join("");d.insertAdjacentHTML("beforeend",r),j.refresh()},b=()=>{y.style.display="flex"},R=()=>{f.style.display="block"},u=()=>{f.style.display="none"},n=()=>{y.style.display="none"},$=document.querySelector(".form"),h=document.querySelector(".input"),U=document.querySelector(".loading-button");let c="",g=1,m=0;$.addEventListener("submit",x);U.addEventListener("click",H);async function x(e){if(e.preventDefault(),c=h.value.trim(),b(),u(),d.innerHTML="",!c)return n(),s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});h.value="",h.placeholder=`En son arama: ${c}`,g=1,m=0;try{const r=await p(c,g);if(n(),!r||!r.hits||r.hits.length===0)return s.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});m=r.totalHits,v(r.hits)}catch(r){n(),s.error({message:r.message,position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"})}}async function H(){g+=1,b();try{const e=await p(c,g);if(n(),!e||!e.hits||e.hits.length===0)return u(),s.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});v(e.hits)}catch(e){n(),s.error({message:e.message,position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"})}}function v(e){if(!e.length)return n(),u(),s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});P(e),d.querySelectorAll(".image-li").length>=m?(u(),s.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"})):(R(),O()),n()}function O(){const{height:e}=d.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
