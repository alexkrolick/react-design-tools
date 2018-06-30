"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _kit = require("@compositor/kit");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  strict


var blendOptions = ["hard-light", "exclusion", "difference", "multiply", "normal"];

var DiffTool = function (_React$Component) {
  _inherits(DiffTool, _React$Component);

  function DiffTool() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DiffTool);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DiffTool.__proto__ || Object.getPrototypeOf(DiffTool)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      offsetX: 0,
      offsetY: 0,
      xray: false,
      overlay: false,
      blendMode: "normal",
      opacity: 1
    }, _this.linkInput = function (path) {
      var _ref3;

      var attribute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "value";
      var eventType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "change";

      return _ref3 = {}, _defineProperty(_ref3, attribute, _this.state[path]), _defineProperty(_ref3, "on" + eventType[0].toUpperCase() + eventType.slice(1), function (e) {
        e.persist();
        _this.setState(function () {
          return _defineProperty({}, path, attribute === "checked" ? e.target.checked : e.target.value);
        });
      }), _ref3;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DiffTool, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          imgUrl = _props.imgUrl,
          children = _props.children,
          imgHeight = _props.imgHeight,
          imgWidth = _props.imgWidth;
      var _state = this.state,
          offsetX = _state.offsetX,
          offsetY = _state.offsetY,
          xray = _state.xray,
          overlay = _state.overlay,
          blendMode = _state.blendMode,
          opacity = _state.opacity;


      var X = xray ? _kit.XRay : "div";
      var containerHeight = overlay ? 1 * imgHeight : 2 * imgHeight;

      var ControlPanel = React.createElement(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center ",
            padding: 10,
            color: "#ccc",
            background: "#222",
            borderRadius: "3px",
            boxShadow: "0 2px 2px 1px #ccc",
            marginBottom: 5
          }
        },
        React.createElement(
          "label",
          { htmlFor: "overlay-toggle" },
          "Overlay",
          " ",
          React.createElement("input", Object.assign({
            name: "overlay-toggle",
            type: "checkbox",
            style: { marginRight: 10 }
          }, this.linkInput("overlay", "checked")))
        ),
        React.createElement(
          "label",
          { htmlFor: "offset-x" },
          "Offset X",
          " ",
          React.createElement("input", Object.assign({
            name: "offset-x",
            type: "number",
            max: imgWidth,
            min: -100,
            step: 1,
            style: { width: 70, marginRight: 10 }
          }, this.linkInput("offsetX")))
        ),
        React.createElement(
          "label",
          { htmlFor: "offset-y" },
          "Offset Y",
          " ",
          React.createElement("input", Object.assign({
            name: "offset-y",
            type: "number",
            max: imgHeight,
            min: -1 * imgHeight,
            step: 1,
            style: { width: 70, marginRight: 10 }
          }, this.linkInput("offsetY")))
        ),
        React.createElement(
          "label",
          { htmlFor: "opacity-slider" },
          "Opacity",
          " ",
          React.createElement("input", Object.assign({
            name: "opacity-slider",
            type: "range",
            max: 1,
            min: 0,
            step: 0.01,
            style: { width: 50, marginRight: 10 }
          }, this.linkInput("opacity")))
        ),
        React.createElement(
          "label",
          { htmlFor: "x-ray-toggle" },
          "XRay",
          " ",
          React.createElement("input", Object.assign({
            name: "x-ray-toggle",
            type: "checkbox",
            style: { marginRight: 10 }
          }, this.linkInput("xray", "checked")))
        ),
        React.createElement(
          "label",
          { htmlFor: "blend-mode" },
          "Blend",
          " ",
          React.createElement(
            "select",
            Object.assign({
              name: "blend-mode",
              style: { marginRight: 10 }
            }, this.linkInput("blendMode", "value")),
            blendOptions.map(function (o) {
              return React.createElement(
                "option",
                { value: o },
                o
              );
            })
          )
        )
      );

      return React.createElement(
        "div",
        null,
        ControlPanel,
        React.createElement(
          X,
          null,
          React.createElement(
            "div",
            {
              style: {
                position: "relative",
                height: containerHeight,
                width: imgWidth,
                backgroundImage: "url(" + imgUrl + ")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0 0"
              }
            },
            React.createElement(
              "div",
              {
                style: {
                  position: "absolute",
                  top: parseInt(offsetY, 0) + (overlay ? 0 : imgHeight),
                  left: offsetX,
                  opacity: opacity,
                  mixBlendMode: blendMode
                }
              },
              children
            )
          )
        )
      );
    }
  }]);

  return DiffTool;
}(React.Component);

exports.default = DiffTool;