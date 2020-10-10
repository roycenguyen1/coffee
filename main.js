// select element function

const selectElement = function (element){
  return document.querySelector(element);

};

let menuToggler = selectElement('.hamburger');
let header = selectElement('header');

menuToggler.addEventListener('click', function(){
  header.classList.toggle('open');
});