// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function multiples(num) {
  if (num === 0) return num;
  if (num % 3 == 0 || num % 5 == 0) {
    return num + multiples(num - 1);
  } else {
    return multiples(num - 1);
  }
}

const result = multiples(1000);
console.log(result);