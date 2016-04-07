$(function() {

  // domain for cookie
  if(window.location.hostname == "localhost") {
    var domain = "localhost";
  } else {
    var domain = window.location.hostname.split(".").slice(-2).join(".");
  }

  // sidebar folding
  $("#menu-folder").click(function() {
    $(".content").toggleClass("fold-in");
    if($(".content").hasClass("fold-in")) {
      $.cookie("menu_fold_in", 1, {domain: domain});
      $('.menu-icon').each(function() {
        $(this).tooltip({placement: 'right', title: $(this).next().text()})
      });
    } else {
      $.removeCookie("menu_fold_in", {domain: domain});
      $('.menu-icon').tooltip('destroy');
    }
    $(".submenu").slideUp("fast", function() {
      height = Math.max($("#sidebar-nav").height(), $(window).height()-48);
      $('.content').css('min-height', height);
    });
  });

  if($(".content").hasClass("fold-in")) {
    $('.menu-icon').each(function() {
      $(this).tooltip({placement: 'right', title: $(this).next().text()})
    });
  }

  // sidebar submenu dropdown toggle
  $("#dashboard-menu .dropdown-toggle").click(function (e) {
    e.preventDefault();
    var $item = $(this).parent();
    var $content = $(".content");
    if($content.hasClass("fold-in")) {
      $(".content").removeClass("fold-in");
    }

    $item.find(".submenu").slideToggle("fast", function() {
      height = Math.max($("#sidebar-nav").height(), $(window).height()-48);
      $('.content').css('min-height', height);
    });
  });
});



