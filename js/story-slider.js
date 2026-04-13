console.log("Portfolio page loaded.");

document.querySelectorAll(".story-slider").forEach(slider => {

let slides = slider.querySelectorAll(".story-slide");
let index = 0;

const next = slider.querySelector(".next");
const prev = slider.querySelector(".prev");

function showSlide(i){
slides.forEach(slide => slide.classList.remove("active"));
slides[i].classList.add("active");
}

next.addEventListener("click", () => {
index++;
if(index >= slides.length) index = 0;
showSlide(index);
});

prev.addEventListener("click", () => {
index--;
if(index < 0) index = slides.length - 1;
showSlide(index);
});

});