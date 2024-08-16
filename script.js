const nxt = document.querySelector("#next");
const prv = document.querySelector("#Prev");
const slide = document.querySelectorAll(".slides");

let counter = 0;

slide.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

prv.addEventListener("click", () => {
    counter = (counter - 1 + slide.length) % slide.length;
    console.log(counter);
    slider();
});

nxt.addEventListener("click", () => {
    counter = (counter + 1) % slide.length;
    slider();
});

const slider = () => {
    slide.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};
