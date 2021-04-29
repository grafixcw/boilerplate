(function ($) {
  "use strict";

  function initOwlCarousel(elm) {
    // Call the element
    var $elm = $(elm);

    // Debug mode
    var $debug = false;
    var $log = {};

    // Helper functions
    var isDefined = function (val) {
      return typeof val != "undefined";
    };
    var isNumber = function (val) {
      return typeof val === "number";
    };
    var isValidNumber = function (val) {
      return isDefined(val) && isNumber(val);
    };

    // Add classes to element
    $elm.addClass("owl-carousel owl-theme");

    // Options
    var options = {};

    // Attributes
    var items = $elm.data("owl-items");
    var margin = $elm.data("owl-margin");
    var loop = $elm.data("owl-loop");
    var drag = $elm.data("owl-drag");
    var nav = $elm.data("owl-nav");
    var navContainer = $elm.data("owl-pager");
    var dots = $elm.data("owl-dots");
    var dotsContainer = $elm.data("owl-pagination");
    var autoplay = $elm.data("owl-autoplay");
    var mobileItems = $elm.data("owl-sm-items");
    var tabletItems = $elm.data("owl-md-items");
    var desktopItems = $elm.data("owl-lg-items");
    var widescreenItems = $elm.data("owl-xl-items");
    var xlargescreenItems = $elm.data("owl-xxl-items");

    /**
     * items
     *
     * The number of items you want to see on the screen.
     */
    if (isDefined(items)) {
      if (isValidNumber(items)) {
        options.items = items;
        $log.items = items;
        options.slideBy = items;
        $log.slideBy = items;
      }
    } else {
      options.items = 1;
      $log.items = 1;
      options.slideBy = 1;
      $log.slideBy = 1;
    }

    /**
     * margin
     *
     * margin-right(px) on item.
     */
    if (isDefined(margin)) {
      options.margin = margin;
      $log.margin = margin;
    }

    /**
     * loop
     *
     * Infinity loop. Duplicate last and first items to get loop illusion.
     */
    if (isDefined(loop)) {
      options.loop = true;
      $log.loop = true;
    }

    /**
     * drag
     *
     * Mouse drag enabled.
     */
    if (isDefined(drag)) {
      options.mouseDrag = false;
      options.touchDrag = false;
      options.pullDrag = false;
      options.freeDrag = false;
      $log.mouseDrag = false;
      $log.touchDrag = false;
      $log.pullDrag = false;
      $log.freeDrag = false;
    }

    /**
     * nav
     *
     * Show next/prev buttons.
     */
    if (isDefined(nav)) {
      options.nav = true;
      $log.nav = true;
    }

    /**
     * navContainer
     *
     * Set your own container for nav.
     */
    if (isDefined(navContainer)) {
      if (typeof $log.nav === "undefined") {
        options.nav = true;
        $log.nav = true;
      }

      $(navContainer).append('<div class="owl-nav"></div>');

      options.navContainer = navContainer + " .owl-nav";
      $log.navContainer = navContainer;
    }

    /**
     * dots
     *
     * Show dots navigation.
     */
    if (isDefined(dots)) {
      options.dots = true;
      $log.dots = true;
    } else {
      options.dots = false;
      $log.dots = false;
    }

    /**
     * dotsContainer
     *
     * Set your own container for dots.
     */
    if (isDefined(dotsContainer)) {
      if (!$log.dots) {
        options.dots = true;
        $log.dots = true;
      }

      $(dotsContainer)
        .append('<div class="owl-dots"></div>')
        .data("owl-wrapper", $(elm).attr("id"))
        .on("mouseover", function () {
          var wrapper = $("#" + $(this).data("owl-wrapper"));
          var data = wrapper.data("owl.carousel");

          if (data.settings.autoplay) {
            wrapper.trigger("stop.owl.autoplay");
          }
        })
        .on("mouseleave", function () {
          var wrapper = $("#" + $(this).data("owl-wrapper"));
          var data = wrapper.data("owl.carousel");

          if (data.settings.autoplay) {
            wrapper.trigger("play.owl.autoplay", data.settings.autoplayTimeout);
          }
        });

      options.dotsContainer = dotsContainer + " .owl-dots";
      $log.dotsContainer = dotsContainer;
    }

    /**
     * autoplay
     * autoplayTimeout
     * autoplayHoverPause
     *
     * 1. Autoplay.
     * 2. Autoplay interval timeout.
     * 3. Pause on mouse hover.
     */
    if (isDefined(autoplay)) {
      options.autoplay = true;
      $log.autoplay = true;

      if (isNumber(autoplay)) {
        options.autoplayTimeout = autoplay;
        $log.autoplayTimeout = autoplay;
      } else {
        options.autoplayTimeout = 3000;
        $log.autoplayTimeout = 3000;
      }

      options.autoplayHoverPause = true;
      $log.autoplayHoverPause = true;
    }

    /**
     * responsive
     *
     * Object containing responsive options. Can be set to false to remove responsive capabilities.
     */
    if (
      isValidNumber(mobileItems) ||
      isValidNumber(tabletItems) ||
      isValidNumber(desktopItems) ||
      isValidNumber(widescreenItems) ||
      isValidNumber(xlargescreenItems)
    ) {
      var responsiveOptions = {};

      if (isValidNumber(mobileItems)) {
        Object.assign(responsiveOptions, {
          576: {
            items: mobileItems,
            slideBy: mobileItems,
            dotsEach: mobileItems,
          },
        });
      }
      if (isValidNumber(tabletItems)) {
        Object.assign(responsiveOptions, {
          767: {
            items: tabletItems,
            slideBy: tabletItems,
            dotsEach: tabletItems,
          },
        });
      }
      if (isValidNumber(desktopItems)) {
        Object.assign(responsiveOptions, {
          992: {
            items: desktopItems,
            slideBy: desktopItems,
            dotsEach: desktopItems,
          },
        });
      }
      if (isValidNumber(widescreenItems)) {
        Object.assign(responsiveOptions, {
          1200: {
            items: widescreenItems,
            slideBy: widescreenItems,
            dotsEach: widescreenItems,
          },
        });
      }
      if (isValidNumber(xlargescreenItems)) {
        Object.assign(responsiveOptions, {
          1440: {
            items: xlargescreenItems,
            slideBy: xlargescreenItems,
            dotsEach: xlargescreenItems,
            responsiveBaseElement: $($elm),
          },
        });
      }

      options.responsive = responsiveOptions;
      $log.responsive = responsiveOptions;
    }

    if ($debug) {
      $log.elmID = elm;
      console.log($log);
    }

    // Call the plugin
    return $elm.owlCarousel(options);
  }

  $("[data-toggle=owl]").each(function () {
    var elmID = "#" + $(this).attr("id");
    initOwlCarousel(elmID);
  });
})(jQuery);
