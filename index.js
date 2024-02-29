// function hasTargetSum(array, target) {
//   // Write your algorithm here
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === target) return true;
//     }
//   }
//   return false;
// // }
function hasTargetSum(array, target) {
  let seeNumbers = {};
  for (let number of array) {
    const complement = target - number;
    if (complement in seeNumbers) return true;
    seeNumbers[number] = true;
  }
  return false;
}
/* 
  Write the Big O time complexity of your function here
  hasTargetsum([1,2,3,4] 6)
  seenNumbers={
    1: true,
    2:true,
    3:true
  }
*/

/* 
  Add your pseudocode here
  creat an object to keep tack of seenNumbers
  iterate throuch each number in array
*/

/*
  Add written explanation of your solution here
  create an object to keep track of numbers we've already seen 
  iterate through each number in the array
  for the current num. indentify a complement that adds to the target(comp = target - num)
  check if any key on our object is the complemet
  if so , return true,
  otherwise add that number to the ocject.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
