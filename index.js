import{a as m,i as u,S as $}from"./assets/vendor-QQhsBNEi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();let a=1,h=0;const P=async o=>{a=1;const i=`https://pixabay.com/api/?${new URLSearchParams({key:"49926039-70f4c194fbb0b63068557ead5",page:a,per_page:40,image_type:"photo",orientation:"horizontal",safesearch:!0}).toString()}&q=${o}`,s=await m.get(i);return h=Math.ceil(s.data.totalHits/40),s.data.hits},R=async o=>{if(a+=1,a>h){u.info({message:"We're sorry, but you've reached the end of search results",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});return}const i=`https://pixabay.com/api/?${new URLSearchParams({key:"49926039-70f4c194fbb0b63068557ead5",page:a,per_page:40,image_type:"photo",orientation:"horizontal",safesearch:!0}).toString()}&q=${o}`;return(await m.get(i)).data.hits},g=document.querySelector(".gallery"),y=document.querySelector(".loader-div"),f=document.querySelector(".loading-button"),U=new $(".gallery a",{captionsData:"alt",captionDelay:250}),b=function(o,r){const i=o.map(({largeImageURL:s,webformatURL:e,tags:t,likes:n,views:L,comments:S,downloads:q})=>`<li class="image-li">
           <a href="${s}"> <img class="li-img" src="${e}" alt="${t.split(",").slice(0,3).join(",")}"> </a>
          <div class="div-upper">
            <ul>
            <li>
              <div class="div-inner"><b>Likes</b>
            ${n}</div>
            </li>

            <li>
             <div class="div-inner"><b>Views</b>
            ${L}</div>
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
        </li>`).join("");g.insertAdjacentHTML(r,i),U.refresh()},j=()=>{g.innerHTML=""},v=()=>{y.style.display="flex"},w=()=>{f.style.display="block"},p=()=>{f.style.display="none"},l=()=>{y.style.display="none"},d=document.querySelector(".form"),x=document.querySelector(".input"),O=document.querySelector(".loading-button");let c;d.addEventListener("submit",async o=>{if(c=x.value,o.preventDefault(),j(),v(),p(),c.trim()==="")return l(),u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});const r=await P(c.trim());if(r.length<=0)return l(),d.reset(),u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});b(r,"afterbegin"),w(),l(),d.reset()});O.addEventListener("click",async()=>{p(),v();try{const i=await R(c.trim());b(i,"beforeend"),l(),w()}catch{l(),p();return}const{height:o}=g.firstElementChild.getBoundingClientRect();console.log(o);let r={top:o*2,left:0,behavior:"smooth"};window.scrollBy(r)});
//# sourceMappingURL=index.js.map
