(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("moment"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "moment", "react"], factory);
	else if(typeof exports === 'object')
		exports["reactCal"] = factory(require("prop-types"), require("moment"), require("react"));
	else
		root["reactCal"] = factory(root["prop-types"], root["moment"], root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bem = bem;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

var datesForMonth = exports.datesForMonth = function datesForMonth(month) {
  var startDay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "sunday";

  var dayOffset = daysOfWeek.indexOf(startDay) || 0;
  var startOfMonth = month.clone().startOf("month");
  var startOfCalendar = startOfMonth.subtract(startOfMonth.day() + 7 - dayOffset, "days");

  var startCheck = startOfCalendar.clone().add(7, "days").date();

  if (startCheck === 1 || startCheck > 7) {
    startOfCalendar.add(7, "days");
  }

  var dates = [];

  for (var i = 0; i < 7 * 5; i++) {
    dates.push(startOfCalendar.clone().add("days", i));
  }

  return dates;
};

function bem(base) {
  var modifiers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!Array.isArray(modifiers)) {
    return Object.keys(modifiers).reduce(function (s, m) {
      return modifiers[m] ? [].concat(_toConsumableArray(s), [base + "--" + m]) : s;
    }, [base]).join(" ");
  }

  return modifiers.reduce(function (s, m) {
    return m ? [].concat(_toConsumableArray(s), [base + "--" + m]) : s;
  }, [base]).join(" ");
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Calendar = __webpack_require__(5);

var _Calendar2 = _interopRequireDefault(_Calendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Calendar2.default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = __webpack_require__(2);

var _moment2 = _interopRequireDefault(_moment);

var _CalendarHeader = __webpack_require__(6);

var _CalendarHeader2 = _interopRequireDefault(_CalendarHeader);

var _CalendarTiles = __webpack_require__(8);

var _CalendarTiles2 = _interopRequireDefault(_CalendarTiles);

var _utils = __webpack_require__(3);

__webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calendar = function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      month: _this.props.startMonth,
      selectionRange: null
    }, _this.onKeyDown = function (e) {
      if (e.which === 27 && _this.state.selectionRange) {
        _this.onSelection(null);
      }
    }, _this.onSelection = function (selection) {
      _this.setState({
        selectionRange: selection
      });

      if (selection) {
        var _this$props;

        (_this$props = _this.props).onSelection.apply(_this$props, _toConsumableArray(selection));
      } else {
        _this.props.onSelection(null);
      }
    }, _this.setMonth = function (month) {
      _this.setState({
        month: month
      });

      if (_this.props.onDateRangeChange) {
        var dates = (0, _utils.datesForMonth)(month, _this.props.startOfWeek);
        _this.props.onDateRangeChange(dates[0], dates[dates.length - 1]);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Calendar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setMonth(this.props.startMonth);
      window.addEventListener("keydown", this.onKeyDown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("keydown", this.onKeyDown);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          renderDate = _props.renderDate,
          startOfWeek = _props.startOfWeek,
          unselectSafeElement = _props.unselectSafeElement,
          clearSelectionOnExternalClick = _props.clearSelectionOnExternalClick;
      var _state = this.state,
          month = _state.month,
          selectionRange = _state.selectionRange;


      return _react2.default.createElement(
        "div",
        { className: "ReactCalendar" },
        _react2.default.createElement(_CalendarHeader2.default, { month: month, setMonth: this.setMonth }),
        _react2.default.createElement(_CalendarTiles2.default, {
          month: month,
          renderDate: renderDate,
          selectionRange: selectionRange,
          onSelection: this.onSelection,
          unselectSafeElement: unselectSafeElement,
          clearSelectionOnExternalClick: clearSelectionOnExternalClick,
          startOfWeek: startOfWeek
        })
      );
    }
  }]);

  return Calendar;
}(_react.Component);

Calendar.propTypes = {
  startMonth: _propTypes2.default.instanceOf(_moment2.default),
  onDateRangeChange: _propTypes2.default.func,
  renderDate: _propTypes2.default.func,
  onSelection: _propTypes2.default.func,
  startOfWeek: _propTypes2.default.string,
  unselectSafeElement: _propTypes2.default.element,
  clearSelectionOnExternalClick: _propTypes2.default.bool
};
Calendar.defaultProps = {
  startMonth: (0, _moment2.default)(),
  onDateRangeChange: null,
  renderDate: function renderDate() {
    return null;
  },
  onSelection: function onSelection() {
    return null;
  },
  startOfWeek: "monday",
  unselectSafeElement: null,
  clearSelectionOnExternalClick: false
};
exports.default = Calendar;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = __webpack_require__(2);

var _moment2 = _interopRequireDefault(_moment);

__webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CalendarHeader = function (_Component) {
  _inherits(CalendarHeader, _Component);

  function CalendarHeader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CalendarHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CalendarHeader.__proto__ || Object.getPrototypeOf(CalendarHeader)).call.apply(_ref, [this].concat(args))), _this), _this.nextMonth = function () {
      _this.props.setMonth(_this.props.month.clone().add(1, "months"));
    }, _this.previousMonth = function () {
      _this.props.setMonth(_this.props.month.clone().subtract(1, "months"));
    }, _this.onMonthChange = function (e) {
      _this.props.setMonth((0, _moment2.default)(e.target.value));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CalendarHeader, [{
    key: "render",
    value: function render() {
      var month = this.props.month;

      var months = [];

      for (var i = 0; i < 24; i++) {
        months.push(month.clone().subtract("months", 12).add("months", i));
      }

      return _react2.default.createElement(
        "div",
        { className: "ReactCalendarHeader" },
        _react2.default.createElement(
          "div",
          { className: "ReactCalendarHeader__directions" },
          _react2.default.createElement("button", {
            onClick: this.previousMonth,
            className: "ReactCalendarHeader__directionbtn"
          }),
          _react2.default.createElement("button", {
            onClick: this.nextMonth,
            className: "ReactCalendarHeader__directionbtn"
          })
        ),
        _react2.default.createElement(
          "div",
          { className: "ReactCalendarHeader__clear" },
          _react2.default.createElement(
            "button",
            null,
            "Clear Selection"
          )
        ),
        _react2.default.createElement(
          "select",
          {
            value: month.format("YYYY-MM-DD"),
            className: "ReactCalendarHeader__monthpicker",
            onChange: this.onMonthChange
          },
          months.map(function (m) {
            return _react2.default.createElement(
              "option",
              { value: m.format("YYYY-MM-DD") },
              m.format("MMMM YYYY")
            );
          })
        )
      );
    }
  }]);

  return CalendarHeader;
}(_react.Component);

CalendarHeader.propTypes = {
  setMonth: _propTypes2.default.func.isRequired
};
exports.default = CalendarHeader;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = __webpack_require__(2);

var _moment2 = _interopRequireDefault(_moment);

var _utils = __webpack_require__(3);

__webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CalendarTiles = function (_Component) {
  _inherits(CalendarTiles, _Component);

  function CalendarTiles() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CalendarTiles);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CalendarTiles.__proto__ || Object.getPrototypeOf(CalendarTiles)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectionStart: null
    }, _this.onSelectStart = function (date, e) {
      _this.setState({
        selectionStart: date
      });
      _this.props.onSelection([date, date]);
    }, _this.onSelectMove = function (date, e) {
      var selectionStart = _this.state.selectionStart;
      var selectionRange = _this.props.selectionRange;


      if (!selectionStart) {
        return;
      }

      if (date.isSame(selectionStart)) {
        return _this.props.onSelection([date, date]);
      }

      // Selecting backwards
      if (date.isBefore(selectionStart) && selectionRange[0] !== date) {
        return _this.props.onSelection([date, selectionStart]);
      }

      if (date.isAfter(selectionStart) && selectionRange[1] !== date) {
        return _this.props.onSelection([selectionStart, date]);
      }
    }, _this.onSelectEnd = function () {
      _this.setState({
        selectionStart: null
      });

      if (_this.props.selectionRange) {
        _this.props.onSelection(_this.props.selectionRange);
      }
    }, _this.onSafeAreaClick = function (e) {
      console.log("Safe click");
      // This is needed to stop the window click event from firing so we can detect clicks outside
      // of the component
      e.stopPropagation();
      e.preventDefault();
    }, _this.onWindowClick = function (e) {
      if (!_this.props.clearSelectionOnExternalClick) {
        return;
      }
      _this.props.onSelection(null);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CalendarTiles, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("click", this.onWindowClick);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("click", this.onWindowClick);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!nextProps.selectionRange) {
        this.setState({
          selectionStart: null
        });
      }

      if (nextProps.unselectSafeElement !== this.props.unselectSafeElement) {
        nextProps.unselectSafeElement.addEventListener("click", this.onSafeAreaClick);
      }
    }
  }, {
    key: "renderDate",
    value: function renderDate(date) {
      var _this2 = this;

      var _props = this.props,
          month = _props.month,
          selectionRange = _props.selectionRange;


      var selected = selectionRange ? date.isBetween(selectionRange[0], selectionRange[1], null, "[]") : false;

      return _react2.default.createElement(
        "li",
        {
          key: date.format("YYYY-MM-DD"),
          onMouseDown: function onMouseDown(e) {
            return _this2.onSelectStart(date, e);
          },
          onMouseOver: function onMouseOver(e) {
            return _this2.onSelectMove(date, e);
          },
          onMouseUp: function onMouseUp(e) {
            return _this2.onSelectEnd(date, e);
          },
          className: (0, _utils.bem)("ReactCalendarTiles__tile", {
            offmonth: date.month() !== month.month(),
            selected: selected,
            faded: !!selectionRange && !selected
          })
        },
        _react2.default.createElement(
          "span",
          { className: "ReactCalendarTiles__tile__number" },
          date.date() === 1 ? date.format("MMM D") : date.format("D")
        ),
        this.props.renderDate(date)
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          month = _props2.month,
          startOfWeek = _props2.startOfWeek;

      var dates = (0, _utils.datesForMonth)(month, startOfWeek);
      return _react2.default.createElement(
        "div",
        { className: "ReactCalendarTiles", onClick: this.onSafeAreaClick },
        _react2.default.createElement(
          "ul",
          { className: "ReactCalendarTiles__days" },
          dates.slice(0, 7).map(function (d) {
            return _react2.default.createElement(
              "li",
              null,
              d.format("ddd")
            );
          })
        ),
        _react2.default.createElement(
          "ul",
          { className: "ReactCalendarTiles__tiles" },
          _react2.default.createElement(
            "div",
            { className: "ReactCalendarTiles__tiles__row" },
            dates.slice(0, 7).map(function (date) {
              return _this3.renderDate(date);
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "ReactCalendarTiles__tiles__row" },
            dates.slice(7, 14).map(function (date) {
              return _this3.renderDate(date);
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "ReactCalendarTiles__tiles__row" },
            dates.slice(14, 21).map(function (date) {
              return _this3.renderDate(date);
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "ReactCalendarTiles__tiles__row" },
            dates.slice(21, 28).map(function (date) {
              return _this3.renderDate(date);
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "ReactCalendarTiles__tiles__row" },
            dates.slice(28, 35).map(function (date) {
              return _this3.renderDate(date);
            })
          )
        )
      );
    }
  }]);

  return CalendarTiles;
}(_react.Component);

CalendarTiles.propTypes = {
  month: _propTypes2.default.instanceOf(_moment2.default).isRequired,
  startOfWeek: _propTypes2.default.string,
  renderDate: _propTypes2.default.func.isRequired,
  onSelection: _propTypes2.default.func.isRequired,
  selectionRange: _propTypes2.default.array,
  unselectSafeElement: _propTypes2.default.element,
  clearSelectionOnExternalClick: _propTypes2.default.bool
};
CalendarTiles.defaultProps = {
  startOfWeek: "monday",
  selectionRange: null,
  unselectSafeElement: null,
  clearSelectionOnExternalClick: false
};
exports.default = CalendarTiles;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});