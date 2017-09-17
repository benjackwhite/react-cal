import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import CalendarHeader from "./CalendarHeader";
import CalendarTiles from "./CalendarTiles";
import { datesForMonth } from "./utils";

import "./Calendar.scss";

class Calendar extends Component {
  static propTypes = {
    startMonth: PropTypes.instanceOf(moment),
    onDateRangeChange: PropTypes.func,
    renderDate: PropTypes.func,
    onSelection: PropTypes.func,
    startOfWeek: PropTypes.string,
    unselectSafeElement: PropTypes.element,
    clearSelectionOnExternalClick: PropTypes.bool
  };

  static defaultProps = {
    startMonth: moment(),
    onDateRangeChange: null,
    renderDate: () => null,
    onSelection: () => null,
    startOfWeek: "monday",
    unselectSafeElement: null,
    clearSelectionOnExternalClick: false
  };

  state = {
    month: this.props.startMonth,
    selectionRange: null
  };

  componentDidMount() {
    this.setMonth(this.props.startMonth);
    window.addEventListener("keydown", this.onKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.which === 27 && this.state.selectionRange) {
      this.onSelection(null);
    }
  };

  onSelection = selection => {
    this.setState({
      selectionRange: selection
    });

    if (selection) {
      this.props.onSelection(...selection);
    } else {
      this.props.onSelection(null);
    }
  };

  setMonth = month => {
    this.setState({
      month: month
    });

    if (this.props.onDateRangeChange) {
      const dates = datesForMonth(month, this.props.startOfWeek);
      this.props.onDateRangeChange(dates[0], dates[dates.length - 1]);
    }
  };

  render() {
    const {
      renderDate,
      startOfWeek,
      unselectSafeElement,
      clearSelectionOnExternalClick
    } = this.props;
    const { month, selectionRange } = this.state;

    return (
      <div className="ReactCalendar">
        <CalendarHeader month={month} setMonth={this.setMonth} />
        <CalendarTiles
          month={month}
          renderDate={renderDate}
          selectionRange={selectionRange}
          onSelection={this.onSelection}
          unselectSafeElement={unselectSafeElement}
          clearSelectionOnExternalClick={clearSelectionOnExternalClick}
          startOfWeek={startOfWeek}
        />
      </div>
    );
  }
}

export default Calendar;
