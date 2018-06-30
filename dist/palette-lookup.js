"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _findKey = require("lodash/fp/findKey");

var _findKey2 = _interopRequireDefault(_findKey);

var _kebabCase = require("lodash/fp/kebabCase");

var _kebabCase2 = _interopRequireDefault(_kebabCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  strict


var containerStyle = {
  display: "flex",
  justifyContent: "center"
};

var hexInputStyle = {
  width: "50px",
  margin: "5px",
  height: "2.5em"
};

var nameInputStyle = {
  width: "100px",
  margin: "5px",
  height: "2.5em"
};

var PaletteLookup = function (_React$Component) {
  _inherits(PaletteLookup, _React$Component);

  function PaletteLookup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PaletteLookup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PaletteLookup.__proto__ || Object.getPrototypeOf(PaletteLookup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectedColor: "#ffffff"
    }, _this.handleColorChange = function (e) {
      var color = e.target.value;
      _this.setState({ selectedColor: color });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PaletteLookup, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          palette = _props.palette,
          props = _objectWithoutProperties(_props, ["palette"]);

      var selectedColor = this.state.selectedColor;
      var handleColorChange = this.handleColorChange;

      var paletteJsName = (0, _findKey2.default)(function (c) {
        return c === selectedColor;
      }, palette) || "";
      var paletteScssName = (0, _kebabCase2.default)(paletteJsName);
      return React.createElement(
        "div",
        Object.assign({ style: containerStyle }, props),
        React.createElement("input", {
          type: "color",
          value: selectedColor,
          style: hexInputStyle,
          onChange: handleColorChange,
          "aria-label": "palette color picker"
        }),
        React.createElement("input", {
          type: "text",
          value: selectedColor,
          style: nameInputStyle,
          readOnly: true,
          title: "Hex: " + selectedColor,
          "aria-label": "color hex value"
        }),
        React.createElement("input", {
          type: "text",
          value: paletteJsName,
          style: nameInputStyle,
          title: "JS: " + paletteJsName,
          readOnly: true,
          "aria-label": "palette JS color"
        }),
        React.createElement("input", {
          type: "text",
          value: paletteScssName,
          style: nameInputStyle,
          title: "SCSS: " + paletteScssName,
          readOnly: true,
          "aria-label": "palette SCSS color"
        })
      );
    }
  }]);

  return PaletteLookup;
}(React.Component);

PaletteLookup.defaultProps = {
  palette: {}
};
exports.default = PaletteLookup;