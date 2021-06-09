module.exports = {
  archive: {
    input: "dist/**",
    output: "build/",
  },
  clean: ["dist/"],
  fonts: {
    input: "node_modules/bootstrap-icons/font/fonts/bootstrap-icons.{eot,svg,ttf,woff,woff2}",
    output: "dist/css/fonts/",
  },
  images: {
    input: "src/images/**/*",
    output: "dist/images",
    watch: "src/images/**/*",
  },
  scripts: {
    copy: "node_modules/jquery/dist/jquery.min.js",
    input: [
      "src/vendor/polyfills/object.assign.js",
      "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
      "src/vendor/bootnavbar/js/bootnavbar.js",
      "node_modules/owl.carousel/dist/owl.carousel.min.js",
      "src/vendor/owl-carousel/owl-carousel-init.js",
      "node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js",
      "src/vendor/fancybox/fancybox-init.js",
      "src/vendor/helpers/js/back-to-top.js",
      "src/scripts/app.js",
    ],
    output: "dist/js",
    watch: "src/scripts/**/*.js",
  },
  server: {
    root: "dist/",
  },
  sprites: {
    input: "src/sprites/images/*.png",
    output: "src/images/",
  },
  styles: {
    input: "src/styles/*.scss",
    output: "dist/css",
    watch: ["src/styles/**/*.scss", "src/vendor/**/*.scss"],
  },
  templates: {
    data: "src/data/content.json",
    input: "src/templates/*.twig",
    output: "dist/",
    watch: "src/templates/**/*.twig",
  },
};
