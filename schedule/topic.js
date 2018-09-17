var topic = [
    "Heat Pad",
    "Hand Warmer",
    "Medicine",
    "Pouch",
    "Tissue",
    "Hot Water",
    "Hot　Shower"
];

var startDate = new Date();

function setYearandMonthAndDay(startYear,startMonth, startDay)
{
  startDate.setYear(startYear);
  startDate.setMonth(startMonth-1, startDay);
  startDate.setDate(startDay);
  startDate.setHours(0);
  startDate.setMinutes(0);
  startDate.setSeconds(0);
}
    
setYearandMonthAndDay(2018,12,31);
