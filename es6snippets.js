//----Map ES6----
const doubleChar = (str) => str.split("").map(c => c + c).join("");
//----Spread operator and Set----
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
//----Reduce ES6----
arr.reduce((prevVal, elem) => prevVal + elem, 0);

