$(function() {
  $(this).scrollTop(0);


  $(window).scroll( function(){
    
    $('.hideme').each( function(i){
        
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        if( bottom_of_window > bottom_of_object ){
            
            $(this).animate({'opacity':'1'},500);
            $('.orange-btn').animate({'opacity':'.7'},600);
                
        }
        
    }); 

});

}); 


  // SLIDER 
 
  var slider = document.getElementById('slider'),


  /* sliderTwo = document.getElementById('slider-2'),
   sliderItemsTwo = document.getElementById('slides-2'),
   prevTwo = document.getElementById('prev-2'),
   nextTwo = document.getElementById('next-2'),
  */
  
  sliderItems = document.getElementById('slides'),
  prev = document.getElementById('prev'),
  next = document.getElementById('next');

function slide(wrapper, items, prev, next) {


var posX1 = 0,
    posX2 = 0,
    posInitial,
    posFinal,
    threshold = 100,
    slides = items.getElementsByClassName('slide'),
    slidesLength = slides.length,
    slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
    firstSlide = slides[0],
    lastSlide = slides[slidesLength - 1],
    cloneFirst = firstSlide.cloneNode(true),
    cloneLast = lastSlide.cloneNode(true),
    index = 0,
    allowShift = true;
    var timeout;

// Clone first and last slide
items.appendChild(cloneFirst);
items.insertBefore(cloneLast, firstSlide);
wrapper.classList.add('loaded');

// Mouse events
items.onmousedown = dragStart;

// Touch events
items.addEventListener('touchstart', dragStart);
items.addEventListener('touchend', dragEnd);
items.addEventListener('touchmove', dragAction);

// Click events
prev.addEventListener('click', function () { shiftSlide(-1) });
next.addEventListener('click', function () { shiftSlide(1) });


// Transition events
items.addEventListener('transitionend', checkIndex);

advance();

function advance () {
  clearTimeout(timeout);

  timeout = setInterval(() => {
    shiftSlide(1);
  }, 6000);
}



function dragStart (e) {
  e = e || window.event;
  e.preventDefault();
  posInitial = items.offsetLeft;
  
  if (e.type == 'touchstart') {
    posX1 = e.touches[0].clientX;
  } else {
    posX1 = e.clientX;
    document.onmouseup = dragEnd;
    document.onmousemove = dragAction;
  }
}

function dragAction (e) {
  e = e || window.event;
  
  if (e.type == 'touchmove') {
    posX2 = posX1 - e.touches[0].clientX;
    posX1 = e.touches[0].clientX;
  } else {
    posX2 = posX1 - e.clientX;
    posX1 = e.clientX;
  }
  items.style.left = (items.offsetLeft - posX2) + "px";
}

function dragEnd (e) {
  posFinal = items.offsetLeft;
  if (posFinal - posInitial < -threshold) {
    shiftSlide(1, 'drag');
  } else if (posFinal - posInitial > threshold) {
    shiftSlide(-1, 'drag');
  } else {
    items.style.left = (posInitial) + "px";
  }

  document.onmouseup = null;
  document.onmousemove = null;
}

function shiftSlide(dir, action) {

  items.classList.add('shifting');
  

  if (allowShift) {
    if (!action) { posInitial = items.offsetLeft; }

    if (dir == 1) {
      items.style.left = (posInitial - slideSize) + "px";
      index++;      
    } else if (dir == -1) {
      items.style.left = (posInitial + slideSize) + "px";
      index--;      
    }
  };
  
  allowShift = false;
  advance();
}
  
function checkIndex (){
  items.classList.remove('shifting');

  if (index == -1) {
    items.style.left = -(slidesLength * slideSize) + "px";
    index = slidesLength - 1;
  }

  if (index == slidesLength) {
    items.style.left = -(1 * slideSize) + "px";
    index = 0;
  }
  
  allowShift = true;
}


}


slide(slider, sliderItems, prev, next);


//slide(sliderTwo, sliderItemsTwo, prevTwo, nextTwo);



  // LIGHTBOX

  const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)



const images = document.querySelectorAll('.slides > span > img')
images.forEach(function(image, index) {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        const prev = document.createElement('button')
        prev.classList.add('prev')
        prev.innerHTML = '<i class="fas fa-chevron-left">'
        prev.addEventListener('click', () => {
            img.src = images[index - 1].src
            index = index -1
            if (index == 0) {
                index = images.length
                img.src = images[index].src
                
            }
        }) 
        const next = document.createElement('button')
        next.classList.add('next')
        next.innerHTML = '<i class="fas fa-chevron-right">'
        next.addEventListener('click', () => {
            img.src = images[index + 1].src
            index = index + 1
            if (index == images.length - 1) {
                index = 0
                img.src = images[index].src
            }
        }) 
        img.src = image.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
        lightbox.appendChild(prev)
        lightbox.appendChild(next)
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})
  

  // CHANGING HEADER COLOR AND SHOWING UP-BUTTON

var pagetop, yPos;

function yScroll() {

    var buttonUp = document.querySelector('.button-up');
    var navLinks = document.querySelectorAll('nav > ul > li > a');
    pagetop = document.getElementById('header');
    yPos = window.pageYOffset;

    if(yPos > 200) {
        buttonUp.style.visibility = 'visible';
        pagetop.style.background = 'white';
        for(i = 0; i < navLinks.length; i++) {
          navLinks[i].style.color = 'dimgray';
        }

    } else {
        buttonUp.style.visibility = 'hidden';
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



// NAVIGATING THE SITE

function scrollCareer () {
  document.querySelector('#career').scrollIntoView({ 
  behavior: 'smooth' 
});
slideoutMenu.style.opacity = '0';
    }

    function scrollContact () {
    $('html,body').animate({scrollTop: document.body.scrollHeight},"fast");
  slideoutMenu.style.opacity = '0';
}

 function scrollGallery () {
  document.querySelector('.slider-heading').scrollIntoView({ 
  behavior: 'smooth' 
});
slideoutMenu.style.opacity = '0';
    }

    document.addEventListener('DOMContentLoaded', function() {
      var link = document.querySelector('#homepage');
      var gallery = document.getElementById('gallery');
      if (link.href == window.location.href) {
        gallery.removeAttribute('href');
        link.removeAttribute('href');
        link.addEventListener('click', function() {
          window.scrollTo(0,0);
        });
      } else {
        gallery.setAttribute('href','gallery.php');
      }
    });


// SHOWING INPUT ON TYPE IN CONTACT FORM

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

// UP-BUTTON

$('.button-up').on('click', function() {
  $('html, body').animate({scrollTop: 0,}, "slow");
});

// HAMBURGER BUTTON

const togglerButton = document.getElementById('menu-icon');
const slideoutMenu = document.getElementById('slideout-menu');


togglerButton.addEventListener('click', function() {
  if (slideoutMenu.style.opacity == '0.9') {
    slideoutMenu.style.opacity = '0';
    slideoutMenu.style.pointerEvents = 'none';
  } else {
    slideoutMenu.style.opacity = '0.9';
    slideoutMenu.style.pointerEvents = 'auto';
  }
});

// PRELOADER

$(window).on('load',function() {
  setTimeout(
    function() {
        $("#loader-wrapper").fadeOut();
    }, 2000);
  setTimeout(() => {
        $('.loader-space').fadeOut();
  }, 3000);
});