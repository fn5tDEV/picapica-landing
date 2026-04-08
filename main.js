// Scroll Animations
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Initial check
reveal();

// Navbar opacity on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.padding = "10px 0";
        navbar.style.background = "rgba(13, 13, 13, 0.95)";
    } else {
        navbar.style.padding = "20px 0";
        navbar.style.background = "rgba(255, 255, 255, 0.05)";
    }
});
