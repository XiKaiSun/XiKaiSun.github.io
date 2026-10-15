document.querySelector(".menu")?.addEventListener("click", function (e) {
    const nav = document.querySelector("header nav");
    nav.style.display = nav.style.display === "none" ? "block" : "none"
});