import{a as P,S as $,i as g}from"./assets/vendor-BLPZKqeQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const h=async(o,t)=>{const i={params:{key:"49926039-70f4c194fbb0b63068557ead5",page:t,per_page:40,image_type:"photo",orientation:"horizontal",safesearch:!0,q:o}};try{return(await P.get("https://pixabay.com/api/",i)).data}catch(s){console.log(s.message)}},p=document.querySelector(".gallery"),y=document.querySelector(".loader-div"),f=document.querySelector(".loading-button"),j=new $(".gallery a",{captionsData:"alt",captionDelay:250}),b=function(o){const t=o.map(({largeImageURL:i,webformatURL:s,tags:e,likes:r,views:a,comments:S,downloads:q})=>`<li class="image-li">
           <a href="${i}"> <img class="li-img" src="${s}" alt="${e.split(",").slice(0,3).join(",")}"> </a>
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
            ${S}</div>
            </li>

            <li>
             <div class="div-inner"><b>Downloads</b>
            ${q}</div>
            </li>

            </ul>
          </div>
        </li>`).join("");p.insertAdjacentHTML("beforeend",t),j.refresh()},v=()=>{y.style.display="flex"},w=()=>{f.style.display="block"},d=()=>{f.style.display="none"},n=()=>{y.style.display="none"},u=document.querySelector(".form"),m=document.querySelector(".input"),B=document.querySelector(".loading-button");let c,l=1,L=0;u.addEventListener("submit",async o=>{if(c=m.value.trim(),o.preventDefault(),m.value="",v(),d(),l=1,c==="")return n(),g.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});try{const t=await h(c,l);L=Math.ceil(t.totalHits/40),x(t.hits),b(t.hits),O(t.totalHits)}catch(t){console.error(t.message)}finally{n()}w(),n(),u.reset()});function O(o){if(p.children.length===o){n(),u.reset();return}}function x(o){if(o.length===0)return u.reset(),g.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"})}B.addEventListener("click",async()=>{if(v(),l+=1,l>L){g.info({message:"We're sorry, but you've reached the end of search results",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"}),n(),d();return}try{const i=await h(c,l);b(i.hits),w()}catch(i){console.error(i),d();return}finally{n()}const{height:o}=p.firstElementChild.getBoundingClientRect();let t={top:o*2,left:0,behavior:"smooth"};window.scrollBy(t)});
//# sourceMappingURL=index.js.map
