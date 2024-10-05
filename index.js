/* empty css                      */import{a as w,S as L,i as n}from"./assets/vendor-Qob_5Ba8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const R="46313430-1fc63ba230ea17501380deea6";async function f(t,s=1,r=15){try{return(await w.get(`https://pixabay.com/api/?key=${R}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${s}&per_page=${r}`)).data}catch(a){console.log(a)}}function p(t){return document.querySelector(".image-gallery"),t.hits.map(s=>{const{webformatURL:r,largeImageURL:a,tags:e,views:o,downloads:i,likes:b,comments:v}=s;return`
          <li class="gallery-item">
            <a class="gallery-link" href="${a}">
              <img 
                class="gallery-image" 
                src="${r}"
                alt="${e}"
              />
            </a>
            <div class="overlay">
            <div class="info">
                <div class="overlay-item">Likes<br>${b}</div>
                <div class="overlay-item">Views<br>${o}</div>
                <div class="overlay-item">Comments<br>${v}</div>
                <div class="overlay-item">Downloads<br>${i}</div>
                </div>
            </div>
          </li>`}).join("")}const h=new L(".gallery-link",{captionsData:"alt",captionDelay:250}),l=document.querySelector(".loader"),C=document.querySelector(".form"),c=document.querySelector(".load-more"),m=document.querySelector(".image-gallery");C.addEventListener("submit",S);c.addEventListener("click",k);let d;const $=15;let u,g,y="";async function S(t){t.preventDefault(),d=1,m.innerHTML="",y=t.target.elements.picture.value.trim(),l.style.display="inline-block";try{const r=await f(y);u=r.totalHits,g=u/$,l.style.display="none",r.hits.length>0?(m.insertAdjacentHTML("beforeend",p(r)),g<=d?(c.style.display="none",n.show({message:" Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#2596BE",messageColor:"#fff"})):(c.style.display="block",h.refresh())):(c.style.display="none",n.show({message:" Sorry, there are no images matching your search query.",position:"topRight",backgroundColor:"#F44336",messageColor:"#fff"}))}catch(r){l.style.display="none",n.show({message:` ERROR: ${r.message}`,position:"topRight",backgroundColor:"#F44336",messageColor:"#fff"})}}async function k(){try{d++;const t=m.lastElementChild.getBoundingClientRect();l.style.display="inline-block";const s=await f(y,d);l.style.display="none",m.insertAdjacentHTML("beforeend",p(s)),h.refresh(),window.scrollBy({top:t.bottom,behavior:"smooth"}),g<=d&&(c.style.display="none",n.show({message:"Sorry, there are no more images to load!",position:"topRight",backgroundColor:"#2596BE",messageColor:"#fff"}))}catch(t){n.show({message:`ERROR: ${t.message}`,position:"topRight",backgroundColor:"#2596BE",messageColor:"#fff"})}}
//# sourceMappingURL=index.js.map
