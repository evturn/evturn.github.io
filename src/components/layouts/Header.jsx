'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import $ from 'jquery';
import { IndexLink, Link, History } from 'react-router';

const Nav = React.createClass({
  mixins: [ History ],
  render() {
    return (
      <nav className="site-menu">
        <div className="site-menu__header">
          <div className="site-menu__close"><span className="icon fa fa-times"></span></div>
        </div>
        <ul className="site-menu__list">
          <li className="site-menu__item"><h4><IndexLink to="/" className="nav-link">Home</IndexLink></h4></li>
          <li className="site-menu__item"><h4><Link to="/work" hash="#work" className="nav-link">Work</Link></h4></li>
          <li className="site-menu__item"><h4><Link to="/about" hash="#about" className="nav-link">About</Link></h4></li>
          <li className="site-menu__item"><h4><Link to="/contact" hash="#contact" className="nav-link">Contact</Link></h4></li>
        </ul>
      </nav>
    );
  }
});

export const Header = React.createClass({
  init() {
    this.$body = $('body');
    this.$siteHeader = $('.site-header');
    this.$navTrigger = $('.site-nav__trigger');
    this.$navOverlay = $('.nav-overlay');
    this.$menuClose = $('.site-menu__close, .site-menu__item a');
    this.$menu = $('.site-menu');

    this.$navTrigger.on('click', () => this.setNavOpen());
    this.$menuClose.on('click', () => this.setNavClosed());
    this.$navOverlay.on('click', () => this.setNavClosed());
  },
  setNavOpen() {
    this.$menu.addClass('open');
    this.$body.addClass('nav-is-opened');
  },
  setNavClosed() {
    this.$menu.removeClass('open');
    this.$body.removeClass('nav-is-opened');
  },
  componentDidMount() {
    this.init();
  },
  render() {
    return (
      <div>
        <div className="nav-overlay"></div>
        <header id="site-header" className="site-header">
          <div>
            <div className="site-logo">
              <img className="site-logo__image img-scale" src="../images/site/ev-av.png" />
            </div>
            <div className="site-nav site-nav__trigger">
              <span className="icon fa fa-bars"></span>
            </div>
            <Nav />
          </div>
        </header>
      </div>
    );
  }
});