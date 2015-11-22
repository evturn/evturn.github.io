'use strict';
const Video = require('../lib/video');

module.exports = Backbone.View.extend({
  el: '.page-index',
  initialize() {
    this.render();
  },
  render() {
    const callback = (template) => {
      this.$parent.html(template());
      const $container = $('#preloader');
      const $image = $('.preloader');
      const videoElement = document.getElementById('ev-vid');

      new Video(videoElement);
      $container.delay(500).fadeOut();
      $image.delay(600).fadeOut(600);
    };

    this.load({
      url: this.pages.index,
      callback: callback
    });
  },
});