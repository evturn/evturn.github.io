import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/nav.less';

const cx = classNames.bind(styles);

export default ({ open, toggle }) => {
  return (
    <div
      className={cx({'overlay': open})}
      onClick={() => toggle()}
    />
  );
}