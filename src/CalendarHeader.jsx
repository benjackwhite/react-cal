import React, { Component } from "react";
import PropTypes from "prop-types";

import { parse, subMonths, addMonths, format } from "date-fns";

import "./CalendarHeader.scss";

export default class CalendarHeader extends Component {
  static propTypes = {
    setMonth: PropTypes.func.isRequired,
    month: PropTypes.instanceOf(Date).isRequired,
    selectionRange: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    onClearSelection: PropTypes.func
  };

  static defaultProps = {
    selectionRange: null,
    onClearSelection: () => null
  };

  onMonthChange = e => {
    this.props.setMonth(parse(e.target.value, "YYYY-MM-DD"));
  };

  previousMonth = () => {
    this.props.setMonth(subMonths(this.props.month, 1));
  };

  nextMonth = () => {
    this.props.setMonth(addMonths(this.props.month, 1));
  };

  render() {
    const { month, selectionRange, onClearSelection, locale } = this.props;

    const months = Array(...Array(24)).map((v, i) => addMonths(month, i - 12));

    return (
      <div className="ReactCalendarHeader">
        <div className="ReactCalendarHeader__left">
          <select
            value={format(month, "YYYY-MM-DD", { locale })}
            className={"ReactCalendarHeader__monthpicker"}
            onChange={this.onMonthChange}
          >
            {months.map(m => (
              <option value={format(m, "YYYY-MM-DD", { locale })}>
                {format(m, "MMMM YYYY", { locale })}
              </option>
            ))}
          </select>
          
          {selectionRange ? (
            <div className="ReactCalendarHeader__clear">
              <button onClick={onClearSelection}>Clear Selection</button>
            </div>
          ) : null}
        </div>

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
      </div>
    );
  }
}
