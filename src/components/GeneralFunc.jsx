function timeResponse() {
  const MORNING = "Good Morning";
  const AFTERNOON = "Good Afternoon";
  const EVENING = "Good Evening";
  const GENERIC = "Hello";

  const DateTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  if (DateTime) {
    const hour = parseInt(DateTime.split(":")[0]);
    //console.log(DateTime);

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
