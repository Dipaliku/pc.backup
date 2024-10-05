let cl = console.log;

// Filter 
//it also returns array 
// we have given array , at least one condition 
//we have to create a new array , of the element[given array ] who pass given condition/s 
//length of new array may or may not equal to given array 

// includes >> HOF >> to find/get  of given word/number from given array 
//chaining is used bind/chain two different methods 

let nums = [10, 23,78,21,34,45,34,42,31,22,50,30];
cl(nums);

/*let evenNo = nums.filter(num => {
	if(num % 2 === 0){
		return true 
	}else{
		return false
	}
})
cl(evenNo);*/

//after refactor 

let evenNo = nums.filter(num => num % 2 === 0)
cl(evenNo);

//canDRIVE 

let canDrive = nums.filter(ages => ages >= 18)
cl(canDrive);



// Array of comp whos catg is retail and start in 80s []
// Array of comp whos catg is retail and start in 80s [{compName , duration}]
// Array of comp who run for at lest 10 years and catg is retail >> []
// Array of comp who run for at lest 10 years and catg is retail >> [{compName . filfespan : '1981-2003'}]
// Array of comp whos catg is retail or finance []
// Array of comp whos catg is retail or finance [{compName , duration}]

let companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

let compR = [];

for(let i = 0 ; i < companies.length;i++){
	if(companies[i].category.includes('Retail') && companies[i].start >= 1980 && companies[i].start <= 1989)
	compR.push(companies[i]);	
}
cl(compR);

let compretail = companies.filter(comp => {
	return comp.category.includes('Retail') && comp.start >= 1980 && comp.start <= 1989
}).map(comp => {
	return {
		compName : comp.name,
		duration : comp.end - comp.start 
	}
})
cl(compretail);

let comp10retail = [];

for(let i = 0 ; i < companies.length  ; i++){
	if(companies[i].end - companies[i].start >= 10 && companies[i].category.includes('Retail'))
		//cl(companies[i]);
	comp10retail.push(companies[i]);
}
cl(comp10retail);


let comp10 = companies.filter (comp => {
	return comp.end - comp.start >= 10 && comp.category.includes('Retail')
})

cl(comp10);


let comp10obj = companies.filter (comp => {
	return comp.end - comp.start >= 10 && comp.category.includes('Retail')
}).map( comp => {
	return {
		compName : comp.name,
	    lifespan : `${comp.start} - ${comp.end}`
	}
}) 

cl(comp10obj);


let compboth = [];

for(let i = 0 ; i < companies.length ; i++){
	if(companies[i].category.includes('Retail') || companies[i].category.includes('Finance')){
		compboth.push(companies[i]);
	}
}
cl(compboth);

let compboth1 = companies.filter(comp => {
	return comp.category.includes('Retail') || comp.category.includes('Finance')
})
cl(compboth1);

let compboth2 = companies.filter(comp => {
	return comp.category.includes('Retail') || comp.category.includes('Finance')
}).map(comp => {
	return {
		compName : comp.name,
		duration : comp.end - comp.start
	}
})
cl(compboth2);











