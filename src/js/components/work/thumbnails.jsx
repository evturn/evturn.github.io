'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';
import { Link } from 'react-router';

export const Thumbnails = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render() {
    return (
      <div>
        <div className="thumbnail__header">Projects</div>
        <ul className="thumbnails">
          {
            this.props.projects.map((result) => {
              return (
                <li key={ result.id } className="thumbnail-item" >
                  <Link to={`work/projects/${ result.id }`}>
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