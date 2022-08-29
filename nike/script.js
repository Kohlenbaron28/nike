$(document).ready(function() {
    $(`.header_burger`).click(function (event) {
      $(`.header_burger, .menu__body`).toggleClass(`active`); 
    });
});