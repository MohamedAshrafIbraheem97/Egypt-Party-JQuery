$(".details h3").click(function (e) {
  $(".details .closable").slideUp(1000);

  if ($(this).next().css("display") == "none") {
    $(this).next().slideDown(1000);
  }
});

$(document).ready(function () {
  $(".closable").slideUp(0);
  $(".closable:first").slideDown(500);

  $(".nav").animate({ left: -$(".nav").outerWidth(true) }, 500);
});

const navWidth = $(".nav").outerWidth(true);

$(".side-text").click(function () {
  if ($(".nav").css("left") == `-${navWidth}px`) {
    $(".nav").animate({ left: 0 }, 500);
    $(".side-text").animate({ left: navWidth }, 500);
  } else if ($(".nav").css("left") == "0px") {
    $(".nav").animate({ left: -navWidth }, 500);
    $(".side-text").animate({ left: 0 }, 500);
  }
});
