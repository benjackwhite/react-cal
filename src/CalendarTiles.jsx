import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  getMonth,
  getDate,
  format,
  isEqual,
  isBefore,
  isAfter,
  isWithinRange,
  areRangesOverlapping,
  differenceInDays
} from "date-fns";

import { bem, datesForMonth } from "./utils";

import "./CalendarTiles.scss";

export const EventsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.instanceOf(Date),
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date)
  })
);

export default class CalendarTiles extends Component {
  static propTypes = {
    month: PropTypes.instanceOf(Date).isRequired,
    startOfWeek: PropTypes.string,
    renderDate: PropTypes.func.isRequired,
    onSelection: PropTypes.func.isRequired,
    selectionRange: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    unselectSafeElement: PropTypes.element,
    clearSelectionOnExternalClick: PropTypes.bool,
    events: EventsPropType.isRequired,
    renderEvent: PropTypes.func
  };

  static defaultProps = {
    startOfWeek: "monday",
    selectionRange: null,
    unselectSafeElement: null,
    clearSelectionOnExternalClick: false,
    renderEvent: undefined
  };

  state = {
    selectionStart: null
  };

  componentDidMount() {
    window.addEventListener("click", this.onWindowClick);
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

  componentWillUnmount() {
    window.removeEventListener("click", this.onWindowClick);
  }

  onSelectStart = date => {
    this.setState({
      selectionStart: date
    });
    this.props.onSelection([date, date]);
  };

  onSelectMove = date => {
    const { selectionStart } = this.state;
    const { selectionRange, onSelection } = this.props;

    if (!selectionStart) {
      return;
    }

    if (isEqual(date, selectionStart)) {
      onSelection([date, date]);
      return;
    }

    // Selecting backwards
    if (isBefore(date, selectionStart) && selectionRange[0] !== date) {
      onSelection([date, selectionStart]);
      return;
    }

    if (isAfter(date, selectionStart) && selectionRange[1] !== date) {
      onSelection([selectionStart, date]);
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

  onWindowClick = () => {
    if (!this.props.clearSelectionOnExternalClick) {
      return;
    }
    this.props.onSelection(null);
  };

  renderEvent = (evt, dates) => {
    const rangeStart = dates[0];
    const rangeEnd = dates[dates.length - 1];
    const startOffset = Math.max(0, differenceInDays(evt.start, rangeStart));
    const eventLength = differenceInDays(evt.end, evt.start) + 1;

    return (
      <div
        className={bem("ReactCalendarEvents__event", {
          start: isBefore(rangeStart, evt.start),
          end: isBefore(evt.end, rangeEnd)
        })}
        key={evt.key}
        style={{
          "margin-left": `${100 * startOffset / 7}%`,
          width:
            eventLength > 7 - startOffset
              ? `${100 * (7 - startOffset) / 7}%`
              : `${100 * eventLength / 7}%`
        }}
      >
        {evt.description}
      </div>
    );
  };

  renderEvents(dates) {
    const eventsToday = this.props.events.filter(e =>
      areRangesOverlapping(e.start, e.end, dates[0], dates[dates.length - 1])
    );

    return (
      <div className={"ReactCalendarEvents"}>
        {eventsToday.map(evt => this.renderEvent(evt, dates))}
      </div>
    );
  }

  renderDate(date) {
    const { month, selectionRange, renderDate } = this.props;
    const selected = selectionRange
      ? isWithinRange(date, selectionRange[0], selectionRange[1])
      : false;

    return (
      <li
        key={format(date, "YYYY-MM-DD")}
        onMouseDown={e => this.onSelectStart(date, e)}
        onMouseOver={e => this.onSelectMove(date, e)}
        onMouseUp={e => this.onSelectEnd(date, e)}
        className={bem("ReactCalendarTiles__tile", {
          offmonth: getMonth(date) !== getMonth(month),
          selected,
          faded: !!selectionRange && !selected
        })}
      >
        <span className="ReactCalendarTiles__tile__number">
          {getDate(date) === 1 ? format(date, "MMM D") : format(date, "D")}
        </span>
        {renderDate(date)}
      </li>
    );
  }

  render() {
    const { month, startOfWeek, selectionRange } = this.props;
    const dates = datesForMonth(month, startOfWeek);
    return (
      <div
        className={bem("ReactCalendarTiles", {
          isSelecting: !!selectionRange
        })}
        onClick={this.onSafeAreaClick}
      >
        <ul className="ReactCalendarTiles__days">
          {dates.slice(0, 7).map(d => <li key={d}>{format(d, "ddd")}</li>)}
        </ul>
        <ul className="ReactCalendarTiles__tiles">
          <div className="ReactCalendarTiles__tiles__row">
            {dates.slice(0, 7).map(date => this.renderDate(date))}
            {this.renderEvents(dates.slice(0, 7))}
          </div>
          <div className="ReactCalendarTiles__tiles__row">
            {dates.slice(7, 14).map(date => this.renderDate(date))}
            {this.renderEvents(dates.slice(7, 14))}
          </div>
          <div className="ReactCalendarTiles__tiles__row">
            {dates.slice(14, 21).map(date => this.renderDate(date))}
            {this.renderEvents(dates.slice(14, 21))}
          </div>
          <div className="ReactCalendarTiles__tiles__row">
            {dates.slice(21, 28).map(date => this.renderDate(date))}
            {this.renderEvents(dates.slice(21, 28))}
          </div>
          <div className="ReactCalendarTiles__tiles__row">
            {dates.slice(28, 35).map(date => this.renderDate(date))}
            {this.renderEvents(dates.slice(28, 35))}
          </div>
        </ul>
      </div>
    );
  }
}
