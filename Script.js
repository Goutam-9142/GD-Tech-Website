// =========================
// Mobile Menu Toggle
// =========================

const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const icon = document.querySelector(".menu i");

menu.addEventListener("click", () => {

    navLinks.classList.toggle("show-menu");

    if(navLinks.classList.contains("show-menu")){
        icon.classList.remove("ri-menu-3-line");
        icon.classList.add("ri-close-line");
    }else{
        icon.classList.remove("ri-close-line");
        icon.classList.add("ri-menu-3-line");
    }

});

// =========================
// Sticky Navbar
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "#0d1117";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";
    } else {
        header.style.background = "rgba(13,17,23,.8)";
        header.style.boxShadow = "none";
    }
});

// =========================
// Scroll To Top
// =========================

const scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        scrollTop.style.display = "flex";
    } else {
        scrollTop.style.display = "none";
    }

});

// =========================
// Active Navigation
// =========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// =========================
// Fade Animation
// =========================

const cards = document.querySelectorAll(
".project-card,.skill-card,.certificate-card,.info-box,.contact-card"
);

const observer = new IntersectionObserver(entries => {

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:.2});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(60px)";
card.style.transition=".8s";

observer.observe(card);

});

// =========================
// Typing Effect
// =========================

const text = [
"Frontend Developer",
"JavaScript Developer",
"Node.js Learner",
"AI & ML Student"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

document.querySelector(".hero h3").textContent = letter;

if(letter.length === currentText.length){

count++;
index = 0;

setTimeout(type,1200);

}else{

setTimeout(type,120);

}

})();

// =========================
// Skill Progress Animation
// =========================

const progress = document.querySelectorAll(".progress span");

window.addEventListener("load",()=>{

progress.forEach(bar=>{

const width = bar.style.width;

bar.style.width="0";

setTimeout(()=>{

bar.style.width = width;

},500);

});

});

// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});
