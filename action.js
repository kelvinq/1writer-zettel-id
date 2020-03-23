// For use with the iOS app 1writer - http://1writerapp.com/
// Generates unique Zettel ID in yyyymmddhhss date format with leading zeros
// An improvement upon - http://1writerapp.com/actiondir/action/f2c27

function appendLeadingZeroes(n){
  if(n <= 9){
    return "0" + n;
  }
  return n
}

let current_datetime = new Date()
let formatted_date = current_datetime.getFullYear() + appendLeadingZeroes(current_datetime.getMonth() + 1) + appendLeadingZeroes(current_datetime.getDate()) + appendLeadingZeroes(current_datetime.getHours()) + appendLeadingZeroes(current_datetime.getMinutes())

editor.replaceSelection(formatted_date);
