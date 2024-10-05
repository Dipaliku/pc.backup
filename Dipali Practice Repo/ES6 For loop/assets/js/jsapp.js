let cl = console.log;

let skills01 = ['html','css','javascript','angular','php','sass'];
cl(skills01);

let skills1 = document.getElementById('skillsList');
cl(skills1);

let result = `<ul class='list-group'>`;
for(let skills = 0; skills < skills01.length; skills++){
	
	result += `<li class="list-group-item"> ${skills01[skills]} </li>`;
} 
result += `</ul>`;

cl(result);

skills1.innerHTML = result;


let name_list = ['rohit','mohit','sonu','rahul','prakash'];
cl(name_list);

let nameList = document.getElementById('name_List');
cl(carList);

let name_1 = `<ul class='list-group'>`;

for(let name = 0; name < name_list.length; name++){
	
	name_1 += `<li class="list-group-item"> ${name_list[name]} </li>`;
}
name_1 += `</ul>`;

cl(name_1);

nameList.innerHTML = name_1;


let colors= ['red','pink','yellow','green','white','black'];
cl(colors);

let colorsList = document.getElementById('colors-list');
cl(colorslist);

let colors_1 = `<ul class='list-group'>`;

for(let colors01 = 0; colors01 < colors.length; colors01++){
	
	colors_1 += `<li class='list-group-item'> ${colors[colors01]} </li>`;
}
colors_1 += `</ul>`;

cl(colors_1);

colorsList.innerHTML = colors_1;