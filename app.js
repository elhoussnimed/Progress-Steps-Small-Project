const lis = document.querySelectorAll("ul li");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const progress = document.querySelector("ul .progress");
let currentActive = 1;

nextBtn.addEventListener("click", () => {
  currentActive++;
  if (currentActive === lis.length) {
    currentActive = lis.length;
  }

  lis.forEach((li, index) => {
    if (index + 1 === currentActive) {
      li.classList.add("active");
    }
  });

  update();
});

prevBtn.addEventListener("click", () => {
  currentActive--;
  if (currentActive === 1) {
    currentActive === 1;
  }

  lis.forEach((li, index) => {
    if (index === currentActive) {
      li.classList.remove("active");
    }
  });

  update();
});

function update() {
  // prev button
  if (currentActive > 1) {
    prevBtn.removeAttribute("disabled");
  } else if (currentActive === 1) {
    prevBtn.setAttribute("disabled", "");
  }

  // next button
  if (currentActive === lis.length) {
    nextBtn.setAttribute("disabled", "");
  } else if (currentActive > 1) {
    nextBtn.removeAttribute("disabled");
  }

  // Progress Bar
  const activeLis = document.querySelectorAll("li.active");
  const progressMovePercentage = ((activeLis.length - 1) / (lis.length - 1)) * 100;
  progress.style.width = progressMovePercentage + "%";

  if (screen.width < 767) {
    progress.style.width = "3px";
    progress.style.height = progressMovePercentage + "%";
  }
}
