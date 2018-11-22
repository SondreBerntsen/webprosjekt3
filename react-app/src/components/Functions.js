const fixDateString = (string) => {
    
  //Accepts Norwegian standard date string and converts it to ISO standard
  let match = string.match(/(\d{2})-(\d{2})-(\d{2})/)
  let isoDate = "20" + match[3] + ", " + match[2] + ", " + match[1]

  // Gets a numeric representation of the week day
  let weekDay = new Date(isoDate).getDay();

  //Sets weekDay to a string value based on its numeric value
  switch (weekDay) {
    case 0:
      weekDay = "Søndag";
      break;
    case 1:
      weekDay = "Mandag";
      break;
    case 2:
      weekDay = "Tirsdag";
      break;
    case 3:
      weekDay = "Onsdag";
      break;
    case 4:
      weekDay = "Torsdag";
      break;
    case 5:
      weekDay = "Fredag";
      break;
    case 6:
      weekDay = "Lørdag";
      break;
    default:
      weekDay = "";
  }

  return weekDay
}
 
//Gets default MySQL time value and converts it to "minutes:seconds" only
const fixTimeString = string => {
  let match = string.match(/(\d{2}:\d{2}):/)
  let returnString = match[1]
  return returnString
}

export {
  fixDateString,
  fixTimeString
}