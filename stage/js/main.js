
$(document).ready(function() {
  $('.single-item').slick();
  
  $('.autoplay').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  
  
  $('.responsive').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });
  
  
  
  // Loading Screen
  
  /*
  setTimeout(function () {
    $('.loading .lds-spinner').fadeOut(2000, function () {
      $(this).parent().fadeOut(2000, function () {
        $(this).remove();
      });
    });
  }, 1000);
  */
  

});


/*

let mylang = document.getElementsByClassName('choose-lang');
let myChange = document.getElementsByClassName('down');

mylang[0].onclick = function fanc() {

  'use strict';

  console.log('TEST');
  myChange[0].classList.toggle('show');


}

*/



let myBtn = document.getElementsByClassName('show-more');
let myBox = document.getElementsByClassName('box');


myBtn[0].onclick = function () {
  
  for (i = 6; i <= 11; i++) {
    
    myBox[i].classList.toggle('hidden');
    
  }
  
  if (myBtn[0].innerHTML == 'Load More') {
    
    myBtn[0].innerHTML = 'Load Less';
    
  } else {
    
    myBtn[0].innerHTML = 'Load More';
    
  }
  
}


let mySecondBtn = document.getElementById('btn-second');
let mySecondBox = document.getElementsByClassName('toggl-tow');


mySecondBtn.onclick = function () {
  
  for (i = 0; i <= 5; i++) {
    
    mySecondBox[i].classList.toggle('hidden');
    
  }
  
  if (mySecondBtn.innerHTML == 'Load More') {
    
    mySecondBtn.innerHTML = 'Load Less';
    
  } else {
    
    mySecondBtn.innerHTML = 'Load More';
    
  }
  
}


























