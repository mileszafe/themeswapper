const sunMoonContainer = document.querySelector(".container");

document.querySelector(".toggle-button").addEventListener("click", function () {
  document.body.classList.toggle("dark");
  const currentRotation = parseInt(
    getComputedStyle(sunMoonContainer).getPropertyValue("--rotation")
  );
  sunMoonContainer.style.setProperty("--rotation", currentRotation + 180);
});
