//  Zobacz portfolio
$(".btn").on("click", function () {
  $("body, html").animate(
    {
      scrollTop: $(".portfolio").offset().top,
    },
    1000
  );
});

// Portfolio
$(document).on("scroll", function () {
  const windowHeight = $(window).height();
  const scrollValue = $(this).scrollTop();

  const $art1 = $(".art1");
  const art1FromTop = $art1.offset().top;
  const art1Height = $art1.outerHeight();

  const $art2 = $(".art2");
  const art2FromTop = $art2.offset().top;
  const art2Height = $art2.outerHeight();

  const $art3 = $(".art3");
  const art3FromTop = $art3.offset().top;
  const art3Height = $art3.outerHeight();

  const $art4 = $(".art4");
  const art4FromTop = $art4.offset().top;
  const art4Height = $art4.outerHeight();

  const $art5 = $(".art5");
  const art5FromTop = $art5.offset().top;
  const art5Height = $art5.outerHeight();

  const $art6 = $(".art6");
  const art6FromTop = $art6.offset().top;
  const art6Height = $art6.outerHeight();

  // 1 Sekcja
  if (scrollValue > art1FromTop + art1Height - windowHeight) {
    $art1.addClass("active");
  }
  if (scrollValue > art2FromTop + art2Height - windowHeight) {
    $art2.addClass("active");
  }

  if (scrollValue > art3FromTop + art3Height - windowHeight) {
    $art3.addClass("active");
  }

  if (scrollValue > art4FromTop + art4Height - windowHeight) {
    $art4.addClass("active");
  }

  if (scrollValue > art5FromTop + art5Height - windowHeight) {
    $art5.addClass("active");
  }

  if (scrollValue > art6FromTop + art6Height - windowHeight) {
    $art6.addClass("active");
  }

  if (scrollValue < 100) {
    $(".project").removeClass("active");
  }
});
