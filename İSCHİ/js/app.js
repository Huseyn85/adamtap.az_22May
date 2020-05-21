

$('.slider-all').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 800,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          arrows: false,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          speed: 800,
          autoplay: true,
          autoplaySpeed: 3000,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          speed: 800,
          autoplay: true,
          autoplaySpeed: 3000,
        }
      }
    ]
  });


  $(document).ready(function(){
    $("#CatTop").click(function(){
     $("#CatBottom").slideToggle(600); 
    })
  })
  
  $('#AddElan').click(function() {

    $('#exampleModal').modal('show');
      
    });

  
  $('.vip-all').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    speed: 800,
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          autoplay: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          speed: 800,
          autoplay: true,
          autoplaySpeed: 3000,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          speed: 800,
          autoplay: true,
          autoplaySpeed: 3000,
        }
      }
    ]
  });