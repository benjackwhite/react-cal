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
  const startOfMonth = month.clone().startOf("month");
  const startOfCalendar = startOfMonth.subtract(
    startOfMonth.day() + 7 - dayOffset,
    "days"
  );

  const startCheck = startOfCalendar
    .clone()
    .add(7, "days")
    .date();

  if (startCheck === 1 || startCheck > 7) {
    startOfCalendar.add(7, "days");
  }

  const dates = Array(...Array(35)).map(i =>
    startOfCalendar.clone().add("days", i)
  );

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
