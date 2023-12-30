document.addEventListener("DOMContentLoaded", function() {
    const burgerIcon = document.getElementById("burger-icon");
    const menu = document.getElementById("menu");

    burgerIcon.addEventListener("click", function() {
        menu.classList.toggle("active");
    });
});

let swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

