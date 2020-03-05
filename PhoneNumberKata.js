// A function that accepts an array of 10 integers (between 0 and 9),
// that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
    let fst = numbers.slice(0, 3).join('')
    let scnd = numbers.slice(3, 6).join('')
    let thrd = numbers.slice(6, 10).join('')
    console.log(`(${fst}) ${scnd}-${thrd}`)
  }
  
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
  // => returns "(123) 456-7890"
  //  "(123) 456-7890");
  createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) 
  //  "(111) 111-1111");
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) 
   //  "(123) 456-7890");