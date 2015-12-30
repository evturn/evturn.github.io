import {IndexLink, Link} from 'react-router';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getDefaultProps() {
    return {
      pages: [
        {name: 'Home',    route: '/'      , id: 1},
        {name: 'Work',    route: 'work'   , id: 2},
        {name: 'About',   route: 'about'  , id: 3},
        {name: 'Contact', route: 'contact', id: 4}
      ]
    };
  },
  getInitialState() {
    return {
      open: this.props.initialOpen
    };
  },
  handleClick() {
    const newOpenState = {
      open: !this.state.open
    };

    this.setState(newOpenState);
    this.props.callbackParent(newOpenState);
  },
  componentWillReceiveProps(newProps) {
    if (this.state.open !== newProps.open) {
      return this.setState({
        open: newProps.open
      });
    }
  },
  setPageLinks(page) {
    const {route, name, id} = page;

    return id === 1 ? <IndexLink to={route}>{name}</IndexLink> : <Link to={route}>{name}</Link>;
  },
  render() {
    const {pages} = this.props;
    const {open} = this.state;
    const openClass = open ? 'open' : '';

    return (
      <div className={openClass}>
        <nav className='menu'>
          <div className='menu-header'>
            <div className='menu-icon' onClick={this.handleClick}>
              <span className='fa fa-times'></span>
            </div>
          </div>
          <ul className='flex'>
            {pages.map((page, i) => {
              return (
                <li key={i} className='menu-item' onClick={this.handleClick}>
                  {this.setPageLinks(page)}
                </li>
                );
            })}
          </ul>
        </nav>
      </div>
    );
  }
});