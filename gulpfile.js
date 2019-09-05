"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");
var rename = require("gulp-rename");

gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
  .pipe(gulp.dest("build"));
});

gulp.task("fonts_woff", function () {
  return gulp.src("source/fonts/*.woff")
  .pipe(gulp.dest("build/fonts"));
});

gulp.task("fonts_woff2", function () {
  return gulp.src("source/fonts/*.woff2")
  .pipe(gulp.dest("build/fonts"));
});

gulp.task("svg", function () {
  return gulp.src("source/img/*.svg")
  .pipe(gulp.dest("build/img"));
});

gulp.task("img", function () {
  return gulp.src("source/img/*.jpg")
  .pipe(gulp.dest("build/img"));
});

gulp.task("js", function () {
  return gulp.src("source/js/*.js")
  .pipe(gulp.dest("build/js"));
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css", "build"));
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("start", gulp.series("server"));
gulp.task("build", gulp.series("css", "html", "fonts_woff", "fonts_woff2", "svg", "img", "js"));
