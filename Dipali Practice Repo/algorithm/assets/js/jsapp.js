var cl = console.log;

// print random number -

function printRN (min, max){
	return (min + Math.floor(Math.random()*(max - min + 1)));
}

var printN = printRN(1,20);

cl(printN);

//reverse string -

let str1 = "I Love HTML.";

//let RStr = "";

//for(let i = str.length - 1; i >= 0; i--){
	//cl(str[i]);
	//RStr += str[i]
//};

//cl(RStr);

//const REstr = (str) =>{
	//let RevStr = "";
	//for(let i = str.length - 1; i >= 0; i--){
		//RevStr += str[i];
	//}
	//return RevStr;
//};

//let result = REstr(str1);
//cl(result);

const ReStr = (str) => {
	let result = str.split('').reverse().join('');
	
	return result;
};

cl(ReStr(str1));

//Largest number - 

let nums = [12, -52, 658, 58, 95, 61];

const MaxN = (arr) => {
	let MN = arr[0];
	for(let i = 0; i < arr.length; i++){
		if(MN < arr[i]){
			MN = arr[i];
		};
	}
	return MN;
};

cl(MaxN(nums));

let MN = nums[0]

for(let i = 0; i < nums.length; i++){
		if(MN < nums[i]){
			MN = nums[i];
		}
};

cl(MN);

const FMN = (arr) => {
	return Math.max(...arr)
}

cl(FMN(nums));

let nums1 = [
	[415,63,956],
	[52,732,[63,321,899]],
	[82,[31,23],5674,31]
];

//let NNums = nums.flat(1);//to convert it into single arr.

//cl(NNums);

//const FMN1 = (arr) => {
	//let FlatA = arr.flat(Infinity);
	//let MN1 = Math.max(...FlatA);
	//return MN1;
//}
//cl(FMN1(nums1));

const FMN2 = (arr) => {
	let MArr = [];
	arr.forEach(n =>{
		MArr.push(Math.max(...(n.flat(Infinity))))
	});
	return MArr;
};

cl(FMN2(nums1));

//remove Duplicate number -

let Dnums = [1,32,32,6,4,6,9,6,1,3,7,6,1];

//let DN = [1,2,3];

//let x = 32;

//if(!nums.includes(x)){
	//DN.push(x);
//}
//cl(DN);

//if(nums.indexOf(x)){
	//DN.push(x);
//}
//cl(DN);

const dn = (arr) =>{
	let result = [];
	arr.forEach((n1) =>{
		if(!result.includes(n1)){
			result.push(n1);
		}
	});
	return result;
}

cl(dn(nums));

let n3 = [12,6,5,6,62,94,612,365,12,21,62,365,612];

cl([...new Set(n3)]);