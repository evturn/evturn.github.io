'use strict';
import React from 'react';
import {IndexLink, Link} from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './menu.pre';

const Menu = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getDefaultProps() {
    return {
      pages: [
        {name: 'Home',    route: '/'      , id: 1},
        {name: 'Work',    route: 'work'   , id: 2},
        {name: 'About',   route: 'about'  , id: 3},
        {name: 'Contact', route: 'contact', id: 4}
      ]
    };
  },
  getInitialState() {
    return {
      open: this.props.initialOpen
    };
  },
  handleClick() {
    const newState = !this.state.open;

    this.setState({ open: newState });
    this.props.callbackParent(newState);
  },
  componentWillReceiveProps(newProps) {
    if (this.state.open !== newProps.open) {
      return this.setState({
        open: newProps.open
      });
    }
  },
  setPageLinks(page) {
    const {route, name, id} = page;

    return id === 1 ? <IndexLink to={route}>{name}</IndexLink> : <Link to={route}>{name}</Link>;
  },
  render() {
    const {pages} = this.props;
    const {open} = this.state;
    const openClass = open ? 'open' : '';

    return (
      <div styleName={openClass}>
        <nav styleName='root'>
          <div styleName='header'>
            <div styleName='close' onClick={this.handleClick}>
              <span styleName='icon' className='fa fa-times'></span>
            </div>
          </div>
          <ul styleName='list'>
            {pages.map((page, i) => {
              return (
                <li key={i} styleName='item' onClick={this.handleClick}>
                  {this.setPageLinks(page)}
                </li>
                );
            })}
          </ul>
        </nav>
      </div>
    );
  }
});

export default CSSModules(Menu, styles);