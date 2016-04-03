function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

var updateClock = function() {
    var now = new Date(), // current date
        months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November']; // you get the idea
    var time = formatAMPM(now);

        // a cleaner way than string concatenation
        var date = [months[now.getMonth()], now.getDate(), now.getFullYear()].join(' ');

    // set the content of the element with the ID time to the formatted string
    return [date, time].join(' ');

    // call this function again in 1000ms
}

module.exports = {
	getTime: updateClock
}