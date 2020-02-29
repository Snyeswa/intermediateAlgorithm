// Intermediate Scripting Seek And Destroy
//Remove all elements from the initial array that are of the same value as these arguments.
// Use the arguments object.


function destroyer(arr, ...elements) {
    // Remove all the values
     var i = 0;
      while(i<= arr.length){                    
          //for each element into array 
        for(let j =0; j< elements.length; j++){ //foreach "elements"
// Compare element arr==element
          if(arr[i] == elements[j]){         
            arr.splice(i,1);  
            //If are equal delete from arr
            //Check again the same position
            i--;                               
            j=0;  
    //Stop for loop
            break;                             
          }
        }
        i++;
      }
       return arr;
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
  