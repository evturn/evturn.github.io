import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { setProject } from '../actions/project';
import classNames from 'classnames/bind';
import styles from '../../client/less/containers/work.less';
import ProjectNavigation from '../components/ProjectNavigation';
import Carousel from '../components/Carousel';
import TechIcons from '../components/TechIcons';
import WorkWeb from '../components/WorkWeb';
import {
  SiteImage, Icon, UnorderedList, ListItem } from '../components/reuseables';

const cx = classNames.bind(styles);

class Work extends Component {
  constructor(props) {
    super(props);

    this.header = [
      {
        title: 'Web',
        route: 'work/web',
        icon: 'fa fa-laptop'
      },{
        title: 'iOS',
        route: 'work/ios',
        icon: 'fa fa-mobile'
      },{
        title: 'Open Source',
        route: 'work/oss',
        icon: 'fa fa-terminal'
      }
    ];
  }
  componentWillMount() {
    setProject(this.props.params.id);
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.params.id);
    console.log(this.props.params.id);
    if (this.props.params.id !== nextProps.params.id) {
      setProject(nextProps.params.id);
    }
  }
  render() {
    if (!this.props.mounted) { return <div />; }

    return (
      <div className={cx('page')}>
        <div className={cx('page-header')}>
          <SiteImage className={cx('image')} src='title-white.svg' />

        </div>
        <UnorderedList className={cx('categories')}>
          {this.header.map((item, i) => {
            return (
              <ListItem key={i} className={cx('item')}>
                <Link to={item.route} >
                  <Icon className={item.icon} />
                  <div className={cx('title')}>{item.title}</div>
                </Link>
              </ListItem>
            );
          })}
        </UnorderedList>

        {this.props.children}
      </div>
    );
  }
}

Work.propTypes = {
  slides: PropTypes.array,
  tech: PropTypes.array,
  name: PropTypes.string,
  description: PropTypes.string,
  links: PropTypes.array,
  id: PropTypes.number,
  thumbnails: PropTypes.array,
  mounted: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    slides: state.work.project.slides,
    tech: state.work.project.tech,
    name: state.work.project.name,
    description: state.work.project.description,
    id: state.work.project.id,
    links: state.work.project.links,
    thumbnails: state.work.projectsNav,
    mounted: state.work.mounted
  }
}

export default connect(mapStateToProps)(Work);