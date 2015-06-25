$(document).ready(function() {

  var DayModel = Backbone.Model.extend({
      defaults: {"day" : 0, "weekday":"", "month":0},
      initialize: function() {
        var calDate = new Date();
        var weekday = new Array(7);
        weekday[0]=  "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        console.log(weekday[calDate.getDay()]);
      }
  });

  var day = new DayModel();


  var DayView = Backbone.View.extend({
    render: function() {
      var dayNum = this.model.get("day");
      var dayWeekday = this.model.get("weekday");
      this.$el.html(dayNum);
    }
  });

  // var calArr = []
  // for (m=0; m<12; m++) {
  //   calArr.push(this.m[i])
  // }

  //new Date(year, month[i], day[i])

  var DayColl = Backbone.Collection.extend({
    model: DayModel
  });

  var DayCollView = Backbone.View.extend({
    render: function() {
      var today = new Date
      var year = today.getDate();
      var day = today.getDay();
      var month = today.getMonth();
      
      function daysInMonth(month,year) {
        return new Date(year, month+1, 0).getDate();
      }
      console.log(daysInMonth(5, 2015));

      var calTable = '<table border="1" style="width:100%"><tr><td>Hello</td></tr><tr></tr><tr></tr><tr></tr><tr></tr></table>'
      this.$el.html(calTable + today);
    },
    initialize: function(){
      this.calArr = [];
    }
  });

  var dayColl = new DayColl();
  var dayCollView = new DayCollView({
    collection:dayColl
  });
  var dayView = new DayView({
    model:day
  });

  dayCollView.render();
  dayView.render();

  $("#calendardiv").append(dayView.$el);
  //$("#calendardiv").append(dayCollView.$el);

});