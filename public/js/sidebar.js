jQuery(function($) {
    var window_location_href = window.location.href;
    window_location_href = window_location_href.endsWith('/') ? window_location_href.substr(0, window_location_href.length - 1) : window_location_href;
    var pgurl = window_location_href.substr(window_location_href.lastIndexOf("/") + 1);
  
  
    $(".nav-item > a").each(function() {
      var thisPage = $(this).attr("href");
      thisPage = thisPage.endsWith('/') ? thisPage.substr(0, thisPage.length - 1) : thisPage;
      thisPage = thisPage.substr(thisPage.lastIndexOf("/") + 1);
  
      if (thisPage == pgurl)
        $(this).addClass("active");
    });
  
  });
