webpackHotUpdate(0,{

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(110), RootInstanceProvider = __webpack_require__(118), ReactMount = __webpack_require__(120), React = __webpack_require__(172); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(172);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(276);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouter = __webpack_require__(277);
	
	var _history = __webpack_require__(331);
	
	var _App = __webpack_require__(330);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _Home = __webpack_require__(336);
	
	var _Home2 = _interopRequireDefault(_Home);
	
	var _About = __webpack_require__(344);
	
	var _About2 = _interopRequireDefault(_About);
	
	var _Contact = __webpack_require__(352);
	
	var _Contact2 = _interopRequireDefault(_Contact);
	
	var _Work = __webpack_require__(355);
	
	var _Work2 = _interopRequireDefault(_Work);
	
	var _Project = __webpack_require__(360);
	
	var _Project2 = _interopRequireDefault(_Project);
	
	var _Header = __webpack_require__(362);
	
	var _Footer = __webpack_require__(364);
	
	var _helpers = __webpack_require__(349);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(365);
	__webpack_require__(369);
	
	exports.default = _react2.default.createClass({
	  displayName: 'app',
	
	  contextTypes: {
	    router: _react2.default.PropTypes.func
	  },
	  getInitialState: function getInitialState() {
	    var route = _helpers.URL.route();
	    var page = _helpers.URL.page();
	    var child = _helpers.URL.child();
	    var projectId = _helpers.URL.params();
	
	    return {
	      route: route,
	      page: page,
	      child: child,
	      projectId: projectId
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    var _this = this;
	
	    window.addEventListener('hashchange', function () {
	      var route = _helpers.URL.route();
	      var page = _helpers.URL.page();
	      var child = _helpers.URL.child();
	      var projectId = _helpers.URL.params();
	
	      return _this.setState({
	        route: route,
	        page: page,
	        child: child,
	        projectId: projectId
	      });
	    });
	  },
	  render: function render() {
	    (0, _helpers.updateLayout)(this.props.location);
	
	    console.log(_helpers.URL.route);
	    return _react2.default.createElement(
	      'div',
	      { className: 'site-container' },
	      _react2.default.createElement(_Header.Header, null),
	      _react2.default.createElement(
	        'div',
	        { className: 'site-content' },
	        this.props.children
	      ),
	      _react2.default.createElement(_Footer.Footer, null)
	    );
	  }
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(327); if (makeExportsHot(module, __webpack_require__(172))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "app.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)(module)))

/***/ }

})
//# sourceMappingURL=0.090d785bc70e1f5d041b.hot-update.js.map