var cl = console.log;

var x = 10;
var y = 40;
var z = "225";
var c;
var k = null;
var r = true;//1
var q = false;//0

var b = x + y;

cl(b, typeof b);

var a = x + z;

cl(a, typeof a);

var a = x - z;

cl(a, typeof a);

var a = y * z;

cl(a, typeof a);

var a = x / z;

cl(a, typeof a);

var a = c + z;

cl(a, typeof a);

var a = c + y;

cl(a, typeof a);

var a = k + z;

cl(a, typeof a);

var a = y % x;

cl(a, typeof a);

var a = k + x;

cl(a, typeof a);

var a = y + r + q;

cl(a, typeof a);

var a = z + r + q;

cl(a, typeof a);

var a = x + y + z + c + k + r + q;
 
cl(a, typeof a);

var a = x - y - z - c - k - r - q;
 
cl(a, typeof a);

var a = x + y + q + c + k + r + z;
 
cl(a, typeof a);

var a = x - y - r - c - k - z - q;
 
cl(a, typeof a);

var a = z + y + q + c + k + r + x;
 
cl(a, typeof a);


var e = 355;
var f = 55;
var v = "751";
var m;
var n = null;
var o = true;//1
var p = false;//0

var t = e + f + v + m + n + p + o;

cl(t, typeof t);

var t = e - p - o - m - n - v - f;

cl(t, typeof t);

var t = e + x + b + c + k + m + o + p + q + r + z;

cl(t, typeof t);

var t = e - x - b - c - k - m - o - p + q + r + z;

cl(t, typeof t);

var t = e + x + b + c - k - m - o - p + q + r + z;

cl(t, typeof t);

var t = e - x - b - c - k - m - o - p - q - r - z;

cl(t, typeof t);

var a = x + z + m + o + p + k + c + b + r + q + e;

cl(a, typeof a);

var a = x - z - m - o - p - k - c + b - r - q - e;

cl(a, typeof a);

var t = a + m + o + p + k + c;

cl(t, typeof t);

var a = x - z - t - b - r - q - e;

cl(a, typeof a);

