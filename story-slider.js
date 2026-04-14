document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".story-slider").forEach(slider => {

    const track = slider.querySelector(".story-slide-track");
    const prev = slider.querySelector(".prev");
    const next = slider.querySelector(".next");

    let index = 0;

    // AUTO-GENERATE storyboard images (c1 - c245)
    if (slider.dataset.count) {
      const prefix = slider.dataset.prefix;
      const ext = slider.dataset.ext;
      const count = parseInt(slider.dataset.count);

      for (let i = 1; i <= count; i++) {
        const div = document.createElement("div");
        div.className = "story-slide";

        const img = document.createElement("img");
        img.src = `${prefix}${i}.${ext}`;

        div.appendChild(img);
        track.appendChild(div);
      }
    }

    const slides = track.querySelectorAll(".story-slide");

    function update() {
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    next.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      update();
    });

    prev.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      update();
    });

    update();
  });

});