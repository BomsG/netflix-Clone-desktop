const scrollOffset = 100;
const scrollElement = document.querySelector(".demo-txt");
const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) - offset
  );
};
const displayScrollElement = () => {
  scrollElement.classList.add(".demo-txt2");
};
const hideScrollElement = () => {
  scrollElement.classList.remove("demo-txt");
};
const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
    displayScrollElement();
  } else {
    hideScrollElement();
  }
};
window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

function myFunction() {
  var x = document.getElementById("content");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var i = document.getElementById("content2");
  if (i.style.display === "none") {
    i.style.display = "block";
  } else {
    i.style.display = "none";
  }
}
