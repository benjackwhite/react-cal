import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";

import "./CalendarHeader.scss";

export default class CalendarHeader extends Component {
  static propTypes = {
    setMonth: PropTypes.func.isRequired
  };
  nextMonth = () => {
    this.props.setMonth(this.props.month.clone().add(1, "months"));
  };

  previousMonth = () => {
    this.props.setMonth(this.props.month.clone().subtract(1, "months"));
  };

  onMonthChange = e => {
    this.props.setMonth(moment(e.target.value));
  };

  render() {
    const { month } = this.props;
    const months = [];

    for (let i = 0; i < 24; i++) {
      months.push(
        month
          .clone()
          .subtract("months", 12)
          .add("months", i)
      );
    }

    return (
      <div className="ReactCalendarHeader">
        <div className="ReactCalendarHeader__directions">
          <button
            onClick={this.previousMonth}
            className={"ReactCalendarHeader__directionbtn"}
          />
          <button
            onClick={this.nextMonth}
            className={"ReactCalendarHeader__directionbtn"}
          />
        </div>
        <div className="ReactCalendarHeader__clear">
          <button>Clear Selection</button>
        </div>
        <select
          value={month.format("YYYY-MM-DD")}
          className={"ReactCalendarHeader__monthpicker"}
          onChange={this.onMonthChange}
        >
          {months.map(m => (
            <option value={m.format("YYYY-MM-DD")}>
              {m.format("MMMM YYYY")}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
