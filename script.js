// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50)

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(isOver25)

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


// Part 1: Math Problems
// Check if all numbers are divisible by 5. Cache the result in a variable.
const isDivBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0
console.log(isDivBy5) // true

// Check if the first number is larger than the last. Cache the result in a variable.
const isOver5 = (n1 > n4) 
console.log(isOver5) // true

// arithmetic chain:
let chain = (n1 - n2)
console.log(chain) // -5

let chain2 = (chain * n3)
console.log(chain2) // -100

let chain3 = (chain / n4)
console.log(chain3) // -1

// let chain4 = ()



// Part 2: Practical Math
// variables for each miles, use const, use string concatnation

const disTrip = 1500
const mph55 = 55
const mph60 = 60
const mph75 = 75
// const mph55 = ("30 miles per gal @ 55 mph")
// const mph60 = ("28 miles per gal @ 60 mph")
// const mph75 = ("23 miles per gal @ 75 mph")
const mpg30 = 30
const mpg28 = 28
const mpg23 = 23
const fuel = 175
const avgFpg = 3

let gal1 = (disTrip / mpg30)
console.log(gal1) // 50

let gal2 = (disTrip / mpg28)
console.log(gal2) // 53.571

let gal3 = (disTrip / mpg23)
console.log(gal3) // 65.217

let hr1 = (disTrip / mph55)
console.log(hr1)

let hr2 = (disTrip / mph60)
console.log(hr2)

let hr3 = (disTrip / mph75)
console.log(hr3)
