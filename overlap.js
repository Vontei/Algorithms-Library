// var timeOne = new Date("December 25, 2015")
// var timeTwo = new Date("December 27, 2015")
// var a = Date.parse(timeOne)
// var b = Date.parse(timeTwo)
// var diff = (b-a)
// var dayDiff = (diff / (24*60*60*1000))

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
		end: new Date("March 22, 2015")
	},
	event2: {
		start: new Date("March 21, 2015"),
		end: new Date("March 24, 2015")
	},
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

function isOverlap(t1,t2){
  if (Date.parse(t1.start)>Date.parse(t2.start)){
    var z = new DateMeasure(t1.start-t2.start);
    var startDiff = new DateMeasure(t1.end-t1.start)
    if(startDiff.days<z.days){
      console.log('The timespans are ' + (z.days-startDiff.days) + ' days apart')
    }
  }
}


function diffIt(t1,t2){
  var overall = new DateMeasure(t2.end-t1.start);
  var startDiff= new DateMeasure(t1.end-t1.start)
  var endDiff = new DateMeasure(t2.end-t2.start);
  if ((overall.days-startDiff.days)<endDiff.days){
    var overlap = new DateMeasure(t1.end-t2.start)
    var time;
    overlap.days>1 ? time='days' : time='day';
    console.log('These dates overlap by ' + overlap.days+ ' ' + time)
  }
}

diffIt(timespans.event1, timespans.event2)

// isOverlap(timespans.christmas, timespans.halloween)
