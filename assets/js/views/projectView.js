var ProjectView = Backbone.View.extend({
	projectTemplate: _.template($('#project-template').html()),
	initialize: function() {
		this.render();
	},
	events: {},
	render: function() {
		this.$el.append(this.projectTemplate(this.model.toJSON()));
		return this;
	},
});