$(function() {
    $(this).scrollTop(0);
    
  
  }); 


  // animating icon box on resizing

  window.addEventListener('resize', () => {
    iconBoxes.forEach(iconBox => {
      iconBox.classList.add('icon-box-rescue');
    });
  })
  
  // SHOWING ELEMENTS FUNCTIONS
  
  const banners = document.querySelectorAll('.banner');
  const hideElems = document.querySelectorAll('.hideme');
  
  var cumulativeOffset = function(element) {
    var top = 0, left = 0;
    do {
        top += element.offsetTop  || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    } while(element);
  
    return {
        top: top,
        left: left
    };
  };
  
  const showElements = (scrollTop, elements, animation) => {
    elements.forEach((element, i) => {
      const elemOffset = cumulativeOffset(element);
      if (scrollTop + window.innerHeight > elemOffset.top + element.offsetHeight) {
        element.classList.add(animation);
      }
    })
  };
   
  
 const iconBoxes = document.querySelectorAll('.icon-box li');
  
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
          gallery.setAttribute('href','gallery.hmtl');
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
  
  // PRELOADER & ONLOAD FUNCTIONS
  
  $(window).on('load',function() {
    $("#loader-wrapper").fadeOut();
    setTimeout(() => {
          $('.loader-space').fadeOut();
          showElements(0, banners, 'animate');
          showElements(0, iconBoxes, 'animate');
    }, 1000);
  });
  
  // PARALLAX EFFECTS & SHOWING ELEMENTS
  
  const parallaxes = document.querySelectorAll('.parallax');
  
  const calculateRangeValue = (oldMin, oldMax, newMin, newMax, oldValue) => {
      const oldRange = oldMax - oldMin;
      const newRange = newMax - newMin;
  
      return ((oldValue - oldMin) * newRange/oldRange) + newMin;
  }

  // variable for checking if the browser is Firefox
  var isFirefox = typeof InstallTrigger !== 'undefined';
  
  window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      parallaxes.forEach(parallax => {
          if ((scrollTop + window.innerHeight / 2) > parallax.offsetTop) {
              const oldMin = (parallax.offsetTop < window.innerHeight / 2) ? parallax.offsetTop :
              parallax.offsetTop - window.innerHeight / 2;
              const oldMax = oldMin + parallax.offsetHeight;
              let yPosition;
              if(isFirefox) {  // checking if the browser is Firefox
                 yPosition = calculateRangeValue(oldMin, oldMax, 0, 100, scrollTop);
              }else {
                 yPosition = calculateRangeValue(oldMin, oldMax, 0, -100, scrollTop);
              }
              parallax.style.backgroundPosition = `center ${yPosition}px`;
          }
      });
      showElements(scrollTop, hideElems, 'reveal');
  });


   // SLIDER 
 var isDraggable = false;
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
   threshold = 10,
   slides = items.getElementsByClassName('slide'),
   slidesLength = slides.length,
   slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
   firstSlide = slides[0],
   secondSlide = slides[1],
   penutlimateSlide = slides[slidesLength -2],
   lastSlide = slides[slidesLength - 1],
   cloneFirst = firstSlide.cloneNode(true),
   cloneSecond = secondSlide.cloneNode(true),
   clonePenultimate = penutlimateSlide.cloneNode(true),
   cloneLast = lastSlide.cloneNode(true),
   index = 0,
   allowShift = true;
   var timeout;
   

// Clone first and last slide
items.appendChild(cloneFirst);
items.appendChild(cloneSecond);
items.insertBefore(cloneLast, firstSlide);
items.insertBefore(clonePenultimate, cloneLast);
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
 isDraggable = true;
 
}

function dragEnd (e) {
 posFinal = items.offsetLeft;
 if (posFinal - posInitial < -threshold) {
   shiftSlide(1, 'drag');
 } else if (posFinal - posInitial > threshold) {
   shiftSlide(-1, 'drag');
 } else {
   items.style.left = (posInitial) + "px";
   isDraggable = false;
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
 isDraggable = false;

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
       if (!isDraggable) {
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
     
   } else {
     return
   }
   })
})

lightbox.addEventListener('click', e => {
   if (e.target !== e.currentTarget) return
   lightbox.classList.remove('active')
})