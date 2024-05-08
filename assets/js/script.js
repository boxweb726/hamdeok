const inquiryBtn = document.querySelector('.inquiry_btn');

inquiryBtn.addEventListener('click', function() {
    alert('함덕 STAY에 대한 자세한 내용은 클린사이트 010-8229-6528 로 문의해 주세요.');
})

// 401호 list swiper
const reviewSwiper = new Swiper('.gallery__article[room-type="401"] .review-img-box .swiper-container', {
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.gallery__article[room-type="401"] .review-img-box .swiper-button-next',
        prevEl: '.gallery__article[room-type="401"] .review-img-box .swiper-button-prev',
    },
});

// 402호 list swiper
const reviewSwiper2 = new Swiper('.gallery__article[room-type="402"] .review-img-box .swiper-container', {
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.gallery__article[room-type="402"] .review-img-box .swiper-button-next',
        prevEl: '.gallery__article[room-type="402"] .review-img-box .swiper-button-prev',
    },
});


// 401호 event
$('.gallery__article[room-type="401"] .review-img-box .swiper-slide').on('click', function() {
    $(this).parents('.review-img-box').siblings('.dim-box').css('display', 'block');

    const gallerySwiper = new Swiper('.gallery__article[room-type="401"] .gallery-img-box .swiper-container', {
        pagination: {
            el: '.gallery__article[room-type="401"] .swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.gallery__article[room-type="401"] .gallery-img-box .swiper-button-next',
            prevEl: '.gallery__article[room-type="401"] .gallery-img-box .swiper-button-prev',
        },
        keyboard: {
          enabled: true,
        },
    });
    gallerySwiper.update();
    gallerySwiper.slideTo($(this).data('num'));
    // $('body').addClass('lock');	
    $(window).resize(function() {
        gallerySwiper.update();
    });
});

// 402호 event
$('.gallery__article[room-type="402"] .review-img-box .swiper-slide').on('click', function() {
    $(this).parents('.review-img-box').siblings('.dim-box').css('display', 'block');

    const gallerySwiper2 = new Swiper('.gallery__article[room-type="402"] .gallery-img-box .swiper-container', {
        pagination: {
            el: '.gallery__article[room-type="402"] .swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.gallery__article[room-type="402"] .gallery-img-box .swiper-button-next',
            prevEl: '.gallery__article[room-type="402"] .gallery-img-box .swiper-button-prev',
        },
        keyboard: {
          enabled: true,
        },
    });
    gallerySwiper2.update();
    gallerySwiper2.slideTo($(this).data('idx'));
    // $('body').addClass('lock');	
    $(window).resize(function() {
        gallerySwiper2.update();
    });
});

// popup close
$('.popup_close').on('click', function() {
    $('.dim-box').hide();
    // $('body').removeClass('lock');	
});

$(document).keydown(function(event) {
  if ( event.keyCode == 27 || event.which == 27 ) {
    $('.dim-box').hide();
  }
});