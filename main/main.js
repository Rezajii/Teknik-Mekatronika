const menu = document.querySelector(".menu");
const nav = document.querySelector(".items");
let displays = document.querySelectorAll(".num");
let interval = 1500;
const info = document.querySelector("#info");
let stop = false;

menu.addEventListener("click", () => {
  nav.classList.toggle("h-0");
});

AOS.init();

window.onscroll = () => {
  let top = window.scrollY;
  let offset = info.clientTop;
  let height = info.clientHeight;

  if (top >= offset && top < offset + height && !stop) {
    displays.forEach((display) => {
      let startvalue = 0;
      let endvalue = parseInt(display.getAttribute("data-val"));
      let duration = Math.floor(interval / endvalue);

      let counter = setInterval(function () {
        startvalue += 1;
        display.textContent = startvalue;
        if (startvalue == endvalue) {
          stop = true;
          clearInterval(counter);
        }
      }, duration);
    });
  }
};
