const gulp = require("gulp");
const { series } = require("gulp");
const php = require("gulp-connect-php");
const browserSync = require("browser-sync").create();

function phpInit(cb) {
  php.server({
    base: "./www",
    port: 8000,
    keepalive: true,
    router: "./www/kirby/router.php",
  });
  cb();
}

function browserSyncInit(cb) {
  browserSync.init({
    proxy: "127.0.0.1:8000",
    baseDir: "./www",
    files: ["assets/css/*.css", "assets/js/*.js", "site/**/*.php"],
    open: true,
    router: "./www/kirby/router.php",
    notify: true,
    debug: true,
  });
  cb();
}

function lifereload() {
  gulp.watch("./www/site/**/*").on("change", browserSync.reload);
  gulp.watch("./www/assets/**/*").on("change", browserSync.reload);
}

exports.default = series(phpInit, browserSyncInit, lifereload);
exports.cacheBust = [];
