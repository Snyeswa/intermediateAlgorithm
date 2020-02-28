// Intermediate Scripting Diff Two Arrays
//Compare two arrays and return a new array with any items.
//Only found in one of the two given arrays, but not both. 
// In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
    var newArr = [];
    // destroy array in both array by running a double loop through arr1, and arr2.
for(var i =0; i < arr1.length; i++){
  for(var j =0; j < arr2.length; j++){
    if (arr2[j]=== arr1[i]) {
      arr2.splice(j, 1);
      arr1.splice(i, 1);
      j--
    }
  }
}

newArr = arr1.concat(arr2);

    // Same, same; but different.
    return newArr;
  }
  
 console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
  