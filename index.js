import{a as q,S as P,i as g}from"./assets/vendor-BLPZKqeQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const m=async(o,t)=>{const i={params:{key:"49926039-70f4c194fbb0b63068557ead5",page:t,per_page:40,image_type:"photo",orientation:"horizontal",safesearch:!0,q:o}};try{return(await q.get("https://pixabay.com/api/",i)).data}catch(s){console.log(s.message)}},u=document.querySelector(".gallery"),h=document.querySelector(".loader-div"),y=document.querySelector(".loading-button"),$=new P(".gallery a",{captionsData:"alt",captionDelay:250}),f=function(o){const t=o.map(({largeImageURL:i,webformatURL:s,tags:e,likes:r,views:a,comments:L,downloads:S})=>`<li class="image-li">
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
        </li>`).join("");u.insertAdjacentHTML("beforeend",t),$.refresh()},j=()=>{u.innerHTML=""},b=()=>{h.style.display="flex"},v=()=>{y.style.display="block"},p=()=>{y.style.display="none"},n=()=>{h.style.display="none"},c=document.querySelector(".form"),H=document.querySelector(".input"),O=document.querySelector(".loading-button");let d,l=1,w=0;c.addEventListener("submit",async o=>{if(d=H.value.trim(),o.preventDefault(),j(),b(),p(),l=1,d==="")return n(),g.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});const t=await m(d,l);if(w=Math.ceil(t.totalHits/40),t.hits.length===0)return n(),c.reset(),g.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});if(f(t.hits),u.children.length===t.totalHits){n(),c.reset();return}v(),n(),c.reset()});O.addEventListener("click",async()=>{if(b(),l+=1,l>w){g.info({message:"We're sorry, but you've reached the end of search results",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"}),n(),p();return}try{const i=await m(d,l);f(i.hits),n(),v()}catch{n(),p();return}const{height:o}=u.firstElementChild.getBoundingClientRect();let t={top:o*2,left:0,behavior:"smooth"};window.scrollBy(t)});
//# sourceMappingURL=index.js.map
