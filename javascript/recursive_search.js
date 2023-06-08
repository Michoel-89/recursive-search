function recursiveSearch(arr, target, i = 0) {
  if (i >= arr.length) {
    return false
  }
  if (arr[i] === target) {
    return true
  }
  return recursiveSearch(arr, target, i + 1)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution
