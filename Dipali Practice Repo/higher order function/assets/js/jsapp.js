var cl=console.log;

	let nums=[10,21,30,41,50,61,70,81,90];
	
	for(let i=0;i<nums.length;i++){
		cl(nums[i]);
	}
	
	
	//HOF->Higher Order function
	//a function which accepts another function as an argument is known as hogher order function
	//callback function -> A function which is passed as an argument to another function is known as callback function
	
	
	//forEach is a Higher Order Function 
	
	
	
	
	
	//print only odd values 
	
	//using for loop
	for(let i=0;i<nums.length;i++){
		if(nums[i]%2 !==0){
			cl(nums[i])
		}
	}
	//using forEach 	
	nums.forEach(function(num){
		if(num%2!==0){
			cl(num)
		}
	})
	
	/*
	nums.forEach(num => {
		if(num%2!==0){
			cl(num)
		}
	})
	