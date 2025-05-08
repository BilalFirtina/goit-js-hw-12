import{a as q,S as $,i as d}from"./assets/vendor-BLPZKqeQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const h=async(i,t=1)=>{const n=`https://pixabay.com/api/?${new URLSearchParams({key:"49926039-70f4c194fbb0b63068557ead5",page:t,per_page:40,image_type:"photo",orientation:"horizontal",safesearch:!0}).toString()}&q=${i}`;return(await q.get(n)).data},p=document.querySelector(".gallery"),y=document.querySelector(".loader-div"),f=document.querySelector(".loading-button"),P=new $(".gallery a",{captionsData:"alt",captionDelay:250}),m=function(i){const t=i.map(({largeImageURL:o,webformatURL:n,tags:e,likes:r,views:a,comments:L,downloads:S})=>`<li class="image-li">
           <a href="${o}"> <img class="li-img" src="${n}" alt="${e.split(",").slice(0,3).join(",")}"> </a>
          <div class="div-upper">
            <ul>
            <li>
              <div class="div-inner"><b>Likes</b>
            ${r}</div>
            </li>

            <li>
             <div class="div-inner"><b>Views</b>
            ${a}</div>
            </li>

            <li>
              <div class="div-inner"><b>Comments</b>
            ${L}</div>
            </li>

            <li>
             <div class="div-inner"><b>Downloads</b>
            ${S}</div>
            </li>

            </ul>
          </div>
        </li>`).join("");p.insertAdjacentHTML("beforeend",t),P.refresh()},H=()=>{p.innerHTML=""},b=()=>{y.style.display="flex"},v=()=>{f.style.display="block"},g=()=>{f.style.display="none"},s=()=>{y.style.display="none"},c=document.querySelector(".form"),j=document.querySelector(".input"),O=document.querySelector(".loading-button");let u,l=1,w=0;c.addEventListener("submit",async i=>{if(u=j.value,i.preventDefault(),H(),b(),g(),l=1,u.trim()==="")return s(),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});const t=await h(u.trim(),l);if(w=Math.ceil(t.totalHits/40),t.totalHits>0&&t.totalHits<40){m(t.hits),s(),c.reset();return}if(t.hits.length===0)return s(),c.reset(),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});m(t.hits),v(),s(),c.reset()});O.addEventListener("click",async()=>{if(b(),l+=1,l>w){d.info({message:"We're sorry, but you've reached the end of search results",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"}),s(),g();return}try{const o=await h(u.trim(),l);m(o.hits),s(),v()}catch{s(),g();return}const{height:i}=p.firstElementChild.getBoundingClientRect();let t={top:i*2,left:0,behavior:"smooth"};window.scrollBy(t)});
//# sourceMappingURL=index.js.map
