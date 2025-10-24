function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆

  //Write your code here:
  for (let i = 0; i < n; i++) {
    if (n === 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      let fibArray = [0, 1];
      for (let j = 2; j < n; j++) {
        fibArray.push(fibArray[j - 1] + fibArray[j - 2]);
      }
      return fibArray;
      //Return an array of fibonacci numbers starting from 0.
    }
  }
  //Do NOT change any of the code below 👇
}
