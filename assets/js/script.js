const inquiryBtn = document.querySelector('.inquiry_btn');

inquiryBtn.addEventListener('click', function(){
    alert('함덕 STAY에 대한 자세한 내용은 클린사이트 010-8229-6528 로 문의해 주세요.');
})


//리뷰 스와이퍼
const reviewSwiper = new Swiper('.gallery__article[room-type="401"] .review-img-box .swiper-container',{
  slidesPerView: 'auto',
  navigation:{
    nextEl: '.gallery__article[room-type="401"] .review-img-box .swiper-button-next',
    prevEl: '.gallery__article[room-type="401"] .review-img-box .swiper-button-prev',					
  },
});

const reviewSwiper2 = new Swiper('.gallery__article[room-type="402"] .review-img-box .swiper-container',{
    slidesPerView: 'auto',
    navigation:{
      nextEl: '.gallery__article[room-type="402"] .review-img-box .swiper-button-next',
      prevEl: '.gallery__article[room-type="402"] .review-img-box .swiper-button-prev',					
    },
  });

  
  //레이어팝업
  $('.gallery__article[room-type="401"] .review-img-box .swiper-slide').on('click', function(){
      $(this).parents('.review-img-box').siblings('.dim-box').css('display', 'block');
      
      //갤러리 스와이퍼
      
      const gallerySwiper = new Swiper('.gallery__article[room-type="401"] .gallery-img-box .swiper-container',{
            pagination:{
              el: '.gallery__article[room-type="401"] .swiper-pagination',
              type: 'fraction',
            },
            navigation:{
                nextEl: '.gallery__article[room-type="401"] .gallery-img-box .swiper-button-next',
                prevEl: '.gallery__article[room-type="401"] .gallery-img-box .swiper-button-prev',					
            },
        });
        gallerySwiper.slideTo($(this).data('num'));
        
        // $('body').addClass('lock');	
        
        $( window ).resize(function(){
            gallerySwiper.update();
        });
    });

    $('.gallery__article[room-type="402"] .review-img-box .swiper-slide').on('click', function(){
        $(this).parents('.review-img-box').siblings('.dim-box').css('display', 'block');
        
        //갤러리 스와이퍼
        
        const gallerySwiper2 = new Swiper('.gallery__article[room-type="402"] .gallery-img-box .swiper-container',{
              pagination:{
                el: '.gallery__article[room-type="402"] .swiper-pagination',
                type: 'fraction',
              },
              navigation:{
                  nextEl: '.gallery__article[room-type="402"] .gallery-img-box .swiper-button-next',
                  prevEl: '.gallery__article[room-type="402"] .gallery-img-box .swiper-button-prev',					
              },
          });
          gallerySwiper2.slideTo($(this).data('idx'));
          
          // $('body').addClass('lock');	
          
          $( window ).resize(function(){
              gallerySwiper2.update();
          });
      });
    
 

    //닫기 버튼
    $('.layer-x-btn').on('click', function(){
      $('.dim-box').hide();
      // $('body').removeClass('lock');	
    });