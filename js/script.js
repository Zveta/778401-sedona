var link = document.querySelector(".open-form");
var popup = document.querySelector(".modal-form");
var checkin = popup.querySelector("[name=check-in]");
    
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-close");
  checkin.focus();
});