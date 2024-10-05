let cl = console.log;

let fname = 'rahul';
let lname = 'takalikar';
let age = 32;
let nativePlace = 'omerga';
let profile = 'eng';

// Hello there , I'm rahul takalikar , from omerga and my age is 32 ,
//and I'm software eng by profession.

let result = `Hello there , I'm ${fname} ${lname} , from ${nativePlace} and my age is ${age} , and I'm ${profile} software eng  by profession .`;
cl(result);

let info = document.getElementById('info');

info.innerHTML = result;

