//  a function that returns the sum of the two lowest positive numbers in an array

function sumTwoSmallestNumbers(numbers) {  
    let sorted = numbers.sort(function(a,b) {return a - b});
    let sum = sorted[1] + sorted[0]
    console.log(sum)
   }
   
   sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])
   // 3453455
   sumTwoSmallestNumbers([5, 8, 12, 19, 22])
   //  13
   sumTwoSmallestNumbers([15, 28, 4, 2, 43])
   //  6 
   sumTwoSmallestNumbers([3, 87, 45, 12, 7])
   //  10 
   sumTwoSmallestNumbers([23, 71, 33, 82, 1])
   //  24
   sumTwoSmallestNumbers([52, 76, 14, 12, 4])
   //  16
   