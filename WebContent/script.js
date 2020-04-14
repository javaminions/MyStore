$(document).ready(function() {
	
					$("#externalPlaceholder").load("Carousel.html");

					$("#Orders").click(function() {
						$("#externalPlaceholder").load("Orders.html");
					});

					$("#WishList").click(function() {
						$("#externalPlaceholder").load("WishList.html");
					});

					$("#Profile").click(function() {
						$("#externalPlaceholder").load("Profile.html");
					});
					
					$(".Cart-btn").click(function() {
						$("#externalPlaceholder").load("Cart.html");
					});

					$("#Logout").click(function() {
						$("#externalPlaceholder").html("<h2 style=\"margin: auto; width: 60%;\"><br><br>You have been logged out successfully.<br><br>Thank you and enjoy your day</h2>");
					});
					
					$('#ContactUs').click(function() {
						$("#externalPlaceholder").load("ContactUs.html");
					});
					
					$('#AboutUs').click(function() {
						$("#externalPlaceholder").load("AboutUs.html");
					});

					$("#Payments").click(function() {
						$("#externalPlaceholder").load("Payments.html");
					});
					
					$("#Return").click(function() {
						$("#externalPlaceholder").load("Return.html");
					});
					
					$("#FAQ").click(function() {
						$("#externalPlaceholder").load("FAQ.html");
						
					});

					$("#Testimonials").click(function() {
						$("#externalPlaceholder").load("Testimonials.html");
					});
					
					$("#Press").click(function() {
						$("#externalPlaceholder").html("<img width=\"50%\" src=\"images/breaking-news.png\">");
					});
					
					$(".dropdown").hover(function() {
						$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("400");
						$(this).toggleClass('open');
						},function() {
							$('.dropdown-menu', this).not(
										'.in .dropdown-menu').stop(true, true)
										.slideUp("400");
								$(this).toggleClass('open');
							});
					

				});
