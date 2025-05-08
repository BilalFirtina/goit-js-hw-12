import{a as h,i as u,S as q}from"./assets/vendor-QQhsBNEi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();let l=1,y=0;const $=async o=>{const i=`https://pixabay.com/api/?${new URLSearchParams({key:"49926039-70f4c194fbb0b63068557ead5",page:l,per_page:40,image_type:"photo",orientation:"horizontal",safesearch:!0}).toString()}&q=${o}`,s=await h.get(i);return y=Math.ceil(s.data.totalHits/40),s},P=async o=>{if(l+=1,l>y){u.info({message:"We're sorry, but you've reached the end of search results",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});return}const i=`https://pixabay.com/api/?${new URLSearchParams({key:"49926039-70f4c194fbb0b63068557ead5",page:l,per_page:40,image_type:"photo",orientation:"horizontal",safesearch:!0}).toString()}&q=${o}`;return await h.get(i)},R=()=>l=1,m=document.querySelector(".gallery"),f=document.querySelector(".loader-div"),b=document.querySelector(".loading-button"),U=new q(".gallery a",{captionsData:"alt",captionDelay:250}),p=function(o){const t=o.map(({largeImageURL:i,webformatURL:s,tags:e,likes:r,views:a,comments:L,downloads:S})=>`<li class="image-li">
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
        </li>`).join("");m.insertAdjacentHTML("beforeend",t),U.refresh()},j=()=>{m.innerHTML=""},v=()=>{f.style.display="flex"},w=()=>{b.style.display="block"},g=()=>{b.style.display="none"},n=()=>{f.style.display="none"},c=document.querySelector(".form"),x=document.querySelector(".input"),H=document.querySelector(".loading-button");let d;c.addEventListener("submit",async o=>{if(d=x.value,o.preventDefault(),R(),j(),v(),g(),d.trim()==="")return n(),u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});const t=(await $(d.trim())).data;if(t.totalHits<40){p(t.hits),n(),c.reset();return}if(t.hits.length===0)return n(),c.reset(),u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});p(t.hits),w(),n(),c.reset()});H.addEventListener("click",async()=>{g(),v();try{const i=(await P(d.trim())).data;p(i.hits),n(),w()}catch{n(),g();return}const{height:o}=m.firstElementChild.getBoundingClientRect();let t={top:o*2,left:0,behavior:"smooth"};window.scrollBy(t)});
//# sourceMappingURL=index.js.map
