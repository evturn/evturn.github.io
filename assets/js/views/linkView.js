var LinkView = Backbone.View.extend({
	tagName: 'span',
	linksTemplate: _.template($('#links-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.prepend(this.linksTemplate(this.model.toJSON()));
		return this;
	},
});