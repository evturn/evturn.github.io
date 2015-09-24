'use strict';

EVTURN.Router = Backbone.Router.extend({

  wrapper: null,
  indexView: null,
  workView: null,
  aboutView: null,
  contactView: null,
  routes: {
    '': 'index',
    'work/*': 'project',
    'work/:id': 'project',
    'about': 'about',
    'contact': 'contact'
  },
  initialize: function initialize() {
    this.wrapper = new EVTURN.Rza();
  },
  index: function index() {
    EVTURN.changeState('index');

    if (this.indexView === null) {
      this.indexView = new EVTURN.IndexView();
    }

    this.wrapper.child = this.indexView;
    this.wrapper.render();
  },
  work: function work(model) {
    EVTURN.changeState('work');

    if (this.workView === null) {
      this.workView = new EVTURN.Work({ model: model });
      this.wrapper.child = this.workView;
    } else {
      var view = new EVTURN.Work({ model: model });
      this.wrapper.child = view;
    }

    this.wrapper.render();
  },
  about: function about() {
    EVTURN.changeState('about');

    if (this.aboutView === null) {
      this.aboutView = new EVTURN.AboutView();
    }

    this.wrapper.child = this.aboutView;
    this.wrapper.render();
  },
  contact: function contact() {
    EVTURN.changeState('contact');

    if (this.contactView === null) {
      this.contactView = new EVTURN.ContactView();
    }

    this.wrapper.child = this.contactView;
    this.wrapper.render();
  },
  project: function project(id) {
    var collection = EVTURN.get('apps'),
        model = collection.get(id) || collection.get(1);

    this.work(model);
  }
});

EVTURN.init();