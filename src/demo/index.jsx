import React from "react";
import ReactDOM from "react-dom";
import { addDays } from "date-fns";
import Calendar from "../index.jsx";
import "./demo.scss";

const rootEl = document.body;

const events = [
  {
    key: 1,
    description: "Bank holiday",
    start: addDays(Date.now(), -13),
    end: addDays(Date.now(), -12)
  },
  {
    key: 2,
    description: "Birthday Party",
    start: addDays(Date.now(), -10),
    end: addDays(Date.now(), 20)
  },

  {
    key: 3,
    description: "Holiday time",
    start: addDays(Date.now(), -9),
    end: addDays(Date.now(), 25)
  },

  {
    key: 4,
    description: "Work",
    start: addDays(Date.now(), 2),
    end: addDays(Date.now(), 2)
  }
];

ReactDOM.render(<Calendar events={events} />, rootEl);
