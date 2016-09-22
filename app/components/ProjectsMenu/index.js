import React from 'react'
import A from 'components/A'
import css from './style.css'

export default ({ items }) => (
  <div className={css.nav}>
    <div className={css.sections}>
      <ul className={css.ul}>
        {items.map(x =>
          <li key={x.title} className={css.li}>
            <A
              pathname={x.route}
              activeClassName={css.active}>
              <span className={x.icon} />
              <div className={css.name}>{x.title}</div>
            </A>
          </li>
        )}
      </ul>
    </div>
  </div>
)
