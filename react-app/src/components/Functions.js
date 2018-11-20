const fixDateString = (string) => {
    
  //Gets default MySQL date value and converts it to Norwegian standard day/month structure
  let match = string.match(/\d{4}-(\d{2})-(\d{2})/)
  let returnString = match[2] + "/" + match[1]

  return returnString
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