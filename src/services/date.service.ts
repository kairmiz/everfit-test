function getNextDays(date: Date = new Date(), daysToAdd = 1) {
  const nextDate = new Date(date);

  nextDate.setDate(date.getDate() + daysToAdd);

  return nextDate;
}

export function generateDays(fromDate: Date = new Date(), numDays: number) {
  const days: Date[] = [fromDate];

  for (let i = 1; i < numDays; i++) {
    const lastDay = days[days.length - 1];

    days.push(getNextDays(lastDay));
  }

  return days;
}

export function getDayName(date = new Date(), locale = "en-US") {
  return date.toLocaleDateString(locale, { weekday: "long" });
}
