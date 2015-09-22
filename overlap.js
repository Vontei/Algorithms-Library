var timespans = {
  christmas: {
		start: new Date("December 25, 2015"),
		end: new Date("December 26, 2015")
	},
	halloween: {
		start: new Date("October 31, 2015"),
		end: new Date("November 1, 2015")
	},
  event1: {
		start: new Date("March 20, 2015"),
		end: new Date("March 24, 2015")
	},
	event2: {
		start: new Date("April 21, 2015"),
		end: new Date("April 28, 2015")
	},
  event3: {
		start: new Date("March 19, 2015"),
		end: new Date("March 20, 2015")
	},
	event4: {
		start: new Date("March 19, 2015"),
		end: new Date("March 22, 2015")
	}
}

function DateMeasure(ms) {
  var d, h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;

  this.days = d;
  this.hours = h;
  this.minutes = m;
  this.seconds = s;
};

function diffIt(t1,t2){
  var overall = new DateMeasure(t2.end-t1.start);
  console.log(overall)
  var startDiff= new DateMeasure(t1.end-t1.start)
  var endDiff = new DateMeasure(t2.end-t2.start);
  var time;
  if ((overall.days-startDiff.days)<endDiff.days){
    var overlap = new DateMeasure(t1.end-t2.start)
    overlap.days>1 ? time='days' : time='day';
    console.log('These dates overlap by ' + overlap.days+ ' ' + time)
  }
  else{
    var daysApart = new DateMeasure(t2.start-t1.end)
    console.log('These events are separated by ' + daysApart.days + " days")
  }
}

diffIt(timespans.event3, timespans.event4)
