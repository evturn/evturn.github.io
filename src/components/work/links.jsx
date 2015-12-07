'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';

const ProjectLink = React.createClass({
  render() {
    const { url, icon } = this.props.link;

    return (
      <li className="project-links__item list-item-icon">
        <div className="list-item-icon__icon">
          <a href={ url } target="_blank">
            <span className={ `icon fa  ${icon} `}></span>
          </a>
        </div>
      </li>
    );
  }
});

export const ProjectLinks = React.createClass({
  render() {
    console.log('LINKS', this.props);
    const links = this.props.links;

    return (
      <div className="project-links project-info">
        <ul className="project-links__list list-icons">
          {
            links.map((result) => {
              console.log('LINK', result);
              return (
                <ProjectLink key={ result.url } link={ result } />
              );
            })
          }
        </ul>
      </div>
    );
  }
});