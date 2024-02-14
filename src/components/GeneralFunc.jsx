function timeResponse() {
  const MORNING = "Good Morning";
  const AFTERNOON = "Good Afternoon";
  const EVENING = "Good Evening";
  const GENERIC = "Hello";

  const DateTime = new Date().getHours();

  if (DateTime) {
    const hour = DateTime;

    if (hour >= 5 && hour < 12) {
      return MORNING;
    } else if (hour >= 12 && hour < 17) {
      return AFTERNOON;
    } else {
      return EVENING;
    }
  } else {
    return GENERIC;
  }
}

export { timeResponse };
