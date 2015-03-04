var AppView = Backbone.View.extend({
	el: '.container',
	bioTemplate: _.template($('#bio-template').html()),
	initialize: function() {
		projectsCollection = new ProjectsCollection(projects);
		portfolioView  = new PortfolioView({collection: projectsCollection});
		stackCollection = new StackCollection(technologies);
		linksCollection = new LinksCollection(links);
		this.setMain();
	},
	events: {
		'click #footnote': 'toggleFact'
	},
	setMain: function() {
		this.setBio();
		this.setStacks();
		this.setLinks();
		
		$('.footnote').hide();
	},
	setBio: function() {
		bioCopy = new Copy(copy);
		$('#bio').html(this.bioTemplate(bioCopy.toJSON()));
	},
	setWork: function() {
		workModel = new Work(myWork);
		var view = new WorkView({model: workModel})
		$('#work').append(view.el);
	},
	addStack: function(model) {
		var view = new FullStackView({model: model});
		$('#technologies-list').append(view.el)
	},
	setStacks: function() {
		stackCollection.each(function(model) {
			this.addStack(model);
		}.bind(this));
	},
	addLink: function(model) {
		var view = new LinkView({model: model});
		$('#link-list').append(view.el)
	},
	setLinks: function() {
		linksCollection.each(function(model) {
			this.addLink(model);
		}.bind(this));
	},
	toggleFact: function(e) {
		e.preventDefault();
		console.log('Evan actually did invent the internet');
		$('.footnote').toggle();
	},
});
