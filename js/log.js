Parse.initialize("Ev4XRFuG0iDcUdCBq0JanVIuAueog5retziCAj3V", "mbi22SZ5rZlnH4hfWGxWoVcx3qNbkEBzEcrnI8Gj");

$(document).ready(function() {

  $.getJSON("http://jsonip.com?callback=?", function(data) {

    var now = moment();

    var VisitLog = Parse.Object.extend("log");
    var visitLog = new VisitLog();

    visitLog.set("ip", data.ip);
    visitLog.set("year", moment(now).year());
    visitLog.set("month", moment(now).month() + 1);
    visitLog.set("day", moment(now).date());
    visitLog.set("hour", moment(now).hour());
    visitLog.set("minute", moment(now).minute());
    visitLog.set("second", moment(now).second());

    visitLog.save(null, {
      success: function(gameScore) {
        // Execute any logic that should take place after the object is saved.
      },
      error: function(gameScore, error) {
        // Execute any logic that should take place if the save fails.
      }
    });

  });

});
