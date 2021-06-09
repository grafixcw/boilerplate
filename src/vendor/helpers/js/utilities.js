function setBackgroundColor(elm) {
  $(elm).each(function () {
    $(this).css("background-color", $(this).data("bg-color"));
  });
}

function setBackgroundImage(elm) {
  $(elm).each(function () {
    $(this).css("background-image", "url(" + $(this).data("bg-image") + ")");
  });
}

function initBootNavbar() {
  if ($(window).width() > 992) {
    $("body").bootnavbar({
      animation: false,
    });
  }
}

function togggleDropdownAttr() {
  $(".navbar .dropdown > a")
    .removeAttr("data-toggle")
    .on("click", function () {
      location.href = this.href;
    });
}

function jumpMenu(elm) {
  $(elm).on("change", function () {
    var url = $(this).val();
    if (url) {
      window.location = url;
    }
    return false;
  });
}

function textFadeAnim(elm) {
  $(document).on("scroll", function () {
    var currScrollPos = $(document).scrollTop();

    $(elm).each(function () {
      var $this = $(this);
      var elemOffsetTop = $this.offset().top;

      if (currScrollPos > elemOffsetTop) {
        $this.css("opacity", 1 - (currScrollPos - elemOffsetTop) / 50);
      } else {
        $this.css("opacity", 1);
      }
    });
  });
}
