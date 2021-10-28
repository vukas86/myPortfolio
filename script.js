document.querySelectorAll(".navbar").forEach(function (el) {
  console.log("hello");
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

const scrollEffect2 = document.querySelector(".btn");
const sectionContact = document.querySelector("#contact");

scrollEffect2.addEventListener("click", function (e) {
  sectionContact.scrollIntoView({ behavior: "smooth" });
});
