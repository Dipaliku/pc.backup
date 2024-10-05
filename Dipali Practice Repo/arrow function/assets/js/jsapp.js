var cl = console.log;

cl(add (20, 60));

function add(x, y){
	return x + y;
};

cl(add (20, 60));

//cl(add1 (90, 60));

const add1 = function(x, y){
	return x + y;
};

cl(add1 (90, 60));


//arrow function -

const add3 = (x, y) => {
	return x + y;
};

cl(add3 (2515, 66256));


const sub4 = (x, y) => {
	return x - y;
};

cl(sub4 (.2513, 6.5459));

const mult = (x, y) => {
	return x * y;
};

cl(mult (256.2513, 6.5459));

const doubAmount = amount => {
	
	return amount * 2 
}

cl(doubAmount (400));

const doubAmount1 = amount => amount * 2
	
cl(doubAmount1 (500));

let person = {
	fname : "Nitin",
	lname : "vagle",
	fullname : () =>{
		//cl(this)
		return `${this.fname} ${this.lname}`
	}
};

cl(person.fullname());