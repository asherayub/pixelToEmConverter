const inputVal = document.getElementById("val");
const valueInEms = document.getElementById("valueInEms");
const copyBtn = document.getElementById("copybtn");
const changePx = document.getElementById("changePx");
const toggleIcon = document.querySelector(".toggle-icon");
const icon = document.querySelector(".toggle-icon i");

// calculate ems
inputVal.addEventListener("keyup", () => {
  valueInEms.textContent =
    (+inputVal.value / +changePx.value).toFixed(3) + "em";
});
// copy to clipboard
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(valueInEms.textContent);
  copyBtn.style.backgroundColor = "#24FE41";
  copyBtn.textContent = "Done";
  setTimeout(() => {
    copyBtn.style.backgroundColor = "transparent";
    copyBtn.textContent = "Copy";
  }, 1500);
});
// theme toggle
toggleIcon.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList);
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
});
// Storting user theme preference in local storage
window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
};
