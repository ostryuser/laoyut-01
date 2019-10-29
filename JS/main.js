$(function() {
  $(this).scrollTop(0); // page on top on every refresh


  // SLIDER 
  var inWrap = $('.inner-wrapper');
  var timeout;

  advance();

  $('.prev').on('click', function() {

    if(inWrap.is(':animated')) {
      return;
    }

    inWrap.animate({left: '0%'}, 300, function(){
      inWrap.css('left', '-25%');
      $('.slide').first().before($('.slide').last());

      advance();
    });
  });


  $('.next').on('click', function() {

    if(inWrap.is(':animated')) {
      return;
    }

      slideNext(300);
  });


  function advance() {
    clearTimeout(timeout);

    if(inWrap.is(':animated')) {
      return;
    }

    timeout = setInterval(function() {
      slideNext(1000);
    }, 6000);
  }


  function slideNext(time) {
    inWrap.animate({left: '-50%'}, time, function(){
      inWrap.css('left', '-25%');
      $('.slide').last().after($('.slide').first());

      advance();
    });
  }



  const slider = document.querySelector('.slider-wrapper');  // draggable function
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    advance();
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
    advance();
  });



  // CHANGING HEADER COLOR

var pagetop, yPos;

function yScroll() {

    var navLinks = document.querySelectorAll('nav > ul > li > a');
    pagetop = document.getElementById('header');
    yPos = window.pageYOffset;

    if(yPos > 200) {
        pagetop.style.background = 'white';
        for(i = 0; i < navLinks.length; i++) {
          navLinks[i].style.color = 'dimgray';
        }

    } else {
        pagetop.style.background = 'transparent';
        for(i = 0; i < navLinks.length; i++) {
          navLinks[i].style.color = 'white';
        }
    }
}

window.addEventListener("scroll", yScroll);

// SCROLL INDICATOR

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

})

// SHOWING INPUT ON TYPE

$('input,textarea').on('input', function(){
  if(($(this).length && $(this).val().length)){
  $(this).css({'opacity': '1'});
  $('.input-low').css("text-transform", 'lowercase');
} else {
  $('.input-low').css("text-transform", 'uppercase');
    if(!($(this).length && $(this).val().length)){
    $(this).on('focus', function(){
      $(this).css('opacity', '0');
    });
  }
    $(this).on('focusout', function(){
      $(this).css('opacity', '1');
    });
  }
});


