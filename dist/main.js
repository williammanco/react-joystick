'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _nipplejs = require('nipplejs');

var _nipplejs2 = _interopRequireDefault(_nipplejs);

var _config = require('../shared/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var rootEl = document.querySelector(_config.APP_CONTAINER_SELECTOR);

var Joystick = function (_Component) {
  _inherits(Joystick, _Component);

  function Joystick() {
    _classCallCheck(this, Joystick);

    return _possibleConstructorReturn(this, (Joystick.__proto__ || Object.getPrototypeOf(Joystick)).apply(this, arguments));
  }

  _createClass(Joystick, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        start: {},
        end: {},
        move: {},
        pressure: {}
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.options = this.props.options;
      this.options.zone = document.querySelector('.react-joystick');
      this.joystick = _nipplejs2.default.create(this.props.options);
      this.joystick.on('start', function (evt, data) {
        _this2.setState({
          start: data
        });
      }).on('end', function (evt, data) {
        _this2.setState({
          end: data
        });
      }).on('move', function (evt, data) {
        _this2.setState({
          move: data
        });
      }).on('pressure', function (evt, data) {
        _this2.setState({
          pressure: data
        });
      });
    }
  }, {
    key: 'getRenderDebug',
    value: function getRenderDebug() {
      this.renderDebug = false;
      if (this.props.debug) {
        window.console.log(this.state);
      }
      return this.renderDebug;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { className: 'react-joystick' }),
        this.getRenderDebug()
      );
    }
  }]);

  return Joystick;
}(_react.Component);

exports.default = Joystick;


Joystick.defaultProps = {
  options: {
    zone: '',
    size: 100,
    threshold: 0.1,
    color: 'gray',
    fadeTime: 250,
    dataOnly: false,
    restOpacity: 0.5,
    multitouch: true,
    maxNumberOfNipples: 1,
    position: {
      left: '50%',
      top: '50%'
    },
    mode: 'static',
    catchDistance: 1.0
  },
  debug: false
};

_reactDom2.default.render(_react2.default.createElement(Joystick, null), rootEl);

