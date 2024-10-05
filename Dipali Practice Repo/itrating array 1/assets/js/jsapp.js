 var cl = console.log;

var skills = ["Angular","bootstrap","css","javascript","css","html"];

cl(skills);

var skills0 = document.getElementById("skill-list");

var result = " ";

for(var i = 0; i < skills.length; i++){
  
  result += "<li class='list-group-item'>" + skills[i] + "</li>";
  cl(result);
  
}

skills0.innerHTML = result;



Reso