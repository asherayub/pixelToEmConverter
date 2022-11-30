const inputVal = document.getElementById("val");
const valueInEms = document.getElementById("valueInEms");
const copyBtn = document.getElementById("copybtn");
const changePx = document.getElementById("changePx");
inputVal.addEventListener("keyup", () => {
  valueInEms.textContent =
    (+inputVal.value / +changePx.value).toFixed(3) + "em";
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(valueInEms.textContent);
  copyBtn.style.backgroundColor = "#24FE41";
  copyBtn.textContent = "Done";
  setTimeout(() => {
    copyBtn.style.backgroundColor = "transparent";
    copyBtn.textContent = "Copy";
  }, 1500);
});
