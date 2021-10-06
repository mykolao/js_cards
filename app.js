const slides = document.querySelectorAll(".slide");
const bgImage = document.querySelector(".bg-image");

const activateSlide = (slide) => {
  slide.classList.add("active");
};

const updateBgImage = () => {
  slides.forEach((slide) => {
    if (slide.classList.contains("active")) {
      const imageURL = slide.style.backgroundImage;
      bgImage.style.backgroundImage = imageURL;
    }
  });
};

updateBgImage();

const clearActive = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
};

for (const slide of slides) {
  slide.addEventListener("click", () => {
    clearActive();
    activateSlide(slide);
    updateBgImage();
  });
}

document.addEventListener("wheel", (event) => {
  // If delta is true, activate the left slide.
  // Else activate the right
  const delta = event.deltaY > 0 ? true : false;
  const slideCount = slides.length;
  let activeIndex;

  slides.forEach((slide, index) => {
    if (slide.classList.contains("active")) {
      activeIndex = index + 1;
    }
  });

  clearActive();

  if (delta) {
    activeIndex < slideCount
      ? activateSlide(slides[activeIndex])
      : activateSlide(slides[0]);
  } else {
    activeIndex > 1
      ? activateSlide(slides[activeIndex - 2])
      : activateSlide(slides[slideCount - 1]);
  }

  updateBgImage();
});
