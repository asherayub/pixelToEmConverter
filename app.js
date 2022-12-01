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
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else if (!document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "light");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});
// Storting user theme preference in local storage
window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    icon.classList.add("fa-sun");
    icon.classList.remove("fa-moon");
  } else if (localStorage.getItem("theme") === "light") {
    document.body.classList.remove("dark");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
};
