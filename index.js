document.addEventListener("DOMContentLoaded", function () {
  // Carousel logic
  const carousel = document.querySelector(".mp-img");
  const images = carousel.querySelectorAll("img");
  const leftBtn = document.querySelector(".carousel-btn.left");
  const rightBtn = document.querySelector(".carousel-btn.right");
  let currentIndex = 0;
  const visibleCount = 4;

  function updateCarousel() {
    const movePercent = 100 / visibleCount;
    carousel.style.transform = `translateX(-${currentIndex * movePercent}%)`;
  }

  leftBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  rightBtn.addEventListener("click", function () {
    if (currentIndex < images.length - visibleCount) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Founder carousel logic
  const founderTrack = document.querySelector(".founder-track");
  const founderSlides = document.querySelectorAll(".founder-main");
  const founderLeftBtn = document.querySelector(".carousel-btn2.left");
  const founderRightBtn = document.querySelector(".carousel-btn2.right");
  let founderIndex = 0;
  const founderVisible = 1;

  function updateFounderCarousel() {
    founderTrack.style.transform = `translateX(-${founderIndex * 100}%)`;
  }

  if (founderLeftBtn && founderRightBtn) {
    founderLeftBtn.addEventListener("click", function () {
      if (founderIndex > 0) {
        founderIndex--;
        updateFounderCarousel();
      }
    });

    founderRightBtn.addEventListener("click", function () {
      if (founderIndex < founderSlides.length - founderVisible) {
        founderIndex++;
        updateFounderCarousel();
      }
    });
  }

  // Dropdown logic
  const dropDown = document.querySelector(".drop-down");
  const dropDownToggle = dropDown.querySelector("a");
  const dropDownContent = dropDown.querySelector(".drop-down-content");

  dropDownToggle.addEventListener("click", function (e) {
    e.preventDefault();
    dropDown.classList.toggle("open");
  });

  document.addEventListener("click", function (e) {
    if (!dropDown.contains(e.target)) {
      dropDown.classList.remove("open");
    }
  });


  const menuIcon = document.querySelector(".menu-icon");
  const navUl = document.querySelector("nav ul");
  const navClose = document.querySelector(".nav-close");

  menuIcon.addEventListener("click", function (e) {
    navUl.classList.add("show");
    navClose.style.display = "block";
    document.body.classList.add("nav-open");
  });

  navClose.addEventListener("click", function () {
    navUl.classList.remove("show");
    navClose.style.display = "none";
    document.body.classList.remove("nav-open");
  });

  document.addEventListener("click", function (e) {
    if (
      navUl.classList.contains("show") &&
      !navUl.contains(e.target) &&
      !menuIcon.contains(e.target) &&
      !navClose.contains(e.target)
    ) {
      navUl.classList.remove("show");
      navClose.style.display = "none";
      document.body.classList.remove("nav-open");
    }
  });
});
