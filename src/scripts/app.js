(function () {
  var grafix = {
    init: function () {
      setBackgroundColor("[data-bg-color]");
      setBackgroundImage("[data-bg-image]");
      initBootNavbar();
      togggleDropdownAttr();
      $('[data-toggle="tooltip"]').tooltip({
        trigger: "hover",
      });
      jumpMenu("select.js-jump-menu");
      textFadeAnim(".fade-scroll, .page-banner-inner");
    },
  };
  grafix.init();
})();
