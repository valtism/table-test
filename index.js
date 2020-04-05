const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const callback = (entries) => {
  const entry = entries[0];

  const grid = document.getElementById("grid");
  const isVisible = entry.isIntersecting;
  const isBelow = entry.boundingClientRect.y <= 0;

  if (!isVisible && isBelow) {
    grid.classList.add("h-screen-gap");
  } else {
    grid.classList.remove("h-screen-gap");
  }
};

const observer = new IntersectionObserver(callback, options);

window.onload = () => {
  const target = document.getElementById("sentinel");
  observer.observe(target);
};
