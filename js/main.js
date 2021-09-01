// select element function

const selectElement = function (element){
  return document.querySelector(element);

};

let menuToggler = selectElement('.hamburger');
let header = selectElement('header');

menuToggler.addEventListener('click', function(){
  header.classList.toggle('open');
});

$(document).ready(function () {
  // Add smooth scrolling to all links
  $('a[href*="#"]').on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        "linear",
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});