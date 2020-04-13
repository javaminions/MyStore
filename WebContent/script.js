$(document).ready(function() {

					$("#Orders").click(function() {
						$("#externalPlaceholder").load("Orders.html");
					});

					$("#WishList").click(function() {
						$("#externalPlaceholder").load("WishList.html");
					});

					$("#Profile").click(function() {
						$("#externalPlaceholder").load("Profile.html");
					});
					
					$("#Cart").click(function() {
						$("#externalPlaceholder").load("Cart.html");
					});

					$("#Logout").click(function() {
						$("#externalPlaceholder").html("<h2 style=\"margin: auto; width: 60%;\"><br><br>You have been logged out successfully.<br><br>Thank you and enjoy your day</h2>");
					});
					
					$('#ContactUs').click(function() {
						$("#externalPlaceholder").load("ContactUs.html");
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
