const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".arrow-btn button");
const wrapper = document.querySelector(".wrapper");
const rightarr = document.getElementById("right");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

// let isDragging = false,
//   startX,
//   startScrollLeft;

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const scrollAmount =
      btn.id === "left" ? -firstCardWidth - 10 : firstCardWidth + 10;
    carousel.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });
});

// const dragStart = (e) => {
//   isDragging = true;
//   carousel.classList.add("dragging");
//   startX = e.pageX;
//   startScrollLeft = carousel.scrollLeft;
// };

// const dragging = (e) => {
//   if (!isDragging) return;
//   const scrollDelta = startX - e.pageX;
//   carousel.scrollLeft = startScrollLeft + scrollDelta;
// };

// const dragStop = () => {
//   isDragging = false;
//   carousel.classList.remove("dragging");
// };

carousel.addEventListener("scroll", () => {
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
  const isAtEnd = carousel.scrollLeft >= maxScrollLeft;
  const isAtStart = carousel.scrollLeft === 0;

  if (isAtEnd) {
    rightarr.style.backgroundColor = "#00E5CC";
  } else if (isAtStart) {
    rightarr.style.backgroundColor = "transparent";
  }
});

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
// carousel.addEventListener("mouseup", dragStop);
//

// const play = document.getElementById("play");
// play.addEventListener("click", () => {
//   if (this.src == "/images/Polygon 1.png") {
//     this.src = "/images/Polygon 1 (2).png";
//   } else if (this.src == "/images/Polygon 1 (2).png") {
//     this.src = "/images/Polygon 1.png";
//   } else {
//     alert("errro");
//   }
// });

document.getElementById("play").onclick = function () {
  if (play.src == "http://127.0.0.1:5501/images/Polygon%201.png") {
    play.src = "/images/Polygon 1 (2).png";
  } else if (this.src == "http://127.0.0.1:5501/images/Polygon%201%20(2).png") {
    play.src = "/images/Polygon 1.png";
  } else {
    alert("error");
  }
};

const menu = document.querySelector(".ham");
menu.addEventListener("click", () => {
  document.querySelector(".mobile-header").style.animation =
    "slideIn 0.5s forwards";
  document.querySelector(".mobile-header").style.display = "flex";
});

const close = document.querySelector(".fa-close");
close.addEventListener("click", () => {
  document.querySelector(".mobile-header").style.animation =
    "slideout 0.5s forwards";
  document.querySelector(".mobile-header").style.display = "none";

});
