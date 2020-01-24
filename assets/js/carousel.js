document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.querySelector(".carousel-btn.btn-prev");
  const nextBtn = document.querySelector(".carousel-btn.btn-next");
  let slides = document.querySelectorAll(".carousel-slide");
  let current = 0;

  prevBtn.addEventListener("click", () => {
    slides[current].className = "carousel-slide";
    current = (((current - 1) % slides.length) + slides.length) % slides.length;
    slides[current].className = "carousel-slide active";
  });

  nextBtn.addEventListener("click", () => {
    slides[current].className = "carousel-slide";
    current = (current + 1) % slides.length;
    slides[current].className = "carousel-slide active";
  });
});
