$(document).ready(function(){
  $('i.icon').click(function(){
    $('.nav-list').slideToggle()
  });


});
$(function(){
  $("#retour").click(function(){
    $("html,body").animate({scrollTop:0 },"slow");
  });
});
