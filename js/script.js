let burgerIcon = document.querySelector(".js-burger");
let closeIcon = document.querySelector(".js-close-icon");
let menu = document.querySelector(".menu");

if (burgerIcon) {
    burgerIcon.addEventListener("click", () => {
        closeIcon.classList.remove("hidden");
        menu.classList.add("visible");
        burgerIcon.classList.add("hidden");
    });
}

if (closeIcon) {
    closeIcon.addEventListener("click", () => {
        closeIcon.classList.add("hidden");
        menu.classList.remove("visible");
        burgerIcon.classList.remove("hidden");
    });
}

let menuListItem = document.querySelectorAll(".js-menu_list-items");

if (menuListItem.length > 0) {
    menuListItem.forEach((item) => {
        item.addEventListener("click", () => {
            closeIcon.classList.add("hidden");
            menu.classList.remove("visible");
            burgerIcon.classList.remove("hidden");
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    let lastId;
    const menuHeight = 84; // The height of your fixed menu
    document.addEventListener("scroll", function () {
        let sectionElements = document.querySelectorAll(".js-menu-items");
        let currentSection;

        for (let i = 0; i < sectionElements.length; i++) {
            let sectionElement = sectionElements[i];
            // Check if the bottom of the section is still in the viewport
            if (sectionElement.getBoundingClientRect().bottom > menuHeight) {
                currentSection = sectionElement.id;
                // We break as soon as we find the first section whose bottom is still in the viewport
                break;
            }
        }

        if (lastId !== currentSection) {
            let activeLink = document.querySelector("nav a.active");
            if (activeLink) {
                activeLink.classList.remove("active");
            }
            let newActiveLink = document.querySelector('nav a[href="#' + currentSection + '"]');
            if (newActiveLink) {
                newActiveLink.classList.add("active");
            }
            lastId = currentSection;
        }
    });
});
