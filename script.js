const moreSkills = document.querySelector("#Button");
const positionMarkerLine1 = document.getElementById("position_marker-line1");
const positionMarkerLine2 = document.getElementById("position_marker-line2");
const positionMarkerLine3 = document.getElementById("position_marker-line3");
const positionMarkerLine4 = document.getElementById("position_marker-line4");
const positionMarker = document.getElementById("position_marker");
const positionMarkerLineDown = document.getElementById("position_marker-line5");

const secondSection = document.getElementById("skills");
const thirdSection = document.getElementById("more_about");
const fourthSection = document.getElementById("projects");
const preloader = document.getElementById("preloader");
const mainContent = document.getElementById("main_content");
const toggleMode = document.getElementById("toggle_mode");
const root = document.querySelector(":root");
const toggleModeMobile = document.getElementById("toggle_mode-mobile");
const element = document.body;

function postionMarker1() {
  setTimeout(() => {
    positionMarkerLine1.classList.remove("active");
  }, 3000);
  positionMarkerLine1.classList.add("active");

  window.scrollTo(0, 0);
}
function postionMarker2() {
  setTimeout(() => {
    positionMarkerLine2.classList.remove("active");
  }, 3000);
  positionMarkerLine2.classList.add("active");

  window.scrollTo(0, secondSection.offsetTop);
}
function postionMarker3() {
  setTimeout(() => {
    positionMarkerLine3.classList.remove("active");
  }, 3000);
  positionMarkerLine3.classList.add("active");
  window.scrollTo(0, thirdSection.offsetTop);
}
function postionMarker4() {
  setTimeout(() => {
    positionMarkerLine4.classList.remove("active");
  }, 3000);
  positionMarkerLine4.classList.add("active");

  window.scrollTo(0, fourthSection.offsetTop);
}
function postionMarker5() {
  window.scrollTo(0, 20000);
}

function work() {
  const framework = document.getElementById("framework");
  if (framework.style.display === "flex") {
    framework.style.display = "none";
    moreSkills.innerHTML = "see more"
  } else {
    moreSkills.innerHTML = "see less"
    framework.style.display = "flex";
  }
}

moreSkills.addEventListener("click", work);
positionMarkerLine1.addEventListener("click", postionMarker1);
positionMarkerLine2.addEventListener("click", postionMarker2);
positionMarkerLine3.addEventListener("click", postionMarker3);
positionMarkerLine4.addEventListener("click", postionMarker4);
positionMarkerLineDown.addEventListener("click", postionMarker5);

window.addEventListener("load", function () {
  preloader.style.display = "none";
  positionMarker.style.display = "flex";
  // mainContent.style.display='flex'
});

//-------------- The MobileNav Controller -------------------

const navMobile = document.getElementById("navbar_mobile");

const navMobileBar = document.getElementById("navbar_mobile-bar");

const navLine = document.getElementById("nav_line");
function toggleNav() {
  navMobile.classList.toggle("toggle");
}

navMobileBar.addEventListener("click", () => {
  navMobile.classList.toggle("hide");
  navMobileBar.classList.toggle("toggle");
});

let nav = document.querySelectorAll(".nav");

nav.forEach(function (i) {
  setTimeout(() => {
    i.addEventListener("click", () => {
      navMobile.classList.toggle("hide");
      navMobileBar.classList.toggle("toggle");
    });
  }, 1000);
});

//---------- Toggle Mode --------------

const toggleIcon = document.getElementById("toggle_icon");

const changeBackground = () => {
  setTimeout(() => {
    element.classList.toggle("light_mode");
    toggleIcon.classList.remove("toggle_mode");
  }, 2000);
};

toggleMode.addEventListener("click", changeBackground);
toggleModeMobile.addEventListener("click", changeBackground);

// -----------loading-----------

const before_loadtime = new Date().getTime();


function animateValue(obj, start, end, duration) {

  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);

}

animateValue(obj, 0, 100, 3000);



//------------------------- GSAP --------------------------
