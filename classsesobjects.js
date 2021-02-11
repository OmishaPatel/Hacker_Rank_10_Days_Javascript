// Classes
/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor(side) {
        this.side = side;
    }
    perimeter() {
         return this.side.reduce((total, curr) => total + curr, 0);//using reduce method
       //using for loop
        let sum  = 0;
        for (let i of this.side) {
            sum += i
        }
        return sum;
    }
}


// Objects

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
//using for loop
function getCount(objects) {
    let count = 0;
    for (let i of objects) {
        if(i.x === i.y) {
            count++;
        }
    }
    return count;
}
//Using filter method
function getCount(objects) {
    return objects.filter((object)=> object.x == object.y).length;
}
//Using forEach
function getCount(objects) {
    let count = 0;
    objects.forEach((object => {
        if(object.x == object.y) {
            count++;
        }
    }))
    return count
}

// Create a rectangle object
/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2 *(a+b);
    this.area = a * b;
}

