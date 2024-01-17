function mergeSort(arr) {
  // Dont understand why this works lol
  const merge = (leftArr, rightArr) => {
    let result = [];

    while (leftArr.length && rightArr.length) {
      if (leftArr[0] < rightArr[0]) {
        result.push(leftArr.shift());
      } else {
        result.push(rightArr.shift());
      }
    }

    return [...result, ...leftArr, ...rightArr];
  };

  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

const reuslt = mergeSort([105, 79, 100, 110]);

console.log(result);
