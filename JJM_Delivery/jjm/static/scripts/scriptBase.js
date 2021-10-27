window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (window.scrollY >= 50 ) {
        document.getElementById("navbar").style.background = "#FFE48F";
        document.getElementById("nav__link").style.color = "#111111";
        document.getElementById("nav__link1").style.color = "#111111";
        document.getElementById("nav__link2").style.color = "#111111";
        document.getElementById("nav__link3").style.border = "1px solid #111111";
        document.getElementById("nav__link3").style.color = "#111111";
    }else{
        document.getElementById("navbar").style.background = "transparent";
        document.getElementById("nav__link").style.color = "#C4C6C7";
        document.getElementById("nav__link1").style.color = "#C4C6C7";
        document.getElementById("nav__link2").style.color = "#C4C6C7";
        document.getElementById("nav__link3").style.border = "1px solid #fff";
        document.getElementById("nav__link3").style.color = "#fff";
    }
}
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
    });
});
