1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   "Math.random()
   The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user."

function getRandomInt(max) {
return Math.floor(Math.random() \* max);
}

console.log(getRandomInt(3));
// expected output: 0, 1 or 2
