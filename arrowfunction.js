// Arrow function
/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    const newArray = nums.map(num => num % 2 ? num * 3 : num *2);
    return newArray
}


// Template literals
/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    //ES6 destructuring
    let area = expressions[0]
    let perimeter = expressions[1]
    
    let a1 = (perimeter+Math.sqrt(perimeter*perimeter-16*area))/4;
    let a2 = (perimeter-Math.sqrt(perimeter*perimeter-16*area))/4;
    
    return [a1,a2].sort()
}

