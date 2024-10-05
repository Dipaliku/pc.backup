var cl = console.log;

var getDate = new Date();

cl(getDate, typeof getDate);

document.write(getDate);

var pastDate = new Date(1994, 5, 10, 4, 31, 90);

cl(pastDate);

var pastDate1 = new Date(2005, 4, 2, 6, 20, 90);

cl(pastDate1);

var fDate = new Date(2080, 6, 12);

cl(fDate);

var fDate1 = new Date(2090);

cl(fDate1);

var fDate2 = new Date(99900000);

cl(fDate2);

var fDate3 = new Date(-99900000);

cl(fDate3);

var ml = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var d = new Date("feb 14, 2020, 14:25:36");

var dYear = d.getFullYear();

cl(dYear);

var dMonth = d.getMonth();

cl(dMonth);

var dHours = d.getHours();

cl(dHours);

var dMin = d.getMinutes();

cl(dMin);

var dSec = d.getSeconds();

cl(dSec);

var dMSec = d.getMilliseconds();

cl(dMSec);

var Weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

var dDay = d.getDay();

cl(dDay);

cl(Weekday[dDay]);

var fDate4 = new Date(0);

cl(fDate4);

var dTime = d.getTime();

cl(dTime);

var currMilli = Date.now();

cl(currMilli);

var setDate = new Date();

cl(setDate);

setDate.setFullYear(3035);

cl(setDate);

setDate.setMonth(9);

cl(setDate);

setDate.setDate(25);

cl(setDate);

setDate.setHours(1);

cl(setDate);

setDate.setMinutes(35);

cl(setDate);

setDate.setSeconds(90);

cl(setDate);

setDate.setMilliseconds(2500);

cl(setDate);