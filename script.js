var bar = $("#bar")[0];
var title = $("#title")[0];
var offset = bar.offsetTop;

$(document).ready(function() {
  $(window).scroll(function() {
    if (window.scrollY > offset) {
      bar.style.top="0";
      bar.style.position="fixed";
      bar.style.width="100%";
    }
    else {
      bar.style.top=offset.toString();
      bar.style.position="static";
    }
  });
});
