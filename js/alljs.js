$(document).ready(function() {
//top滾動至頂端
    $('.top a').click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:0
     },1000);
          
     });
    

     
//swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'cube',
    autoplay: {
      delay: 2500,
    },
    

  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


//燈箱
lightbox.option({
  'resizeDuration': 300,
  'wrapAround': true

})


//下拉選單 hover
$('.dropdown').hover(function (e) { 
  e.preventDefault(); 
  $('.drop').slideDown();
}, function () {
  $('.drop').fadeOut();
    });
   


 $('.dropdown2').hover(function (e) { 
   e.preventDefault(); 
  $('.drop2').slideDown();
}, function () {
  $('.drop2').fadeOut();
        });

//main圖片用hover做animate效果

 $('.main-image').hover(function (e) { 
    e.preventDefault(); 
    $('.main-image').addClass('animate__animated animate__rubberBand');
  
     //監聽使得動畫可重複觸發
  $('.main-image').on('animationend', function() {
    $(this).removeClass('animate__animated animate__rubberBand');
   })
})
       






})

  


  