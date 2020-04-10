$(document).ready(function(){

  $("#Orders").click(function(){
    $("#externalPlaceholder").load("Orders.html");
  });
  
  $("#WishList").click(function(){
    $("#externalPlaceholder").load("WishList.html");
  });

});
