module.exports = {
  archive: {
    input: "dist/**",
    output: "build/"
  },
  clean: ["dist/"],
  images: {
    input: "src/images/*",
    output: "dist/images",
    watch: "src/images/*"
  },
  scripts: {
    copy: "node_modules/jquery/dist/jquery.min.js",
    input: [
      "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
      "src/vendor/bootnavbar/js/bootnavbar.js",
      "node_modules/owl.carousel/dist/owl.carousel.min.js",
      "src/vendor/owl-carousel/owl-carousel-init.js",
      "node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js",
      "src/vendor/fancybox/fancybox-init.js",
      "src/scripts/app.js"
    ],
    output: "dist/js",
    watch: "src/scripts/**/*.js"
  },
  server: {
    root: "dist/"
  },
  sprites: {
    input: "src/sprites/images/*.png",
    output: "src/images/"
  },
  styles: {
    input: "src/styles/*.scss",
    output: "dist/css",
    watch: "src/styles/**/*.scss"
  },
  templates: {
    input: "src/templates/*.twig",
    output: "dist/",
    watch: ["src/templates/**/*.twig", "website.json"]
  }
};
