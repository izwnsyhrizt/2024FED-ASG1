document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname;

    const links = document.querySelectorAll('.navlist a');

    if (currentPage.includes("index.html") || currentPage === "/") {
        links.forEach(link => {
            link.style.color = "white";
        });
    } else {
        links.forEach(link => {
            link.style.color = "black";
        });
    }
});