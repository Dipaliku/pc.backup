var cl = console.log;

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
 
cl(companies);

let companyname = [];

for(let i = 0; i < companies.length; i++){
	
	companyname.push({
		CompanyName : companies[i].name,
		Duration : companies[i].end - companies[i].start
	}
	)
	
}

console.table(companyname);

let compNameArray = [];
 
companies.forEach((comp) => {
	compNameArray.push({CompanyName:comp.name, Duration:comp.end - comp.start});
})

console.table(compNameArray);

let compNameArray1 = [];

companies.forEach(comp1 => compNameArray.push({CompanyName:comp1.name, Duration:comp1.end - comp1.start}));

console.table(compNameArray1);

const company = companies.map((com) => {
	
	return {CompanyName:com.name, Duration:com.end - com.start};
	
});

console.table(company);


const company1 = companies.map((com1) => ({CompanyName:com1.name, Duration:com1.end - com1.start}));

console.table(company1);