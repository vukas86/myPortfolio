const scrollEffect2 = document.querySelector(".btn");
const sectionContact = document.querySelector("#contact");
const nav = document.querySelector(".nav_items");

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
    const siblings = link.closest(".nav_items").querySelectorAll(".nav_link");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

nav.addEventListener("mouseover", handleEvent.bind(0.5));
nav.addEventListener("mouseout", handleEvent.bind(1));
