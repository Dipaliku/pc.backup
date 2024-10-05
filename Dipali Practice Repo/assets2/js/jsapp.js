var fullname = 'sumit';
var lastname = 'kulkarni';
var place = 'Latur';
var profile = 'software testing';
var company = 'itc'
var contact='12345';


var result = 'Hello I am '+ fullname + ' ' + lastname + ' From ' + place + '. '+ 'I am working as a '+ profile + ' in ' + company+ '.'contact';

var information = document.getElementById("information");
information.innerHTML = result;
console.log(result);