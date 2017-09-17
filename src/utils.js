import { startOfMonth, subDays, addDays, getDay, getDate } from "date-fns";

const daysOfWeek = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
];

export const datesForMonth = (month, startDay = "sunday") => {
  const dayOffset = daysOfWeek.indexOf(startDay) || 0;
  const monthStart = startOfMonth(month);
  let startOfCalendar = subDays(monthStart, getDay(monthStart) + 7 - dayOffset);

  const startCheck = getDate(addDays(startOfCalendar, 7));

  if (startCheck === 1 || startCheck > 7) {
    startOfCalendar = addDays(startOfCalendar, 7);
  }

  const dates = Array(...Array(35)).map((v, i) => addDays(startOfCalendar, i));
  return dates;
};

export function bem(base, modifiers = []) {
  if (!Array.isArray(modifiers)) {
    return Object.keys(modifiers)
      .reduce((s, m) => (modifiers[m] ? [...s, `${base}--${m}`] : s), [base])
      .join(" ");
  }

  return modifiers
    .reduce((s, m) => (m ? [...s, `${base}--${m}`] : s), [base])
    .join(" ");
}
