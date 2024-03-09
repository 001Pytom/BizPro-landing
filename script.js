const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".arrow-btn button");
const wrapper = document.querySelector(".wrapper");
const rightarr = document.getElementById("right");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

let isDragging = false,
  startX,
  startScrollLeft;

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const scrollAmount = btn.id === "left" ? -firstCardWidth : firstCardWidth;
    carousel.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  const scrollDelta = startX - e.pageX;
  carousel.scrollLeft = startScrollLeft + scrollDelta;
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

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

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
