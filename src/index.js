module.exports = function multiply(first, second) {
  let firstArray = first.split('').reverse();
  let secondArray = second.split('').reverse();
  let outputArray = [];
  for (let i = 0; i <= firstArray.length-1; i++) {
      for (let j = 0; j<=secondArray.length-1; j++) {
        multiplyFirstSecond = firstArray[i]*secondArray[j];
        if (outputArray[i+j]) {
          outputArray[i+j] =outputArray[i+j] + multiplyFirstSecond;
        }
        else {
          outputArray[i+j] = multiplyFirstSecond;
        }    
      }
  }
  for (let i = 0; i <= outputArray.length-1; i++) {
      let octatok = outputArray[i]%10;
      let perenos = Math.floor(outputArray[i]/10);
      if (perenos) {
        if (outputArray[i+1]) {
          outputArray[i+1] = outputArray[i+1] + perenos;
          outputArray[i] = octatok;
        }
        else {
          outputArray[i+1] = 0;
          outputArray[i+1] = outputArray[i+1] + perenos;
          outputArray[i] = octatok;

        }
      }
  }
  
  return outputArray.reverse().join('');
}
