var link = document.querySelector(".open-form");
var popup = document.querySelector(".modal-form");
var checkin = popup.querySelector("[name=check-in]");
var checkout = popup.querySelector("[name=check-out]");
var adults = popup.querySelector("[name=adults-number]");
var children = popup.querySelector("[name=children-number]");

var isStorageSupport = true;
var storageAdults = "";
var storageChildren = "";
  
try {
  storageAdults = localStorage.getItem("adults");
  storageChildren = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}
    
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-close");
  popup.classList.remove("modal-error");
  
  if (storageAdults) {
    adults.value = storageAdults;
    children.value = storageChildren;    
  }
  
  checkin.focus();
});

popup.addEventListener("submit", function(evt) {
 if (!checkin.value || !checkout.value || !adults.value || !children.value) {
   evt.preventDefault();
   console.log("Нужно ввести данные");
   popup.classList.remove("modal-error");
   popup.offsetWidth = popup.offsetWidth;
   popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("children", children.value);
    }
  }
});