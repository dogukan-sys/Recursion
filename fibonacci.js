// Using for loop for Fibonacci sequence
function fibs(times) {
  array = [];
  let currentNum = 0;
  let prevNum = 0;
  for (let i = 0; i < times; i++) {
    array.push(currentNum);
    currentNum == 0 ? (currentNum = 1) : (currentNum = currentNum + prevNum);
    prevNum = array[array.length - 1];
  }
  return array;
}

function fibsRec(n) {
  const fib = (x) => {
    if (x < 2) return x;
    return fib(x - 1) + fib(x - 2);
  };
  array = [];
  for (let i = 0; i < n; i++) {
    array.push(fib(i));
  }
  return array;
}
