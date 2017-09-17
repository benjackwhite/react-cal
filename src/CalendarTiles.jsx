import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { bem, datesForMonth } from "./utils";

import "./CalendarTiles.scss";

export default class CalendarTiles extends Component {
  static propTypes = {
    month: PropTypes.instanceOf(moment).isRequired,
    startOfWeek: PropTypes.string,
    renderDate: PropTypes.func.isRequired,
    onSelection: PropTypes.func.isRequired,
    selectionRange: PropTypes.array,
    unselectSafeElement: PropTypes.element,
    clearSelectionOnExternalClick: PropTypes.bool
  };

  static defaultProps = {
    startOfWeek: "monday",
    selectionRange: null,
    unselectSafeElement: null,
    clearSelectionOnExternalClick: false
  };

  state = {
    selectionStart: null
  };

  componentDidMount() {
    window.addEventListener("click", this.onWindowClick);
  }
  componentWillUnmount() {
    window.removeEventListener("click", this.onWindowClick);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.selectionRange) {
      this.setState({
        selectionStart: null
      });
    }

    if (nextProps.unselectSafeElement !== this.props.unselectSafeElement) {
      nextProps.unselectSafeElement.addEventListener(
        "click",
        this.onSafeAreaClick
      );
    }
  }

  onSelectStart = (date, e) => {
    this.setState({
      selectionStart: date
    });
    this.props.onSelection([date, date]);
  };

  onSelectMove = (date, e) => {
    const { selectionStart } = this.state;
    const { selectionRange } = this.props;

    if (!selectionStart) {
      return;
    }

    if (date.isSame(selectionStart)) {
      return this.props.onSelection([date, date]);
    }

    // Selecting backwards
    if (date.isBefore(selectionStart) && selectionRange[0] !== date) {
      return this.props.onSelection([date, selectionStart]);
    }

    if (date.isAfter(selectionStart) && selectionRange[1] !== date) {
      return this.props.onSelection([selectionStart, date]);
    }
  };

  onSelectEnd = () => {
    this.setState({
      selectionStart: null
    });

    if (this.props.selectionRange) {
      this.props.onSelection(this.props.selectionRange);
    }
  };

  onSafeAreaClick = e => {
    console.log("Safe click");
    // This is needed to stop the window click event from firing so we can detect clicks outside
    // of the component
    e.stopPropagation();
    e.preventDefault();
  };

  onWindowClick = e => {
    if (!this.props.clearSelectionOnExternalClick) {
      return;
    }
    this.props.onSelection(null);
  };

  renderDate(date) {
    const { month, selectionRange } = this.props;

    const selected = selectionRange
      ? date.isBetween(selectionRange[0], selectionRange[1], null, "[]")
      : false;

    return (
      <li
        key={date.format("YYYY-MM-DD")}
        onMouseDown={e => this.onSelectStart(date, e)}
        onMouseOver={e => this.onSelectMove(date, e)}
        onMouseUp={e => this.onSelectEnd(date, e)}
        className={bem("ReactCalendarTiles__tile", {
          offmonth: date.month() !== month.month(),
          selected,
          faded: !!selectionRange && !selected
        })}
      >
        <span className="ReactCalendarTiles__tile__number">
          {date.date() === 1 ? date.format("MMM D") : date.format("D")}
        </span>

        {this.props.renderDate(date)}
      </li>
    );
  }

  render() {
    const { month, startOfWeek } = this.props;
    const dates = datesForMonth(month, startOfWeek);
    return (
      <div className="ReactCalendarTiles" onClick={this.onSafeAreaClick}>
        <ul className="ReactCalendarTiles__days">
          {dates.slice(0, 7).map(d => <li>{d.format("ddd")}</li>)}
        </ul>
        <ul className="ReactCalendarTiles__tiles">
          <div className="ReactCalendarTiles__tiles__row">
            {dates.slice(0, 7).map(date => this.renderDate(date))}
          </div>
          <div className="ReactCalendarTiles__tiles__row">
            {dates.slice(7, 14).map(date => this.renderDate(date))}
          </div>
          <div className="ReactCalendarTiles__tiles__row">
            {dates.slice(14, 21).map(date => this.renderDate(date))}
          </div>
          <div className="ReactCalendarTiles__tiles__row">
            {dates.slice(21, 28).map(date => this.renderDate(date))}
          </div>
          <div className="ReactCalendarTiles__tiles__row">
            {dates.slice(28, 35).map(date => this.renderDate(date))}
          </div>
        </ul>
      </div>
    );
  }
}
