const Moment = require('moment');
const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(Moment);


const firstDay = moment(startDate).startOf('month')
const endDay = moment(startDate).endOf('month')
monthRange = moment.range(firstDay, endDay);
let weeks = []
for (let mday of monthRange.by('days')) {
   if (weeks.indexOf(mday.week()) === -1) {
       weeks.push(mday.week());
   }
}


let calendar = []
for (let index = 0; index < weeks.length; index++) {
   var weeknumber = weeks[index];
   firstWeekDay = moment(firstDay).week(weeknumber).day(0);
   if (firstWeekDay.isBefore(firstDay)) {
       firstWeekDay = firstDay;
   }
   lastWeekDay = moment(endDay).week(weeknumber).day(6);
   if (lastWeekDay.isAfter(endDay)) {
       lastWeekDay = endDay;
   }
   weekRange = moment.range(firstWeekDay, lastWeekDay)
   calendar.push(weekRange)
}

