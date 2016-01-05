import {Spinner} from 'components/spinner';
import {default as Footer} from 'components/footer';
import {default as Header} from 'components/header';
import 'sources/google-analytics';
import 'styles/style.less';


export const App = React.createClass({
  getInitialState() {
    return {
      page: 'home',
      spinning: true
    };
  },
  componentWillReceiveProps(nextProps) {
    const route = nextProps.routes[1].name;

    if (this.state.page !== route) {
      this.setState({ page: route });
    }
  },
  componentDidMount() {
    this.renderFallback();
    this.setState({ page: this.props.routes[1].name });
  },
  render() {
    const isHome = this.state.page === 'home';
    const child = isHome ? this.renderChild() : this.props.children;
    const spinner = isHome ? <Spinner spinning={this.state.spinning} /> : null;
    const header = !this.state.spinning ? <Header {...this.props} {...this.state} /> : null;

    return (
      <div>
        {spinner}
        {header}
        {child}
        <Footer {...this.props} {...this.state} />
      </div>
    );
  },
  renderChild() {
    const [component] = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, { onInitialLoad: this.onInitialLoad });
    });

    return component;
  },
  onInitialLoad(loadState) {
    this.setState({ spinning: !loadState });
  },
  renderFallback() {
    setTimeout(() => {
      if (this.state.spinning) {
        this.setState({ spinning: false });
      }
    }, 5000);
  }
});