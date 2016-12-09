import React from 'react'
import css from './style.css'

export const ProjectCard = ({ thumbnail, shortDescription, name }) => {
  return (
    <div className={css.root}>
      <div className={css.card}>
        <div
          className={css.art}
          style={{backgroundImage: `url(${thumbnail})`}} />
        <div className={css.copy}>
          <div className={css.name}>{name}</div>
          <div className={css.border} />
          <div className={css.desc}>{shortDescription}</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
