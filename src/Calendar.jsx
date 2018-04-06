import defaultLocale from "date-fns/locale/en";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { startOfMonth } from "date-fns";
import CalendarHeader from "./CalendarHeader";
import CalendarTiles, { EventsPropType } from "./CalendarTiles";
import { datesForMonth } from "./utils";

import "./Calendar.scss";

class Calendar extends Component {
  static propTypes = {
    startMonth: PropTypes.instanceOf(Date),
    onDateRangeChange: PropTypes.func,
    renderDate: PropTypes.func,
    onSelection: PropTypes.func,
    startOfWeek: PropTypes.string,
    unselectSafeElement: PropTypes.element,
    clearSelectionOnExternalClick: PropTypes.bool,
    events: EventsPropType,
    selectionRange: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    locale: PropTypes.object
  };

  static defaultProps = {
    startMonth: startOfMonth(Date.now()),
    onDateRangeChange: null,
    renderDate: () => null,
    onSelection: () => null,
    startOfWeek: "monday",
    unselectSafeElement: null,
    clearSelectionOnExternalClick: false,
    events: [],
    selectionRange: undefined,
    locale: defaultLocale
  };

  state = {
    month: this.props.startMonth,
    localSelectionRange: null
  };

  componentDidMount() {
    this.setMonth(this.props.startMonth);
    window.addEventListener("keydown", this.onKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.which === 27) {
      this.onSelection(null);
    }
  };

  onSelection = selection => {
    this.setState({ localSelectionRange: selection });
    this.props.onSelection(selection || null);
  };

  setMonth = month => {
    this.setState({
      month
    });

    if (this.props.onDateRangeChange) {
      const dates = datesForMonth(month, this.props.startOfWeek);
      this.props.onDateRangeChange([dates[0], dates[dates.length - 1]]);
    }
  };

  render() {
    const {
      renderDate,
      startOfWeek,
      unselectSafeElement,
      clearSelectionOnExternalClick,
      events
    } = this.props;
    const { month, localSelectionRange } = this.state;
    const { selectionRange = localSelectionRange, locale } = this.props;

    return (
      <div className="ReactCalendar">
        <CalendarHeader
          month={month}
          setMonth={this.setMonth}
          selectionRange={selectionRange}
          onClearSelection={() => this.onSelection(null)}
          locale={locale}
        />
        <CalendarTiles
          month={month}
          renderDate={renderDate}
          selectionRange={selectionRange}
          onSelection={this.onSelection}
          unselectSafeElement={unselectSafeElement}
          clearSelectionOnExternalClick={clearSelectionOnExternalClick}
          startOfWeek={startOfWeek}
          events={events}
          locale={locale}
        />
      </div>
    );
  }
}

export default Calendar;
