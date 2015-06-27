var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

//this function represents the last day of the month, not total number of days
//month+1 makes the months 1-indexed; having '0' in the day param means that the functions rolls back to the last day of the previous month, since there is no June 0, 2015
daysInMonth: function(year, month) {
  return new Date(year, month+1, 0).getDate(); 
}

//gets month and 4-digit year of today's date
currDate = new Date();
currMonth = currDate.getMonth();
currYear = currDate.getFullYear();

//closure for daysInMonth function
numOfDays = daysInMonth(currYear, currMonth);

//uses year and month of today's date, plus the 1st of the month in the day param
//getDay() is an integer 0-6 representing the weekday
var firstDay = new Date(currYear, currMonth, 1);
var startingDay = firstDay.getDay();

var MonthModel = Backbone.Model.extend({
  defaults: {}  
});// closes DayModel

//loop for 12 months
var newMonth = function(){
  for (i=0; i<12; i++) {
    newColl.add({
      year: currYear,
      month: i,
      monthLength: daysInMonth(currYear,i),
      monthStart: new Date(currYear, i, 1).getDay();
    });
  }
}

var MonthView = Backbone.View.extend({
  model: MonthModel;
  //header to list days of the week on calendar
  render: function() {
    var html1 = '<table class="cal-table">';
    var html2 = html1 += '<tr><th colspan="7">';
    var html3 = html2 += '</th></tr>';
    var html4 = html3 += '<tr class = "cal-header">';
     for (i=0; i<=6; i++) {
      var html5 = html4 += '<td class="cal-header-day">';
      var html6 = html5 += dayNames[i];
      var html7 = html6+= '</td>';
     }
    var html8 = html7 += '</tr><tr>';

    this.$el.html(html8);
  }
});// closes MonthView

var MonthColl = Backbone.Collection.extend({
  model: MonthModel,

  initialize: function() {
    this.listenTo(this.collection, 'add', this.addView);
  },
  addView: function() {
    var view = new MonthView({model:MonthModel});
    view.render();
    this.$(#calendardiv).append(view.$el);
  }


});//closes MonthColl

var newColl = new MonthColl();




