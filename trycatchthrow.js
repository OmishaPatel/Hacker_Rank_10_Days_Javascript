//Try, Catch and Finally

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        console.log(s.split('').reverse().join(''))
    } 
    catch (e) {
        console.log(e.message)
        
          console.log(s)  
    }   
    
 }

// Arrays
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    const sortNums = nums.sort(function(a,b) {return b-a});
    const secondLargestNum = [...new Set(sortNums)];// Values in set can be either strings, integers and arrays. Basically set is an array with no repeated elements
    return secondLargestNum[1]
}
//Throw
/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    try {
        if(a < 0) {
            throw "Negative Error"
        } 
        else if (a === 0) {
            throw "Zero Error"
            } 
        else {
            return "YES"
            }
        
    } catch(e) {
        return e;
    }
}
