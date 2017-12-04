// active scrolling
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 50
     }, 500);
});

// Change the active navbar item on scroll
let sections = $('.section-item'),
    nav = $('.navbar'),
    nav_height = nav.outerHeight();

$(window).on('scroll', function (){
  let cur_pos = $(this).scrollTop();
  sections.each(function(){
    let top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom){
      nav.find('a').parent().removeClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
    }
  });
});