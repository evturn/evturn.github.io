'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, History } from 'react-router';
import { history } from 'history';
import { default as App } from 'App';
import { default as Home } from 'Home';
import { default as About } from 'About';
import { default as Contact } from 'Contact';
import { default as Work } from 'Work';
import { default as Project } from 'Project';
import { Header } from 'components/layouts/Header';
import { Footer } from 'components/layouts/Footer';
import { Spinner } from 'components/home/spinner';
import { URL, updateLayout } from 'helpers';

require('normalize.css');
require('styles/style.less');

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState() {
    return {
      route: URL.route(),
      page: URL.page(),
      child: URL.child(),
      projectId: URL.params()
    };
  },
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      return this.setState({
        route: URL.route(),
        page: URL.page(),
        child: URL.child(),
        projectId: URL.params()
      });
    });
  },
  render() {
    updateLayout(this.props.location);
    console.log(this);

    return (
      <div className="site-container">
        <Spinner key={ 'spinner' } />
        <Header />
        <div className="site-content">
          { this.props.children }
        </div>
        <Footer />
      </div>
    );
  }
});