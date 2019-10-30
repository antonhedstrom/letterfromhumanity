webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ParticleStars/ParticleStars.js":
/*!***************************************************!*\
  !*** ./components/ParticleStars/ParticleStars.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/lib/particles.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _particles_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./particles-config */ "./components/ParticleStars/particles-config.js");
/* harmony import */ var _ParticleStars_module_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ParticleStars.module.sass */ "./components/ParticleStars/ParticleStars.module.sass");
/* harmony import */ var _ParticleStars_module_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ParticleStars_module_sass__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/ahedstrom/Development/projects/weareonelaw/letterfromhumanity-ui/components/ParticleStars/ParticleStars.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






console.log(_particles_config__WEBPACK_IMPORTED_MODULE_3__["default"]);

var ParticleStars =
/*#__PURE__*/
function (_Component) {
  _inherits(ParticleStars, _Component);

  function ParticleStars(props) {
    var _this;

    _classCallCheck(this, ParticleStars);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ParticleStars).call(this, props));
    _this.state = {
      width: "100%",
      height: "100%"
    };
    return _this;
  }

  _createClass(ParticleStars, [{
    key: "componentDidMount",
    value: function componentDidMount() {// TODO: Measure height
    }
  }, {
    key: "render",
    value: function render() {
      return (// <div className="particles-container">
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_particles_js__WEBPACK_IMPORTED_MODULE_2___default.a, {
          className: _ParticleStars_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a['particles'],
          width: "100%",
          height: "100%",
          params: _particles_config__WEBPACK_IMPORTED_MODULE_3__["default"],
          style: {},
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }) // </div>

      );
    }
  }]);

  return ParticleStars;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

;
ParticleStars.defaultProps = {};
ParticleStars.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (ParticleStars);

/***/ }),

/***/ "./components/ParticleStars/particles-config.js":
/*!******************************************************!*\
  !*** ./components/ParticleStars/particles-config.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
Using the particle.js library which as quite a lot of config.
https://vincentgarreau.com/particles.js/

Night sky config was found at: https://rpj.bembi.org/#night-sky
*/
var config = {
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 1500
      }
    },
    "line_linked": {
      "enable": true,
      "opacity": 0.02
    },
    "move": {
      "direction": "right",
      "speed": 0.05
    },
    "size": {
      "value": 1
    },
    "opacity": {
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.05
      }
    }
  },
  "interactivity": {
    "events": {
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    },
    "modes": {
      "push": {
        "particles_nb": 1
      }
    }
  },
  "retina_detect": true
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ })

})
//# sourceMappingURL=index.js.7f4bae39b1b47d026ce5.hot-update.js.map