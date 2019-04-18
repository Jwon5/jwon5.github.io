$(".readmore").click(function() {
  $('html,body').animate({
      scrollTop: $(".two").offset().top - 50},
      'slow');
});