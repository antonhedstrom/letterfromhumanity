webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Input/Input.js":
/*!***********************************!*\
  !*** ./components/Input/Input.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/Input/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/InputLabel/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/antonkjorcklinden/Development/letterfromhumanity/components/Input/Input.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





 // import styles from './input.module.scss';

var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    margin: {
      margin: theme.spacing.unit
    },
    cssLabel: {
      '&$cssFocused': {
        color: purple[500]
      }
    },
    cssFocused: {},
    cssUnderline: {
      '&:after': {
        borderBottomColor: purple[500]
      }
    },
    cssOutlinedInput: {
      '&$cssFocused $notchedOutline': {
        borderColor: purple[500]
      }
    },
    notchedOutline: {},
    bootstrapRoot: {
      'label + &': {
        marginTop: theme.spacing.unit * 3
      }
    },
    bootstrapInput: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
      }
    },
    bootstrapFormLabel: {
      fontSize: 18
    }
  };
};

var InputClass =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputClass, _React$Component);

  function InputClass() {
    _classCallCheck(this, InputClass);

    return _possibleConstructorReturn(this, _getPrototypeOf(InputClass).apply(this, arguments));
  }

  _createClass(InputClass, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: classes.margin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
        htmlFor: "custom-css-standard-input",
        classes: {
          root: classes.cssLabel,
          focused: classes.cssFocused
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Custom CSS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "custom-css-standard-input",
        classes: {
          underline: classes.cssUnderline
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }));
    }
  }]);

  return InputClass;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (withStyles(styles)(InputClass));

/***/ })

})
//# sourceMappingURL=index.js.cd5cd79c0af0f463b696.hot-update.js.map