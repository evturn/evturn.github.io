'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { Link } from 'react-router';


export const Projects = React.createClass({
  handleClick() {
    const $webpage = $('html, body');
    const $siteImage = $('.site-logo__image');

    $webpage.animate({ scrollTop: 0 }, 500);
    $siteImage.addClass('spin');
    setTimeout(() => $siteImage.removeClass('spin'), 740);
  },
  render() {
    const projects = this.props.projects;
    this.handleClick();
    return (
      <div>
        <div className="thumbnail__header">Projects</div>
        <ul className="thumbnails">
          {
            projects.map((result) => {
              return (
                <li key={ result.id } className="thumbnail-item">
                  <Link to={`work/projects/${ result.id }`} hash="#work/projects:id">
                    <div className="image-container">
                      <img className="img-scale" src={ result.thumbnail } />
                      <div className="shadow"></div>
                    </div>
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
});