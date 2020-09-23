$('body').scrollspy({ 
    target: '#navbar-1',
    offset: 80
});

// Go to specific div with animation
$('.scrollto').click(function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top - 40  }, 1500);
    event.preventDefault();
});