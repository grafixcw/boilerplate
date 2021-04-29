jQuery(document).ready(function () {
  if ($("[data-fancybox]").length > 0) {
    // Lightbox for Image
    $('[data-fancybox="images"]').fancybox({
      buttons: ["close"],
      protect: true,
      animationEffect: "zoom-in-out",
      transitionEffect: "circular",
      hash: false,
    });

    // Lightbox for Video
    $('[data-fancybox="video"]').fancybox({
      buttons: ["close"],
      youtube: {
        controls: 0,
        showinfo: 0,
      },
      hash: false,
    });

    // Lightbox for Iframe
    $('[data-fancybox="iframe"]').fancybox({
      type: "iframe",
      toolbar: false,
      smallBtn: true,
      iframe: {
        preload: false,
      },
      hash: false,
    });
  }
});
