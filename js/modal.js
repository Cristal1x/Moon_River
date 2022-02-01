let close = document.querySelector('.close');
let open = document.querySelector('.burger');
let hero = document.querySelector('.hero');
let modal = document.querySelector('.modal');
let logo = document.querySelector('.logo');
let logoWhite = document.querySelector('.logo--white');

open.addEventListener("click", function (evt) {
  evt.preventDefault();
  hero.style.display = "none";
  open.style.display = "none";
  modal.style.display = "block";
  close.style.display = "block";
  logo.style.display = "none";
  logoWhite.style.display = "block";
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  hero.style.display = "grid";
  open.style.display = "block";
  modal.style.display = "none";
  close.style.display = "none";
  logo.style.display = "block";
  logoWhite.style.display = "none";
});