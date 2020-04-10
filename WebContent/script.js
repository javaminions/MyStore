$(document).ready(function(){

  $("#Orders").click(function(){
    $("#externalPlaceholder").load("Orders.html");
  });
  
  $("#WishList").click(function(){
    $("#externalPlaceholder").load("WishList.html");
  });

  $(".dropdown").hover(            
	        function() {
	            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
	            $(this).toggleClass('open');        
	        },
	        function() {
	            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
	            $(this).toggleClass('open');       
	        }
	    );
  
});
