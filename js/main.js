$(".details h3").click(function (e) {
  $(".details .closable").slideUp(1000);
  $(this).next().slideDown(1000);
});

$(document).ready(function () {
  $(".closable").slideUp(0);
  $(".closable:first").slideDown(500);
});
