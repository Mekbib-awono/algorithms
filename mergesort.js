function divide(input) {
    
    if (input.length <= 1 ) {
        return input;
    }
    const middle = Math.floor(input.length / 2)
    const left = input.slice(0, middle);
    const right = input.slice(middle);
    
    return conquer(divide(left), divide(right));
}

function conquer(left, right) {
    console.log("left: ", left);
    console.log("right: ", right);
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

input = [5, 4, 1, 8, 7, 2, 6, 3];

divide(input);