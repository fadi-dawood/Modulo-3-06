//* Carousel:
let items = document.querySelectorAll(".carousel .carousel-item");

items.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling;
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0];
        };
        let cloneChild = next.cloneNode(true);
        console.log(cloneChild);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
    };
});

// let carousels = document.querySelectorAll(".carousel.slide .carousel-item")
// for (let carousel of carousels) {
//     let addedClass = "." + carousel.classList[0];

//         let items = document.querySelectorAll(".carousel .carousel-item" + addedClass);
//         console.log(items);
//         items.forEach((el) => {
//             const minPerSlide = 4;
//             let next = el.nextElementSibling;
//             for (var i = 1; i < minPerSlide; i++) {
//                 if (!next) {
//                     // wrap carousel by using first child
//                     console.log(next);
//                     next = items[0];
//                 };
//                 let cloneChild = next.cloneNode(true);
//                 console.log(cloneChild);
//                 el.appendChild(cloneChild.children[0]);
//                 next = next.nextElementSibling;
//             };
//         });
// }



//* Zoom on hover:
let carouselSlide = Array.from(document.getElementsByClassName("carousel-inner"))
carouselSlide.forEach(element => {
    element.addEventListener("mouseenter", () => {
        element.classList.add("overflow");
    });
});
carouselSlide.forEach(element => {
    element.addEventListener("mouseleave", () => {
        element.classList.remove("overflow");
    });
});



//* bookmark on hover:
let bookMark = Array.from(document.getElementsByClassName("fa-bookmark"))
bookMark.forEach(element => {
    element.addEventListener("mouseenter", () => {
        element.classList.add("fas");
    });
});
bookMark.forEach(element => {
    element.addEventListener("mouseleave", () => {
        element.classList.remove("fas");
    });
});