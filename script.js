$(document).ready(function () {
  console.log("yes working");
  $(".menu-img").click(function () {
    $("header").hide();
    $("main").hide();
    $(".tweet").hide();
    $(".menu-small").css("display", "flex");
    $("body").css("height", "80vh");
  });

  $(".cross").click(function () {
    $("header").show();
    $("main").show();
    $(".tweet").show();
    $(".menu-small").hide();
  });
});
