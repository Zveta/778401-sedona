var link = document.querySelector(".open-form");
var popup = document.querySelector(".modal-form");
var form = modal.querySelector("form");
var checkin = popup.querySelector("[name=check-in]");
var checkout = popup.querySelector("[name=check-out]");
var adults = popup.querySelector("[name=adults-number]");
var children = popup.querySelector("[name=children-number]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("checkin");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show")
    checkin.focus();
});


form.addEventListener("submit", function (evt) {
  evt.preventDefault();
if (isStorageSupport) {
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("children", children.value);
  }
});


popup.addEventListener("submit", function (evt) {
        if (!checkout.value || !checkin.value || !adults.value || !children.value) {
          evt.preventDefault();
          popup.classList.remove("modal-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-error");  
        } else