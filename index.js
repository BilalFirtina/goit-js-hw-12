import{a as L,S as q,i as f}from"./assets/vendor-BLPZKqeQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const g=async(e,t)=>{const n={params:{key:"49926039-70f4c194fbb0b63068557ead5",page:t,per_page:40,image_type:"photo",orientation:"horizontal",safesearch:!0,q:e}};try{return(await L.get("https://pixabay.com/api/",n)).data}catch(i){console.log(i.message)}},d=document.querySelector(".gallery"),p=document.querySelector(".loader-div"),y=document.querySelector(".loading-button"),P=new q(".gallery a",{captionsData:"alt",captionDelay:250}),$=function(e){const t=e.map(({largeImageURL:n,webformatURL:i,tags:r,likes:o,views:s,comments:w,downloads:S})=>`<li class="image-li">
           <a href="${n}"> <img class="li-img" src="${i}" alt="${r.split(",").slice(0,3).join(",")}"> </a>
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
            ${w}</div>
            </li>

            <li>
             <div class="div-inner"><b>Downloads</b>
            ${S}</div>
            </li>

            </ul>
          </div>
        </li>`).join("");d.insertAdjacentHTML("beforeend",t),P.refresh()},b=()=>{p.style.display="flex"},E=()=>{y.style.display="block"},m=()=>{y.style.display="none"},l=()=>{p.style.display="none"},x=document.querySelector(".form"),u=document.querySelector(".input"),H=document.querySelector(".loading-button");let a="",c=1,h=0;x.addEventListener("submit",O);H.addEventListener("click",j);async function O(e){if(e.preventDefault(),a=u.value.trim(),!a)return l(),f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"});u.value="",u.placeholder=`En son arama: ${a}`,c=1,h=0,d.innerHTML="",m(),b();try{const t=await g(a,c);if(!t||!t.hits)throw new Error("No images returned from API");h=t.totalHits,v(t.hits)}catch(t){throw console.error(t),t}}async function j(){c+=1,b();try{const e=await g(a,c);if(!e||!e.hits)throw new Error("No images returned from API");v(e.hits)}catch(e){throw console.error(e),e}}function v(e){if(!e.length){f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,iconUrl:"/goit-js-hw-12/error.png"}),l(),m();return}$(e),d.children.length>=h?(m(),l()):(E(),l(),B())}function B(){const{height:e}=d.firstElementChild.getBoundingClientRect();let t={top:e*2,left:0,behavior:"smooth"};window.scrollBy(t)}
//# sourceMappingURL=index.js.map
