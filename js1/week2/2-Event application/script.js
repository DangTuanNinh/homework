function getEventWeekday(dayPresent) {
  const weak = [
    "Chủ nhật",
    "Thứ hai",
    "Thứ ba",
    "Thứ tư",
    "Thứ năm",
    "Thứ 6",
    "Thứ 7",
  ];
  const today = new Date();
  const todayIndex = today.getDay();
  const eventIndex = (todayIndex + dayPresent) % 7;
  return weak[eventIndex];
}
console.log(getEventWeekday(2));
