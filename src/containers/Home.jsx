import AltContainer from 'alt-container';
import React from 'react';
import Video from 'components/Video';
import VideoActions from 'actions/VideoActions';
import VideoStore from 'stores/VideoStore';
import __videos from 'sources/videos';
import classNames from 'classnames/bind';
import styles from 'styles/containers/home.less';

const cx = classNames.bind(styles);

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.videos = __videos;
    this.title = 'Evan Turner';
    this.description = 'Web Developer';
  }
  render() {
    return (
      <div className={cx('home')}>
        <AltContainer stores={[VideoStore]}>
          <Video videos={this.videos}/>
        </AltContainer>
        <div className={cx('home-banner')}>
          <h3 className={cx('home-title')}>{this.title}</h3>
          <h3 className={cx('home-description')}>{this.description}</h3>
        </div>
      </div>
    );
  }
}
