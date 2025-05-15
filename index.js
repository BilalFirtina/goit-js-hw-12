import{a as L,S as q,i as n}from"./assets/vendor-BLPZKqeQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const p=async(e,t)=>{const s={params:{key:"49926039-70f4c194fbb0b63068557ead5",page:t,per_page:40,image_type:"photo",orientation:"horizontal",safesearch:!0,q:e}};try{return(await L.get("https://pixabay.com/api/",s)).data}catch(i){console.log(i.message)}},g=document.querySelector(".gallery"),y=document.querySelector(".loader-div"),f=document.querySelector(".loading-button"),j=new q(".gallery a",{captionsData:"alt",captionDelay:250}),P=function(e){const t=e.map(({largeImageURL:s,webformatURL:i,tags:r,likes:o,views:a,comments:w,downloads:S})=>`<li class="image-li">
           <a href="${s}"> <img class="li-img" src="${i}" alt="${r.split(",").slice(0,3).join(",")}"> </a>
          <div class="div-upper">
            <ul>
            <li>
              <div class="div-inner"><b>Likes</b>
            ${o}</div>
            </li>

            <li>
             <div class="div-inner"><b>Views</b>
            ${a}</div>
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
        </li>`).join("");g.insertAdjacentHTML("beforeend",t),j.refresh()},b=()=>{y.style.display="flex"},R=()=>{f.style.display="block"},h=()=>{f.style.display="none"},c=()=>{y.style.display="none"},$=document.querySelector(".form"),d=document.querySelector(".input"),x=document.querySelector(".loading-button");let l="",u=1,m=0;$.addEventListener("submit",H);x.addEventListener("click",O);async function H(e){if(e.preventDefault(),l=d.value.trim(),b(),!l)return c(),n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});d.value="",d.placeholder=`En son arama: ${l}`,u=1,m=0,g.innerHTML="";try{const t=await p(l,u);if(!t||!t.hits)return n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});m=t.totalHits,v(t.hits)}catch(t){n.error({message:t.message,position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"})}}async function O(){u+=1,b();try{const e=await p(l,u);if(!e||!e.hits)return n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});v(e.hits)}catch(e){n.error({message:e.message,position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"})}}function v(e){if(!e.length){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"}),c(),h();return}P(e),g.querySelectorAll(".image-li").length>=m?(h(),c()):(R(),c(),U())}function U(){const{height:e}=g.firstElementChild.getBoundingClientRect();let t={top:e*2,left:0,behavior:"smooth"};window.scrollBy(t)}
//# sourceMappingURL=index.js.map
