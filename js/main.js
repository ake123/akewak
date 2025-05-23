document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.getElementById("theme-toggle");
  if (toggler) {
    toggler.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }
});
