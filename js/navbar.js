document.addEventListener("DOMContentLoaded", function () {
    const path = window.location.pathname;
    const currentPage = path.endsWith("/") 
        ? "index.html" 
        : path.split("/").pop();
    console.log("Current page:", currentPage);

    const links = document.querySelectorAll('.navlist a');

    const pages = ["index.html", "about.html", "tour.html"];

    if (pages.includes(currentPage)) {
        links.forEach(link => {
            link.style.color = "white";
        });
    } else {
        links.forEach(link => {
            link.style.color = "black";
        });
    }
});
