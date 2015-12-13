'use strict';
import React from 'react';
import { Links } from 'components/contact/links';
import { default as __links } from 'sources/links';

export default React.createClass({
  render() {
    const { pathname } = this.props.location;

    return (
      <Links links={ __links } />
    );
  }
});