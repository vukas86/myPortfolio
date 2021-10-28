document.querySelector(".navbar").addEventListener("click", function (e) {
  console.log(e);
  e.preventDefault();

  if (e.target.classList.contains("nav_link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const scrollEffect2 = document.querySelector(".btn");
const sectionContact = document.querySelector("#contact");

scrollEffect2.addEventListener("click", function (e) {
  sectionContact.scrollIntoView({ behavior: "smooth" });
});
