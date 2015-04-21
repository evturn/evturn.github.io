var Router = Backbone.Router.extend({
	routes: {
		'' 			: 'home',
		'about' : 'about'
	},
	home: function() {
		$('.about').hide();
		var home = new Home();
		$('.home').show();
	},
	about: function() {
		$('.home').hide();
		var about = new About();
		$('.about').show();
	}
});