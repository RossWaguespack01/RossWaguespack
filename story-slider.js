console.log("Portfolio page loaded.");

document.addEventListener("DOMContentLoaded", () => {

    const cContainer = document.getElementById("c-slider");
    if (!cContainer) return;

    const images = [];

    // now clean + simple
    for (let i = 1; i <= 145; i++) {
        images.push(`img/c${i}.png`);
    }

    images.forEach((src, i) => {
        const div = document.createElement("div");
        div.classList.add("story-slide");
        if (i === 0) div.classList.add("active");

        const img = document.createElement("img");
        img.src = src;
        img.alt = `Board ${i + 1}`;

        div.appendChild(img);
        cContainer.appendChild(div);
    });

    // init sliders AFTER images exist
    function initSlider(slider) {

        const slides = slider.querySelectorAll(".story-slide");
        const nextBtn = slider.querySelector(".next");
        const prevBtn = slider.querySelector(".prev");

        if (!nextBtn || !prevBtn || slides.length === 0) return;

        let index = 0;

        function showSlide(i) {
            slides.forEach(s => s.classList.remove("active"));
            slides[i].classList.add("active");
        }

        nextBtn.addEventListener("click", () => {
            index = (index + 1) % slides.length;
            showSlide(index);
        });

        prevBtn.addEventListener("click", () => {
            index = (index - 1 + slides.length) % slides.length;
            showSlide(index);
        });

        showSlide(index);
    }

    document.querySelectorAll(".story-slider").forEach(initSlider);
});