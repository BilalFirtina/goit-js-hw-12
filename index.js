import{a as h,i as u,S as q}from"./assets/vendor-QQhsBNEi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();let y=0;const $=async(o,t)=>{const s=`https://pixabay.com/api/?${new URLSearchParams({key:"49926039-70f4c194fbb0b63068557ead5",page:t,per_page:40,image_type:"photo",orientation:"horizontal",safesearch:!0}).toString()}&q=${o}`,e=await h.get(s);return y=Math.ceil(e.data.totalHits/40),e},P=async(o,t)=>{if(t>y){u.info({message:"We're sorry, but you've reached the end of search results",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});return}const s=`https://pixabay.com/api/?${new URLSearchParams({key:"49926039-70f4c194fbb0b63068557ead5",page:t,per_page:40,image_type:"photo",orientation:"horizontal",safesearch:!0}).toString()}&q=${o}`;return await h.get(s)},g=document.querySelector(".gallery"),f=document.querySelector(".loader-div"),b=document.querySelector(".loading-button"),R=new q(".gallery a",{captionsData:"alt",captionDelay:250}),p=function(o){const t=o.map(({largeImageURL:i,webformatURL:s,tags:e,likes:r,views:a,comments:L,downloads:S})=>`<li class="image-li">
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
            ${L}</div>
            </li>

            <li>
             <div class="div-inner"><b>Downloads</b>
            ${S}</div>
            </li>

            </ul>
          </div>
        </li>`).join("");g.insertAdjacentHTML("beforeend",t),R.refresh()},U=()=>{g.innerHTML=""},v=()=>{f.style.display="flex"},w=()=>{b.style.display="block"},m=()=>{b.style.display="none"},n=()=>{f.style.display="none"},l=document.querySelector(".form"),j=document.querySelector(".input"),x=document.querySelector(".loading-button");let c,d=1;l.addEventListener("submit",async o=>{if(c=j.value,o.preventDefault(),U(),v(),m(),d=1,c.trim()==="")return n(),u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});const t=(await $(c.trim(),d)).data;if(t.totalHits<40){p(t.hits),n(),l.reset();return}if(t.hits.length===0)return n(),l.reset(),u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});p(t.hits),w(),n(),l.reset()});x.addEventListener("click",async()=>{m(),v(),d+=1;try{const i=(await P(c.trim(),d)).data;p(i.hits),n(),w()}catch{n(),m();return}const{height:o}=g.firstElementChild.getBoundingClientRect();let t={top:o*2,left:0,behavior:"smooth"};window.scrollBy(t)});
//# sourceMappingURL=index.js.map
