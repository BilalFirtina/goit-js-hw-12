import{a as L,S as q,i as n}from"./assets/vendor-BLPZKqeQ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const p=async(o,e)=>{const a={params:{key:"49926039-70f4c194fbb0b63068557ead5",page:e,per_page:40,image_type:"photo",orientation:"horizontal",safesearch:!0,q:o}};try{return(await L.get("https://pixabay.com/api/",a)).data}catch(i){console.log(i.message)}},h=document.querySelector(".gallery"),y=document.querySelector(".loader-div"),f=document.querySelector(".loading-button"),j=new q(".gallery a",{captionsData:"alt",captionDelay:250}),P=function(o){const e=o.map(({largeImageURL:a,webformatURL:i,tags:t,likes:r,views:l,comments:w,downloads:S})=>`<li class="image-li">
           <a href="${a}"> <img class="li-img" src="${i}" alt="${t.split(",").slice(0,3).join(",")}"> </a>
          <div class="div-upper">
            <ul>
            <li>
              <div class="div-inner"><b>Likes</b>
            ${r}</div>
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
        </li>`).join("");h.insertAdjacentHTML("beforeend",e),j.refresh()},b=()=>{y.style.display="flex"},R=()=>{f.style.display="block"},d=()=>{f.style.display="none"},s=()=>{y.style.display="none"},$=document.querySelector(".form"),g=document.querySelector(".input"),x=document.querySelector(".loading-button");let c="",u=1,m=0;$.addEventListener("submit",H);x.addEventListener("click",O);async function H(o){if(o.preventDefault(),c=g.value.trim(),b(),d(),h.innerHTML="",!c)return s(),n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});g.value="",g.placeholder=`En son arama: ${c}`,u=1,m=0;try{const e=await p(c,u);if(s(),!e||!e.hits||e.hits.length===0)return n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});m=e.totalHits,v(e.hits)}catch(e){s(),n.error({message:e.message,position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"})}}async function O(){u+=1,b();try{const o=await p(c,u);s(),v(o.hits)}catch(o){s(),n.error({message:o.message,position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"})}}function v(o){if(o.length===0)return s(),d(),n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});P(o),h.querySelectorAll(".image-li").length>=m?(d(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"})):(R(),U()),s()}function U(){const o=document.querySelector(".image-li"),{height:e}=o.getBoundingClientRect();window.scrollBy({top:e*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
