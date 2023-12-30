"use strict";

document.addEventListener("DOMContentLoaded", function() {
    const burgerIcon = document.getElementById("burger-icon");
    const menu = document.getElementById("menu");

    burgerIcon.addEventListener("click", function() {
        menu.classList.toggle("active");
    });

    document.addEventListener("click", function(event) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnBurgerIcon = burgerIcon.contains(event.target);

        if (!isClickInsideMenu && !isClickOnBurgerIcon) {
            menu.classList.remove("active");
        }
    });
});