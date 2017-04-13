'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioGroup = exports.Radio = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Radio = exports.Radio = function (_React$Component) {
  (0, _inherits3.default)(Radio, _React$Component);

  function Radio() {
    (0, _classCallCheck3.default)(this, Radio);
    return (0, _possibleConstructorReturn3.default)(this, (Radio.__proto__ || (0, _getPrototypeOf2.default)(Radio)).apply(this, arguments));
  }

  (0, _createClass3.default)(Radio, [{
    key: 'render',
    value: function render() {
      var _context$radioGroup = this.context.radioGroup,
          name = _context$radioGroup.name,
          selectedValue = _context$radioGroup.selectedValue,
          onChange = _context$radioGroup.onChange;

      var optional = {};
      if (selectedValue !== undefined) {
        optional.checked = this.props.value === selectedValue;
      }
      if (typeof onChange === 'function') {
        optional.onChange = onChange.bind(null, this.props.value);
      }

      return _react2.default.createElement('input', (0, _extends3.default)({}, this.props, {
        type: 'radio',
        name: name
      }, optional));
    }
  }]);
  return Radio;
}(_react2.default.Component);

Radio.displayName = 'Radio';
Radio.contextTypes = {
  radioGroup: _propTypes2.default.object
};

var RadioGroup = exports.RadioGroup = function (_React$Component2) {
  (0, _inherits3.default)(RadioGroup, _React$Component2);

  function RadioGroup() {
    (0, _classCallCheck3.default)(this, RadioGroup);
    return (0, _possibleConstructorReturn3.default)(this, (RadioGroup.__proto__ || (0, _getPrototypeOf2.default)(RadioGroup)).apply(this, arguments));
  }

  (0, _createClass3.default)(RadioGroup, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _props = this.props,
          name = _props.name,
          selectedValue = _props.selectedValue,
          onChange = _props.onChange;

      return {
        radioGroup: {
          name: name, selectedValue: selectedValue, onChange: onChange
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          Component = _props2.Component,
          name = _props2.name,
          selectedValue = _props2.selectedValue,
          onChange = _props2.onChange,
          children = _props2.children,
          rest = (0, _objectWithoutProperties3.default)(_props2, ['Component', 'name', 'selectedValue', 'onChange', 'children']);

      return _react2.default.createElement(
        Component,
        rest,
        children
      );
    }
  }]);
  return RadioGroup;
}(_react2.default.Component);

RadioGroup.displayName = 'RadioGroup';
RadioGroup.propTypes = {
  name: _propTypes2.default.string,
  selectedValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]),
  onChange: _propTypes2.default.func,
  children: _propTypes2.default.node.isRequired,
  Component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func, _propTypes2.default.object])
};
RadioGroup.defaultProps = {
  Component: "div"
};
RadioGroup.childContextTypes = {
  radioGroup: _propTypes2.default.object
};