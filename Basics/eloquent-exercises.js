

// loopTriangle(5);
// fizzBuzz(20)
// console.log(sum(range(1,5,2)))
// console.log(mergeToOne([[1,2,3],[4,5,6] , [7,8,9]]))
// loop(3, n => n > 0, n => n - 1, console.log);
console.log(every([1, 3, 5], n => n < 10));

function loopTriangle(lines) {

	var outputString = "";

	for (var i = 0; i < lines; i++) {
		for(var j = 0; j <= i; j++) {
			outputString+="#"
		}
		outputString+="\n"
	}

	console.log(outputString);

}

function fizzBuzz(maxNumber) {

	for (let i = 1; i <= maxNumber; i++) {
	
		var outputString = ""
		if (i % 3 == 0) {
			outputString+="Fizz"
		}

		if (i % 5 == 0) {
			outputString+="Buzz"
		}

		if(outputString.length == 0) {
			console.log(i)
		} else {
			console.log(outputString)
		}
	}

}


/*
  Returns range between number including themselves.
*/
function range(start,end,step = 1) {

	var absoluteStep = Math.abs(step)

	var listOfNumbers = []

	for (i = start ; i <= end; i+=absoluteStep ) {
		listOfNumbers.push(i)
	}

	return listOfNumbers

}



/*
  Returns the sum of the numbers
*/
function sum (numbers) {
	
	var totalSum = 0

	for (let number of numbers) {
		totalSum+=number
	}

	return totalSum
}

/*
 merge all the arrays and return single array.
*/
function mergeToOne(arrayOfArrays) {

	return arrayOfArrays.reduce((a,b) =>  a.concat(b))

}

/*
 My own loop
*/
function loop(startValue,testCondition,updateCondition,bodyFunction) {

	while(testCondition(startValue)) {
		bodyFunction(startValue)
		startValue = updateCondition(startValue)
	}

}


/*
	run validation on every element of array and return true if 
	all the array element passes the condition
*/
function every(array,testFunction) {
	
	for (let item of array) {
			if(!testFunction(item))  {
				return false
			}
	}

	return true
}











