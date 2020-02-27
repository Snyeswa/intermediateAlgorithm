// Sum All Numbers in a RangePassed
//Pass an array of two numbers.
//Return the sum of those two numbers plus the sum of all the numbers between them.
//The lowest number will not always come first.
// Create a function that accepts an array as an argument

function sumAll(arr) {
    //let create a variable to put keep result 
    var keep = 0

    //let sort array form high to low 
    arr.sort((a,b) => {
		return a - b;
	});
    // let's loop through the sorted array created
    for (var i = arr[0]; i <= arr[1]; i++) {
		
		keep += i;
    // Add each number to the result variable and return the variable
  }
  return keep;
}
  
  console.log(sumAll([5, 10]));