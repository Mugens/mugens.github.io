$(document).ready(function(){

  //----------Slider
  $('.banner').slick({
    arrows: false,
    dots: true
  });

  $('.popular_items').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay:true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });


  //-----------Menu
  $('.icon--menu>i').on('click',function(){
    $(this).toggleClass('fa-bars');
    $(this).toggleClass('fa-times');
    $('.nav-top').toggleClass('d-block')
  })

  $('.categories__title>i').on('click',function(){
    $(this).toggleClass('fa-align-lef');
    $(this).toggleClass('fa-times');
    $('.categories__menu').toggleClass('d-block')
  })

  //----------More----------------
  $('.shop_info-more').on('click',function(e){
    e.preventDefault();
    $(this).hide();
    $('.shop_info').height('auto');
  })
});

$(window).on('load', function() {
  $('.loader_overlay').fadeOut().end().delay(400).fadeOut('slow');

  $('.video .video_wraper').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/0AHaw7BN2mE" frameborder="0" allow="autoplay; encrypted-media;" allowfullscreen></iframe>');
});


$(window).resize(()=>{
  $('.banner').slick('refresh');
})