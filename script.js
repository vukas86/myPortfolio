const scrollEffect2 = document.querySelector(".btn");
const sectionContact = document.querySelector("#contact");
const nav = document.querySelector(".navbar");
const navBar = document.querySelector(".header_nav");

document.querySelector(".navbar").addEventListener("click", function (e) {
  console.log(e);
  e.preventDefault();

  if (e.target.classList.contains("nav_link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

scrollEffect2.addEventListener("click", function (e) {
  sectionContact.scrollIntoView({ behavior: "smooth" });
});

const handleEvent = function (e) {
  if (e.target.classList.contains("nav_link")) {
    const link = e.target;
    const siblings = link.closest(".navbar").querySelectorAll(".nav_link");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

nav.addEventListener("mouseover", handleEvent.bind(0.5));
nav.addEventListener("mouseout", handleEvent.bind(1));

const navbarHeight = nav.getBoundingClientRect().height;
const header = document.querySelector(".container");

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) {
    navBar.classList.add("nav_items");
  } else {
    navBar.classList.remove("nav_items");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  treshold: 0,
  rootMargin: `-${navbarHeight}px`,
});
headerObserver.observe(header);

/* //
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.5,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});
 */
