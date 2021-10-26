const scrollEffect2 = document.querySelector(".btn");
const sectionContact = document.querySelector("#contact");

scrollEffect2.addEventListener("click", function () {
  sectionContact.scrollIntoView({ behavior: "smooth" });
});
