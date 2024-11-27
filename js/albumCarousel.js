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

class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateAlbum() {
        this.carouselArray.forEach((el) => {
            el.classList.remove("album-1");
            el.classList.remove("album-2");
            el.classList.remove("album-3");
            el.classList.remove("album-4");
            el.classList.remove("album-5");
        });

        this.carouselArray.slice(1, 5).forEach((el, i) => {
            el.classList.add(`album-${i + 2}`);
        });

        this.carouselArray[0].classList.add("album-1");
    }

    setCurrentState(direction) {
        if (direction.className === "album-controls-previous") {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateAlbum();
    }

    setControls() {
        this.carouselControls.forEach((control) => {
            const button = document.createElement("button");
            button.className = `album-controls-${control}`;
            button.innerText = control;
            document.querySelector(".album-controls").appendChild(button);
        });
    }

    useControls() {
        const triggers = [...document.querySelector(".album-controls").childNodes];
        triggers.forEach((control) => {
            control.addEventListener("click", (e) => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const albumContainer = document.querySelector(".album-container");
const albumItems = document.querySelectorAll(".album-item");
const albumControls = ["previous", "next"];

const exampleCarousel = new Carousel(albumContainer, albumItems, albumControls);
exampleCarousel.setControls();
exampleCarousel.useControls();
