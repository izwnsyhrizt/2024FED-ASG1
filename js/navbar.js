document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
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
