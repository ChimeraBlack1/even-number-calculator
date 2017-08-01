const RangeFinder = {

	evens: [],
	min: [],
	max: [],
	ranges: [],
	errorMsg: "",

 	addRange: function (MIN, MAX) {

 		if(MAX > 9999999) {
 			alert("Sorry, that number is too big for us...");
 			return;
 		}

 		if(MIN === "" || MAX === "") {
 			alert("you must enter a MIN and MAX value...");
 			return;
 		} 

 		if(MIN - MAX >= 0) {
 			alert("Your MIN must be higher than your MAX...");
 			return;
 		}

			//grab user's desired range

 		if (MIN < MAX) {
 			// save user's desired range
	 		this.ranges.push({
	 			min: MIN,
	 			max: MAX
	 		});
 		} 
 	},

 	findEvens: function (MIN, MAX) {

		var evenNumbers = 0;		
		var minimum = parseInt(MIN, 10);
		var maximum = parseInt(MAX, 10);

		this.min.push(minimum);
		this.max.push(maximum);

 		for(var i=minimum; i < maximum; i++){
			
			 if(i % 2) {
				evenNumbers++;
			}

		}

		this.evens.push(evenNumbers);


 	},
}

export default RangeFinder;