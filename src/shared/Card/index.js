import React from 'react';
import Icons from 'shared/Icons';
import styles from './style.css';

const Card = ({ item }) => {
  return (
    <div className={styles.root}>
      <div className={styles.inner}>

        <div
          className={styles.header}
          key={item.slug}>
          <Icons.Haskell style={{width: '200px', height: '200px'}} />
        </div>
        <div className={styles.copy}>
          <div className={styles.title}>{item.name}</div>
          <div className={styles.desc}>{item.description}</div>
        </div>

        <div className={styles.footer}>
          {item.links.map(link =>
            <div 
              className={styles.icon} 
              key={link.href}>
              <a 
                href={link.href} 
                target="_blank">
                {link.icon}
              </a>
            </div>)}
        </div>

      </div>
    </div>
  );
};

export default Card;
