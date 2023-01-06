// Hamburger Menu JS
let hamMenu = document.getElementById('menu');
function HamOpen() {
    hamMenu.style.left = "0";
}
function HamClose() {
    hamMenu.style.left = "-300px";
}

// AOS Animation Link
AOS.init();

// Scroll to top with JavaScript
window.addEventListener("scroll", function () {
    let top = document.querySelector(".arrowicon")
    if (window.pageYOffset > 100) {
        top.classList.add("active")
    }
    else {
        top.classList.remove("active")
    }
})
function scrolltop() {
    window.scrollTo(0, 0)
}