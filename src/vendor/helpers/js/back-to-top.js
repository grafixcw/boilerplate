jQuery(document).ready(function () {
  // Back to Top link
  var elm = $(".back-to-top");

  $(window).scroll(function () {
    if ($(document).scrollTop() > 100) {
      elm.fadeIn("slow");
    } else {
      elm.fadeOut("slow");
    }
  });
  elm.click(function () {
    $("html,body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});
