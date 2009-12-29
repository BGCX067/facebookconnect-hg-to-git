objx.requires("objx.Class", "IOFacebook");

var IOFacebook = objx.Class({	
		
	connect: function() {

		this.api = new FB.ApiClient('bd01bb1d684f890b03a3ab7a1dfdbabb', '/connect/xd_receiver', null); 
		this.api.users_getInfo([this.api.get_session().uid],["uid", "first_name", "last_name", "email_hashes", "pic_square"], objx.bind(this.user, this));
		
	},
	
	user: function( response ) {

		IOEgg.facebook = response[0];
		
		this.loginEl = $(".header-login");
		
		var el = $("<ul/>")
							.addClass("login-details")
							.append(
								$("<li/>")
									.text("Hello "+IOEgg.facebook.first_name),
								$("<li/>")
									.append(
										$("<img/>")
											.attr("src", IOEgg.facebook.pic_square)
											.attr("alt", IOEgg.facebook.first_name)
									)
							);
							
		this.loginEl.empty().append(el);
		
	}
	
});

// default instance
var IOFacebookControl = new IOFacebook();

objx.provides("IOFacebook");
