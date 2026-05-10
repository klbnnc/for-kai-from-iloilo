let page = 1;
const totalPages = 7;

function showPage(n){
document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
document.getElementById("page"+n).classList.add("active");
page = n;
}

function nextPage(){
if(page < totalPages) showPage(page + 1);
}

function backPage(){
if(page > 1) showPage(page - 1);
}

/* LOADER */
window.onload = () => {
setTimeout(()=>document.getElementById("loader").style.display="none",1500);
typeWriter();
spawnFloating();
};

/* UPDATED TYPEWRITER SEQUENCE */
const lines = [
"every time you ask me why i like you,",
"i don't know which one to tell you,",
"because there are just too many reasons, honestly."
];

let lineIndex = 0;
let charIndex = 0;

function typeWriter(){
if(lineIndex < lines.length){
if(charIndex < lines[lineIndex].length){
document.getElementById("typewriter").innerHTML += lines[lineIndex].charAt(charIndex);
charIndex++;
setTimeout(typeWriter,40);
}else{
document.getElementById("typewriter").innerHTML += "<br><br>";
lineIndex++;
charIndex = 0;
setTimeout(typeWriter,400);
}
}
}

/* DAYS */
let start = new Date("2026-04-01");

document.addEventListener("DOMContentLoaded",()=>{
let days = Math.floor((new Date() - start)/(1000*60*60*24));
document.getElementById("daysCounter").innerText = days + " days";
});

/* SECRET PAGE */
function showSecretPage(){
document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
document.getElementById("secretPage").classList.add("active");
}

/* PASSWORD */
function checkPassword(){
let input = document.getElementById("password").value;
let output = document.getElementById("secretText");

if(input === "bebi"){
document.body.classList.add("heartbeat");

setTimeout(()=>{
showSecretPage();
document.getElementById("diaryText").innerText =
"you found it. you are my favorite part of everything.";
},1000);

}else{
output.innerText = "wrong password.";
}
}

/* FLOATING OBJECTS */
function spawnFloating(){
const symbols = ["💖","✨","🌙","💗","⭐","💞"];

for(let i=0;i<70;i++){
let el = document.createElement("div");
el.className = "float";
el.innerText = symbols[Math.floor(Math.random()*symbols.length)];

el.style.left = Math.random()*100 + "vw";
el.style.fontSize = (10 + Math.random()*25) + "px";
el.style.animationDuration = (5 + Math.random()*10) + "s";
el.style.animationDelay = Math.random()*5 + "s";

document.querySelector(".floating-container").appendChild(el);
}
}