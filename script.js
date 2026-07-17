const icon = document.getElementById("icon");

icon.onclick = function () {

  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
};

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

manuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
