'use strict';
import React from 'react';

export const ProjectTech = React.createClass({
  render() {
    return (
      <div className="project-tech project-info">
        <div className="project-tech__header project-info__header">Made with</div>
        <ul className="project-tech__list list-icons">
          {
            this.props.tech.map((result) => {
              return (
                <li key={ result.id } className="project-tech__item list-item-icon">
                  <div className="project-tech__item-icon list-item-icon__icon"><span className={ `icon ${result.icon}` }></span></div>
                  <div className="project-tech__item-name list-item-icon__caption">{ result.name }</div>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
});