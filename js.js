 
//  Zobacz portfolio
 $('.btn').on('click', function () {
   $('body, html').animate({
    scrollTop: $('.portfolio').offset().top
   }, 1000)
  }) 

  // Portfolio
  $(document).on('scroll', function() {
    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop()
    
    const $art1 = $('.art1');
    const art1FromTop = $art1.offset().top
    const art1Height = $art1.outerHeight()
    
    const $art2 = $('.art2');
    const art2FromTop = $art2.offset().top
    const art2Height = $art2.outerHeight()
    
    const $art3 = $('.art3');
    const art3FromTop = $art3.offset().top
    const art3Height = $art3.outerHeight()
   
    const $art4 = $('.art4');
    const art4FromTop = $art4.offset().top
    const art4Height = $art4.outerHeight()
  
    
    // 1 Sekcja
    if (scrollValue > art1FromTop + art1Height - windowHeight) {
      // console.log("jestem caly")
    $art1.addClass('active');
  }
    if (scrollValue > art2FromTop + art2Height - windowHeight) {
        // console.log("jestem caly")
    $art2.addClass('active');
    }
    
    if (scrollValue > art3FromTop + art3Height - windowHeight) {
        // console.log("jestem caly")
    $art3.addClass('active');
    }
    
    if (scrollValue > art4FromTop + art4Height - windowHeight) {
        // console.log("jestem caly")
    $art4.addClass('active');
    } 

    if(scrollValue < 100) {
      $('.project').removeClass('active');
  }
  })

  
