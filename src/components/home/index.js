'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import {default as __videos} from 'sources/videos';
import {default as Video} from './video';

import styles from './home.pre';

const Home = React.createClass({
  getDefaultProps() {
    return {
      title: 'Evan Turner',
      description: 'Web Developer',
      video: __videos
    };
  },
  render() {
    const {
      title,
      description,
      videos
    } = this.props;

    return (
      <div>
        <Video playlist={__videos} />
        <div styleName='root'>
          <h3 styleName='name'>{title}</h3>
          <h3 styleName='desc'>{description}</h3>
        </div>
      </div>
    );
  }
});

export default CSSModules(Home, styles);