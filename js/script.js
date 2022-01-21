$('.btn-menu').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('btn-menu_active');
   $('.menu').toggleClass('menu_active');
  
});

$("#animtext").fadeIn(1500);