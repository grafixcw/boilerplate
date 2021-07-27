(function () {
  var grafix = {
    initTooltip: (elm) => {
      const tooltipTriggerList = [].slice.call(document.querySelectorAll(elm));
      const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });
    },
    init: function () {
      setBackgroundColor("[data-bg-color]");
      setBackgroundImage("[data-bg-image]");
      initBootNavbar();
      togggleDropdownAttr();
      jumpMenu("select.js-jump-menu");
      textFadeAnim(".fade-scroll, .page-banner-inner");
      this.initTooltip();
    },
  };
  grafix.init();
})();
