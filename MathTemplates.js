function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num % i == 0)
            return false;
    }
    return true;
}

//----Reverse Number----

function revNum(num){
  num = (num+'').split("").reverse().join("");
  return Number(num);
}
//----Подсчет одинаковых элементов в массиве----

function count(arr,num) {
    var resArr = arr.filter(function(elem) {
      return elem == num;
    });
    return resArr.length;
}

//----Factorial----

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

//----НОД----
 function NOD(a,b){
  a=Math.abs(a); b=Math.abs(b);
  while(a&&b)a>=b?a%=b:b%=a;
  return a||b
} 


