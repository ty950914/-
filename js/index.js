
    var swiper1 = new Swiper('.swiper-container1', {
        pagination: {
            el: '.swiper-pagination1',
          },
        autoplay:true,
        loop:true
    });

    // $(function(){
    //    var  i=0;
    //     var mytime= setInterval(function(){
    //      $(".count1_right_bottom").delay(500).animate({"top":i},500) 
    //       i-=24;
    //      if(Math.abs(parseInt($(".count1_right_bottom").css("top")))>=24){
    //      i=0
    //      }
    //  },1000)
    // })

    var swiper2 = new Swiper('.swiper-container2', {
        slidesPerView:2
    });

    var swiper3 = new Swiper('.swiper-container3', {
        slidesPerView:2
    });


    function changeNews(){
        $('.count1_right_bottom').delay(1000).animate({top:"-0.25rem"},500,function(){
           $(this).delay(1000).animate({top:"-0.5rem"},300,function(){
             $(this).delay(1000).animate({top:"-0.75rem"},300,function(){
               $(this).delay(1000).animate({top:"-0.9rem"},300,function(){
                 $(this).css("top",0);
                 changeNews();
               })
             })
           })
        })
      }
     
      window.onload =function(){
        changeNews()
      }