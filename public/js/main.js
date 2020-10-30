var path = window.location.pathname;
var base = path.replace(/\.[^/.]+$/, "").split('/');
var active = '.' + base[base.length-1];
$(document).ready(function(){
  $('.navbar').load("/html/navbar.html", function(){
    if(active !== '.'){
      $(active).addClass('active');
    }
  });
});
