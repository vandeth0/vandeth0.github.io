const para = document.createElement("div");

// const iframe = document.createElement("iframe");

// iframe.style.display = "none";

// document.body.appendChild(iframe);


// const iframe1 = document.createElement("iframe");

// iframe1.style.display = "none";

// document.body.appendChild(iframe1);


// const iframe2 = document.createElement("iframe");

// iframe2.style.display = "none";

// document.body.appendChild(iframe2);


// const iframe3 = document.createElement("iframe");

// iframe3.style.display = "none";

// document.body.appendChild(iframe3);


let numLink = 1;

let linkIframe = 'https://releasedfinish.com/y1zxcj73ay?key=df5e1ba38b9a3185bf5906b285e1822a';

let iframes = new Array();

for(var i = 0 ; i < numLink; i++){

iframes[i] = document.createElement("iframe");

iframes[i].style.display = "block";
    iframes[i].style.width = "100%";
    iframes[i].style.height = "50vh";

// document.body.appendChild(iframes[i]);

}





para.classList.add("ads-web-show")

var adAuto;

const adShowWeb = (s) => {

var adsData = [];




const xhttp = new XMLHttpRequest();

xhttp.onload = function() {

adsData = JSON.parse(xhttp.responseText);

const link = " ";

let adsShow = adsData.ads[s];

if( s < 5){

para.innerHTML = '<div id="ads-web" style="z-index:100;background:#fff;position:fixed;bottom:0;left:-100%;width:100%;height:50vh;transition:all .5s;opacity:0;"><div class="container" style="padding:0;"><div style="width:100%;border:outset;background:#fff;display:flex;justify-content:space-between;align-items:center;box-size:border-box;"><div style="color:#000;">Advertising</div><span id="ad-break"></span><button class="btn btn-dark p-2 px-4" onclick="closeAds()" style="padding:0 30px">X</button></div><iframe style="width:100%;height:40vh" frameborder="0" allowfullscreen allow="fullscreen picture-in-picture" src="'+adsShow+'"></iframe></div></div>'; 

document.body.appendChild(para);

setTimeout(()=>{

var num = 35;

adAuto = setInterval(() => {

num--;

document.getElementById('ad-break').innerHTML = num;

if(num == 0){

clearInterval(adAuto);

closeAds();

}

}, 1000)

var x = document.getElementById("ads-web")

x.style.left="0";

x.style.opacity="1";

// iframe.src = "";

// iframe1.src = "";

// iframe2.src = "";

// iframe3.src = "";

for(var a = 0; a < numLink; a++){

    iframes[a].src = link;

}

},35000)


}else if(s < 10){

para.innerHTML = '<div id="ads-web" style="z-index:100;background:#fff;position:fixed;top:-500vh;left:0;width:100%;height:35%;transition:all .5s;opacity:0;"><div class="container" style="padding:0;"><div style="width:100%;border:inset;background:none;display:flex;justify-content:space-between;align-items:center;box-size:border-box;"><div style="color:#000;">Advertising</div><span id="ad-break"></span><button class="btn btn-dark p-2 px-4" onclick="closeAds()" style="padding:0 30px">X</button></div><iframe style="width:100%;height:40vh" frameborder="0" allowfullscreen allow="fullscreen picture-in-picture" src="'+adsShow+'"></iframe></div></div>';

document.body.appendChild(para);

setTimeout(()=>{

var num = 3;

adAuto = setInterval(() => {

num--;

document.getElementById('ad-break').innerHTML = num;

if(num == 0){

clearInterval(adAuto);

closeAds();

}

}, 1000)

var x = document.getElementById("ads-web")

x.style.top="0";

x.style.opacity="1";

// iframe.src = "";

// iframe1.src = "";

// iframe2.src = "";

// iframe3.src = "";

for(var a = 0; a < numLink; a++){

    iframes[a].src = link;

}

},3000)

}else if(s < 20){

para.innerHTML = '<div id="ads-web" style="z-index:100;background:#fff;position:fixed;top:-500vh;left:0;width:100%;height:35%;transition:all .5s;opacity:0;"><div class="container" style="padding:0;"><div style="width:100%;border:inset;background:none;display:flex;justify-content:space-between;align-items:center;box-size:border-box;"><div style="color:#000;">Advertising</div><span id="ad-break"></span><button class="btn btn-dark p-2 px-4" onclick="closeAds()" style="padding:0 30px">X</button></div><iframe style="width:100%;height:40vh" frameborder="0" allowfullscreen allow="fullscreen picture-in-picture" src="'+adsShow+'"></iframe></div></div>';

document.body.appendChild(para);

setTimeout(()=>{

var num = 35;

adAuto = setInterval(() => {

num--;

document.getElementById('ad-break').innerHTML = num;

if(num == 0){

clearInterval(adAuto);

closeAds();

}

}, 1000)

var x = document.getElementById("ads-web")

x.style.top="25%";

x.style.opacity="1";

// iframe.src = "";

// iframe1.src = "";

// iframe2.src = "";

// iframe3.src = "";

for(var a = 0; a < numLink; a++){

    iframes[a].src = link;

}

},35000)

}else if(s < 30){

para.innerHTML = '<div id="ads-web" style="z-index:100;background:#fff;position:fixed;left:-500vh;top:-500vh;left:0;width:100%;height:35%;transition:all .5s;opacity:0;"><div class="container" style="padding:0;"><div style="width:100%;border:inset;background:none;display:flex;justify-content:space-between;align-items:center;box-size:border-box;"><div style="color:#000;">Advertising</div><span id="ad-break"></span><button class="btn btn-dark p-2 px-4" onclick="closeAds()" style="padding:0 30px">X</button></div><iframe style="width:100%;height:40vh" frameborder="0" allowfullscreen allow="fullscreen picture-in-picture" src="'+adsShow+'"></iframe></div></div>';

document.body.appendChild(para);

setTimeout(()=>{

var num = 35;

adAuto = setInterval(() => {

num--;

document.getElementById('ad-break').innerHTML = num;

if(num == 0){

clearInterval(adAuto);

closeAds();

}

}, 1000)

var x = document.getElementById("ads-web")

x.style.top="0";

x.style.left="0";

x.style.opacity="1";

// iframe.src = "";

// iframe1.src = "";

// iframe2.src = "";

// iframe3.src = "";

for(var a = 0; a < numLink; a++){

    iframes[a].src = link;

}

},35000)

}else if(s < 40){

para.innerHTML = '<div id="ads-web" style="z-index:100;background:#fff;position:fixed;top:0;right:-500vh;width:100%;height:35%;transition:all .5s;opacity:0;"><div class="container" style="padding:0;"><div style="width:100%;border:inset;background:none;display:flex;justify-content:space-between;align-items:center;box-size:border-box;"><button class="btn btn-dark p-2 px-4" onclick="closeAds()" style="padding:0 30px">X</button><span id="ad-break"></span><div style="color:#000;">Advertising</div></div><iframe style="width:100%;height:40vh" frameborder="0" allowfullscreen allow="fullscreen picture-in-picture" src="'+adsShow+'"></iframe></div></div>';

document.body.appendChild(para);

setTimeout(()=>{

var num = 35;

adAuto = setInterval(() => {

num--;

document.getElementById('ad-break').innerHTML = num;

if(num == 0){

clearInterval(adAuto);

closeAds();

}

}, 1000)

var x = document.getElementById("ads-web")

x.style.right="0";

x.style.opacity="1";

// iframe.src = "";

// iframe1.src = "";

// iframe2.src = "";

// iframe3.src = "";

for(var a = 0; a < numLink; a++){

    iframes[a].src = link;

}

},35000)

}else if(s < 50){

para.innerHTML = '<div id="ads-web" style="z-index:100;background:#fff;position:fixed;bottom:0;right:-500vh;width:100%;height:50vh;transition:all .5s;opacity:0;"><div class="container" style="padding:0;"><div style="width:100%;border:inset;background:none;display:flex;justify-content:space-between;align-items:center;box-size:border-box;"><button class="btn btn-dark p-2 px-4" onclick="closeAds()" style="padding:0 30px">X</button><span id="ad-break"></span><div style="color:#000;">Advertising</div></div><iframe style="width:100%;height:40vh" frameborder="0" allowfullscreen allow="fullscreen picture-in-picture" src="'+adsShow+'"></iframe></div></div>';

document.body.appendChild(para);

setTimeout(()=>{

var num = 35;

adAuto = setInterval(() => {

num--;

document.getElementById('ad-break').innerHTML = num;

if(num == 0){

clearInterval(adAuto);

closeAds();

}

}, 1000)

var x = document.getElementById("ads-web")

x.style.right="0";

x.style.opacity="1";

// iframe.src = "";

// iframe1.src = "";

// iframe2.src = "";

// iframe3.src = "";

for(var a = 0; a < numLink; a++){

    iframes[a].src = link;

}

},35000)

}else{

para.innerHTML = '<div id="ads-web" style="z-index:100;background:rgba(255,255,255);display:none;position:fixed;top:0;left:0;width:100%;height:100%;transition:all .5s;opacity:0;"><div class="container" style="padding:0;"><div style="width:100%;border:inset;background:none;display:flex;justify-content:space-between;align-items:center;box-size:border-box;"><div style="color:#000;">Advertising</div><span id="ad-break"></span><button class="btn btn-dark p-2 px-4" onclick="closeAds()" style="padding:0 30px">X</button></div><iframe style="width:100%;height:100vh" frameborder="0" allowfullscreen allow="fullscreen picture-in-picture" src="'+adsShow+'"></iframe></div></div>';

document.body.appendChild(para);

setTimeout(()=>{

var num = 35;

adAuto = setInterval(() => {

num--;

document.getElementById('ad-break').innerHTML = num;

if(num == 0){

clearInterval(adAuto);

closeAds();

}

}, 1000)

var x = document.getElementById("ads-web")

x.style.display = 'block'

x.style.opacity="1";

// iframe.src = "";

// iframe1.src = "";

// iframe2.src = "";

// iframe3.src = "";

for(var a = 0; a < numLink; a++){

    iframes[a].src = link;

}

},35000)

}

}


xhttp.open("GET", "./AdsWeb/data.json", true);


xhttp.send();



}

adShowWeb(1);

const closeAds = () => {

clearInterval(adAuto);

// iframe.src = "link here - 1";

// iframe1.src = "link here - 2";

// iframe2.src = "link here - 3";

// iframe3.src = "link here - 4";

for(var j = 0; j < numLink; j++){

iframes[j].src = linkIframe;

}

var d = new Date();

var s = d.getSeconds();

var x = document.getElementsByClassName("ads-web-show");

x[0].remove();

    adShowWeb(s);
    //window.open("https://releasedfinish.com/y1zxcj73ay?key=df5e1ba38b9a3185bf5906b285e1822a");

}



