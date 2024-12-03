// album carousel for music page
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

    makeAlbumsClickable() {
        const basePath = window.location.origin + window.location.pathname.split("/").slice(0, -1).join("/");
    
        this.carouselArray.forEach((album, index) => {
            album.addEventListener("click", () => {
                const albumId = index + 1;
                window.location.href = `${basePath}/album${albumId}.html`;
            });
        });
    }
}

const albumContainer = document.querySelector(".album-container");
const albumItems = document.querySelectorAll(".album-item");
const albumControls = ["previous", "next"];

const albumCarousel = new Carousel(albumContainer, albumItems, albumControls);
albumCarousel.setControls();
albumCarousel.useControls();
albumCarousel.makeAlbumsClickable();
