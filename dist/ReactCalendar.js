(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("date-fns"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "date-fns"], factory);
	else if(typeof exports === 'object')
		exports["reactCal"] = factory(require("react"), require("prop-types"), require("date-fns"));
	else
		root["reactCal"] = factory(root["react"], root["prop-types"], root["date-fns"]);
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
exports.datesForMonth = undefined;
exports.bem = bem;

var _dateFns = __webpack_require__(0);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

var datesForMonth = exports.datesForMonth = function datesForMonth(month) {
  var startDay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "sunday";

  var dayOffset = daysOfWeek.indexOf(startDay) || 0;
  var monthStart = (0, _dateFns.startOfMonth)(month);
  var startOfCalendar = (0, _dateFns.subDays)(monthStart, (0, _dateFns.getDay)(monthStart) + 7 - dayOffset);

  var startCheck = (0, _dateFns.getDate)((0, _dateFns.addDays)(startOfCalendar, 7));

  if (startCheck === 1 || startCheck > 7) {
    startOfCalendar = (0, _dateFns.addDays)(startOfCalendar, 7);
  }

  var dates = Array.apply(undefined, _toConsumableArray(Array(35))).map(function (v, i) {
    return (0, _dateFns.addDays)(startOfCalendar, i);
  });
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

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dateFns = __webpack_require__(0);

var _CalendarHeader = __webpack_require__(6);

var _CalendarHeader2 = _interopRequireDefault(_CalendarHeader);

var _CalendarTiles = __webpack_require__(8);

var _CalendarTiles2 = _interopRequireDefault(_CalendarTiles);

var _utils = __webpack_require__(3);

__webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      localSelectionRange: null
    }, _this.onKeyDown = function (e) {
      if (e.which === 27) {
        _this.onSelection(null);
      }
    }, _this.onSelection = function (selection) {
      _this.setState({ localSelectionRange: selection });
      _this.props.onSelection(selection || null);
    }, _this.setMonth = function (month) {
      _this.setState({
        month: month
      });

      if (_this.props.onDateRangeChange) {
        var dates = (0, _utils.datesForMonth)(month, _this.props.startOfWeek);
        _this.props.onDateRangeChange([dates[0], dates[dates.length - 1]]);
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
      var _this2 = this;

      var _props = this.props,
          renderDate = _props.renderDate,
          startOfWeek = _props.startOfWeek,
          unselectSafeElement = _props.unselectSafeElement,
          clearSelectionOnExternalClick = _props.clearSelectionOnExternalClick,
          events = _props.events;
      var _state = this.state,
          month = _state.month,
          localSelectionRange = _state.localSelectionRange;
      var _props$selectionRange = this.props.selectionRange,
          selectionRange = _props$selectionRange === undefined ? localSelectionRange : _props$selectionRange;


      return _react2.default.createElement(
        "div",
        { className: "ReactCalendar" },
        _react2.default.createElement(_CalendarHeader2.default, {
          month: month,
          setMonth: this.setMonth,
          selectionRange: selectionRange,
          onClearSelection: function onClearSelection() {
            return _this2.onSelection(null);
          }
        }),
        _react2.default.createElement(_CalendarTiles2.default, {
          month: month,
          renderDate: renderDate,
          selectionRange: selectionRange,
          onSelection: this.onSelection,
          unselectSafeElement: unselectSafeElement,
          clearSelectionOnExternalClick: clearSelectionOnExternalClick,
          startOfWeek: startOfWeek,
          events: events
        })
      );
    }
  }]);

  return Calendar;
}(_react.Component);

Calendar.propTypes = {
  startMonth: _propTypes2.default.instanceOf(Date),
  onDateRangeChange: _propTypes2.default.func,
  renderDate: _propTypes2.default.func,
  onSelection: _propTypes2.default.func,
  startOfWeek: _propTypes2.default.string,
  unselectSafeElement: _propTypes2.default.element,
  clearSelectionOnExternalClick: _propTypes2.default.bool,
  events: _CalendarTiles.EventsPropType,
  selectionRange: _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(Date))
};
Calendar.defaultProps = {
  startMonth: (0, _dateFns.startOfMonth)(Date.now()),
  onDateRangeChange: null,
  renderDate: function renderDate() {
    return null;
  },
  onSelection: function onSelection() {
    return null;
  },
  startOfWeek: "monday",
  unselectSafeElement: null,
  clearSelectionOnExternalClick: false,
  events: [],
  selectionRange: undefined
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

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dateFns = __webpack_require__(0);

__webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CalendarHeader.__proto__ || Object.getPrototypeOf(CalendarHeader)).call.apply(_ref, [this].concat(args))), _this), _this.onMonthChange = function (e) {
      _this.props.setMonth((0, _dateFns.parse)(e.target.value, "YYYY-MM-DD"));
    }, _this.previousMonth = function () {
      _this.props.setMonth((0, _dateFns.subMonths)(_this.props.month, 1));
    }, _this.nextMonth = function () {
      _this.props.setMonth((0, _dateFns.addMonths)(_this.props.month, 1));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CalendarHeader, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          month = _props.month,
          selectionRange = _props.selectionRange,
          onClearSelection = _props.onClearSelection;


      var months = Array.apply(undefined, _toConsumableArray(Array(24))).map(function (v, i) {
        return (0, _dateFns.addMonths)(month, i - 12);
      });

      return _react2.default.createElement(
        "div",
        { className: "ReactCalendarHeader" },
        _react2.default.createElement(
          "div",
          { className: "ReactCalendarHeader__left" },
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
          selectionRange ? _react2.default.createElement(
            "div",
            { className: "ReactCalendarHeader__clear" },
            _react2.default.createElement(
              "button",
              { onClick: onClearSelection },
              "Clear Selection"
            )
          ) : null
        ),
        _react2.default.createElement(
          "select",
          {
            value: (0, _dateFns.format)(month, "YYYY-MM-DD"),
            className: "ReactCalendarHeader__monthpicker",
            onChange: this.onMonthChange
          },
          months.map(function (m) {
            return _react2.default.createElement(
              "option",
              { value: (0, _dateFns.format)(m, "YYYY-MM-DD") },
              (0, _dateFns.format)(m, "MMMM YYYY")
            );
          })
        )
      );
    }
  }]);

  return CalendarHeader;
}(_react.Component);

CalendarHeader.propTypes = {
  setMonth: _propTypes2.default.func.isRequired,
  month: _propTypes2.default.instanceOf(Date).isRequired,
  selectionRange: _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(Date)),
  onClearSelection: _propTypes2.default.func
};
CalendarHeader.defaultProps = {
  selectionRange: null,
  onClearSelection: function onClearSelection() {
    return null;
  }
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
exports.EventsPropType = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dateFns = __webpack_require__(0);

var _utils = __webpack_require__(3);

__webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventsPropType = exports.EventsPropType = _propTypes2.default.arrayOf(_propTypes2.default.shape({
  id: _propTypes2.default.instanceOf(Date),
  start: _propTypes2.default.instanceOf(Date),
  end: _propTypes2.default.instanceOf(Date)
}));

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
    }, _this.onSelectStart = function (date) {
      _this.setState({
        selectionStart: date
      });
      _this.props.onSelection([date, date]);
    }, _this.onSelectMove = function (date) {
      var selectionStart = _this.state.selectionStart;
      var _this$props = _this.props,
          selectionRange = _this$props.selectionRange,
          onSelection = _this$props.onSelection;


      if (!selectionStart) {
        return;
      }

      if ((0, _dateFns.isEqual)(date, selectionStart)) {
        onSelection([date, date]);
        return;
      }

      // Selecting backwards
      if ((0, _dateFns.isBefore)(date, selectionStart) && selectionRange[0] !== date) {
        onSelection([date, selectionStart]);
        return;
      }

      if ((0, _dateFns.isAfter)(date, selectionStart) && selectionRange[1] !== date) {
        onSelection([selectionStart, date]);
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
    }, _this.onWindowClick = function () {
      if (!_this.props.clearSelectionOnExternalClick) {
        return;
      }
      _this.props.onSelection(null);
    }, _this.renderEvent = function (evt, dates) {
      var rangeStart = dates[0];
      var rangeEnd = dates[dates.length - 1];
      var startOffset = Math.max(0, (0, _dateFns.differenceInDays)(evt.start, rangeStart));
      var eventLength = (0, _dateFns.differenceInDays)(evt.end, evt.start) + 1;

      return _react2.default.createElement(
        "div",
        {
          className: (0, _utils.bem)("ReactCalendarEvents__event", {
            start: (0, _dateFns.isBefore)(rangeStart, evt.start),
            end: (0, _dateFns.isBefore)(evt.end, rangeEnd)
          }),
          key: evt.key,
          style: {
            "margin-left": 100 * startOffset / 7 + "%",
            width: eventLength > 7 - startOffset ? 100 * (7 - startOffset) / 7 + "%" : 100 * eventLength / 7 + "%"
          }
        },
        evt.description
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CalendarTiles, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("click", this.onWindowClick);
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
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("click", this.onWindowClick);
    }
  }, {
    key: "renderEvents",
    value: function renderEvents(dates) {
      var _this2 = this;

      var eventsToday = this.props.events.filter(function (e) {
        return (0, _dateFns.areRangesOverlapping)(e.start, e.end, dates[0], dates[dates.length - 1]);
      });

      return _react2.default.createElement(
        "div",
        { className: "ReactCalendarEvents" },
        eventsToday.map(function (evt) {
          return _this2.renderEvent(evt, dates);
        })
      );
    }
  }, {
    key: "renderDate",
    value: function renderDate(date) {
      var _this3 = this;

      var _props = this.props,
          month = _props.month,
          selectionRange = _props.selectionRange,
          renderDate = _props.renderDate;

      var selected = selectionRange ? (0, _dateFns.isWithinRange)(date, selectionRange[0], selectionRange[1]) : false;

      return _react2.default.createElement(
        "li",
        {
          key: (0, _dateFns.format)(date, "YYYY-MM-DD"),
          onMouseDown: function onMouseDown(e) {
            return _this3.onSelectStart(date, e);
          },
          onMouseOver: function onMouseOver(e) {
            return _this3.onSelectMove(date, e);
          },
          onMouseUp: function onMouseUp(e) {
            return _this3.onSelectEnd(date, e);
          },
          className: (0, _utils.bem)("ReactCalendarTiles__tile", {
            offmonth: (0, _dateFns.getMonth)(date) !== (0, _dateFns.getMonth)(month),
            selected: selected,
            faded: !!selectionRange && !selected
          })
        },
        _react2.default.createElement(
          "span",
          { className: "ReactCalendarTiles__tile__number" },
          (0, _dateFns.getDate)(date) === 1 ? (0, _dateFns.format)(date, "MMM D") : (0, _dateFns.format)(date, "D")
        ),
        renderDate(date)
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _props2 = this.props,
          month = _props2.month,
          startOfWeek = _props2.startOfWeek,
          selectionRange = _props2.selectionRange;

      var dates = (0, _utils.datesForMonth)(month, startOfWeek);
      return _react2.default.createElement(
        "div",
        {
          className: (0, _utils.bem)("ReactCalendarTiles", {
            isSelecting: !!selectionRange
          }),
          onClick: this.onSafeAreaClick
        },
        _react2.default.createElement(
          "ul",
          { className: "ReactCalendarTiles__days" },
          dates.slice(0, 7).map(function (d) {
            return _react2.default.createElement(
              "li",
              { key: d },
              (0, _dateFns.format)(d, "ddd")
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
              return _this4.renderDate(date);
            }),
            this.renderEvents(dates.slice(0, 7))
          ),
          _react2.default.createElement(
            "div",
            { className: "ReactCalendarTiles__tiles__row" },
            dates.slice(7, 14).map(function (date) {
              return _this4.renderDate(date);
            }),
            this.renderEvents(dates.slice(7, 14))
          ),
          _react2.default.createElement(
            "div",
            { className: "ReactCalendarTiles__tiles__row" },
            dates.slice(14, 21).map(function (date) {
              return _this4.renderDate(date);
            }),
            this.renderEvents(dates.slice(14, 21))
          ),
          _react2.default.createElement(
            "div",
            { className: "ReactCalendarTiles__tiles__row" },
            dates.slice(21, 28).map(function (date) {
              return _this4.renderDate(date);
            }),
            this.renderEvents(dates.slice(21, 28))
          ),
          _react2.default.createElement(
            "div",
            { className: "ReactCalendarTiles__tiles__row" },
            dates.slice(28, 35).map(function (date) {
              return _this4.renderDate(date);
            }),
            this.renderEvents(dates.slice(28, 35))
          )
        )
      );
    }
  }]);

  return CalendarTiles;
}(_react.Component);

CalendarTiles.propTypes = {
  month: _propTypes2.default.instanceOf(Date).isRequired,
  startOfWeek: _propTypes2.default.string,
  renderDate: _propTypes2.default.func.isRequired,
  onSelection: _propTypes2.default.func.isRequired,
  selectionRange: _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(Date)),
  unselectSafeElement: _propTypes2.default.element,
  clearSelectionOnExternalClick: _propTypes2.default.bool,
  events: EventsPropType.isRequired,
  renderEvent: _propTypes2.default.func
};
CalendarTiles.defaultProps = {
  startOfWeek: "monday",
  selectionRange: null,
  unselectSafeElement: null,
  clearSelectionOnExternalClick: false,
  renderEvent: undefined
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