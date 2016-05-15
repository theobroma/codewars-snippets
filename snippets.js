/*
# ===============================================
#   Public метод
# ===============================================
*/

function summarize() {
	var fArr = [1,2,3,4];
  this.makeSum = function() {
  		fArr.forEach(function(entry) {
		console.log(entry);
	});
  };
}
var summarize1 = new summarize();
summarize1.makeSum();

/*
# ===============================================
#   Сортировка в массиве по значению
# ===============================================
*/
function sortDict(dictionary){
  dictionary.sort(function(a, b) {
    return a - b;
  });
}

var numbers = [4, 2, 5, 1, 3];
sortDict(numbers);
console.log(numbers);

/*
# ===============================================
#   Opposites Attract
# ===============================================
*/
function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}

var res = lovefunc(0,0);
console.log(res);
/*
  # ===============================================
  #   Barking mad
  # ===============================================
  */
function Dog (breed) {
  this.breed = breed;
}
Dog.prototype.bark = function() {
  return "Woof";
};
var snoopy = new Dog("Beagle");
var scoobydoo = new Dog("Great Dane");
/*
# ===============================================
#  Object Oriented Piracy
# ===============================================
*/
function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
}

Ship.prototype.isWorthIt = function(){
return this.draft-(this.crew*1.5) > 20;
}
var emptyShip = new Ship(25,4);
var res = emptyShip.isWorthIt();
console.log(res);
/*
# ===============================================
#   Last
# ===============================================
*/
function last(list){
  var l_a  = arguments[arguments.length-1];
  if(typeof l_a == "string"){
    return l_a.substr(-1);
  } else if(Object.prototype.toString.call(l_a)=== '[object Array]') {
    return l_a[l_a.length - 1];
  } else{
     return l_a;
  }
}
/*
# ===============================================
#   Count sheeps
# ===============================================
*/
function countSheeps(arrayOfSheeps) {
  var trueArr = arrayOfSheeps.filter(function(sheep) {
    return sheep ==true;
  });
  return trueArr.length;
}
var array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];

var res = countSheeps(array1);
console.log(res);
/*
 # ===============================================
 #   My acronym
 # ===============================================
 */
var makeAcronym = function(string){
  if(typeof string !=="string"){
    return "Not a string"; 
  } else if(string.replace(/[0-9]/g,"").length !== string.length){
    return "Not letters";
  }else{
    arr = string.split(' ');
    var len = arr.length;
    var acr = [];
    for(var i = 0; i < len; i++){
      var item = arr[i].substr(0,1).toUpperCase(); 
      acr.push(item);
    }
  }  
  return acr.join("");
};

var res = makeAcronym("My aunt sally sall");
console.log(res);
/*
# ===============================================
#   Backronym
# ===============================================
*/
function makeBackronym(string){
  return string.toUpperCase().split('').map(function(s){
    return dict[s];
  }).join(' ');
}
/*
# ===============================================
#   Unique
# ===============================================
*/
function getUniqTags(tags) {
    var results = [];

    tags.forEach(function (value) {
        value = value.trim();

        if (results.indexOf(value) === -1) {
            results.push(value);
        }
    });

    return results; 
}

/*
# ===============================================
#   levenshteinDistance
# ===============================================
*/
function levenshteinDistance (s, t) {
    if (!s.length) return t.length;
    if (!t.length) return s.length;

    return Math.min(
        levenshteinDistance(s.substr(1), t) + 1,
        levenshteinDistance(t.substr(1), s) + 1,
        levenshteinDistance(s.substr(1), t.substr(1)) + (s[0] !== t[0] ? 1 : 0)
    ) + 1;
}
/*
# ===============================================
#   Swap case
# ===============================================
*/

function swap(str){
  var sl = str.length;
  var c;
  var t= "";
  for(i = 0 ; i < sl;i++){
    c = str.charAt(i);
    if(c.toLowerCase() == c ){
      c = c.toUpperCase();
    } else {
      if(c.toUpperCase() == c ){
        c = c.toLowerCase();
      }
    }
  t = t + c;  
  }
  return t; 
}
/*
# ===============================================
#   Pattern Odd Ladder(My)
# ===============================================
*/
function pattern(n){
  var output="";
  if (n%2==0){
    n = n-1;
  }
  if(n<1){
    output = "";
  }
  var arr = [];
  for(i=1;i<n+1;i=i+2){
    var item='';
    for(j=1;j<i+1;j++){
      item = item + i.toString();
    }
    arr.push(item);
  }
  var output = arr.join('\n');
  return output;
}
var res = pattern(9) ;
console.log(res);
/*
# ===============================================
#   Pattern (all digits) BP
# ===============================================
*/
function pattern(n) {
  var res = [], i;
  for(i = 1; i <= n; i++) {
    res.push(Array(i + 1).join(i));
  }
  return res.join('\n');
}
/*
# ===============================================
#   Multi indexOf
# ===============================================
*/
var string = "www.google.com.sdg.jfh.sd";
var preString = "sdg";
var searchString = ".s";
var preIndex = string.indexOf(preString);
var searchIndex = preIndex + string.substring(preIndex).indexOf(searchString);
/*
# ===============================================
#   Complete The Pattern #10 - Parallelogram
# ===============================================
*/
function pattern(n){
  var output="";
  var arr= [];
  for (var i = 1; i < n+1; i++) {
    arr.push(i%10);
  };
  var num = arr.join('');
  var tmpArr = [];
  for (var i = 1,j=n; i < n+1; i++,j--) {
    var arrS = [];
    var space = Array(j).join(' ');
    var str = space + num+"\n";
    tmpArr.push(str);
  };
  output =tmpArr.join('');
  return output;
}
var res = pattern(8);
console.log(res);
/*
# ===============================================
#   Another pattern
# ===============================================
*/
function pattern(n){
  var output="";
  var item='';
  var arr = [];
  for(i = n; i>0;i--){
    item = item+i;
    arr.push(item+'\n');
  }
  arr.reverse();
  output = arr.join('');
  return output;
}
var res = pattern(6);
console.log(res);
/*
# ===============================================
#   Balltype BP
# ===============================================
*/
var Ball = function(ballType) {
  this.ballType = ballType || 'regular';
};
/*
# ===============================================
#   Unique and notUnique
# ===============================================
*/
function duplicates(arr) {
  Array.prototype.contains = function(v) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === v) return true;
    }
    return false;
};
Array.prototype.unique = function() {
    var arr = [];
    for(var i = 0; i < this.length; i++) {
        if(!arr.contains(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr; 
}
Array.prototype.notUnique = function() {
    var arr = [];
    var d = [];
    for(var i = 0; i < this.length; i++) {
        if(!arr.contains(this[i])) {
            arr.push(this[i]);
        } else{
          d.push(this[i]);
        }
    }
    return d; 
  }
  return arr.notUnique().unique();
}
/*
# ===============================================
#   Span fn
# ===============================================
*/
function span(arr, predicate) {
  // Your Oscar-nominated code goes here.
  var nArr = arr.map(predicate);
  var itemIndex = nArr.indexOf(false);
  var arrB = [];
  var arrA = [];
  if(itemIndex != -1){
    arrB = arr.slice(0,itemIndex);
    arrA = arr.slice(itemIndex);
  } else {
    arrB = arr.slice(0);
  }
  
  var res = [];
  res.push(arrB);
  res.push(arrA);
  return res;
}  

function isEven(x) {
    return Math.abs(x) % 2 === 0;
}
  
function isOdd(x) {
    return Math.abs(x) % 2 !== 0;
}
     
  // Arrays for use in tests
var arr1 = [13,17,19,11,21];
var res = span(arr1,isOdd);
  console.log(res); 
  /*
  # ===============================================
  #   Capitals
  # ===============================================
  */
  var capitals = function (word) {
  return word.split('').reduce(function(memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo;
  }, []);
};
var res = capitals('CCCodEWaRs');
console.log(res);
/*
# ===============================================
#   Создание обьекта с двух массивов
# ===============================================
*/
function createDict(keys, values){
  // ...
  var kl = keys.length;
  var arr = {};
  for (var i = 0; i < kl; i++) {
    if(values[i]== undefined){
      values[i] = null;
    }
    arr[keys[i]] = values[i];
  };

  return arr;
}
/*
# ===============================================
#   Change letters & digits
# ===============================================
*/
    function lChange(l, n) {
    l=l.toLowerCase();
    var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
    var index = alphabet.indexOf(l);
    var newIndex = (index+n)%26;
    var newLetter = alphabet[newIndex]; 
    return newLetter;
  }


  function dChange(d) {
    var arr = (d+"").split('');
    var newArr = arr.map(function(elem) {
      return 9-elem;
    });
    return newArr[0];
  }
  
//----Clever Replace----
  
  function tongues(code) {
  var alpha = 'aiyeoubkxznhdcwgpvjqtsrlmf', repl = 'eouaiypvjqtsrlmfbkxznhdcwg';
  return code.replace(/[a-z]/gi, function(m) {
    var lower = m.toLowerCase();
    return lower == m ? repl[alpha.indexOf(lower)] : repl[alpha.indexOf(lower)].toUpperCase();
  });
} 

 //----Century----
 
function whatCentury(year)
{
  var century = Math.ceil(year/100);
  return century + (century < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th');
}

//----Replays ----

function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}

//----Snippets----

function factorial (n) {
  if (n > -1)
    return n == 0 ? 1 : n * factorial(n - 1);
}

//----Сортировка цифр по возростанию----

function solution(nums){
  return (nums || []).sort(function(a, b){
    return a - b
  });
}

//---- 50 shades of  grey----

function shadesOfGrey(n) {
  var shades = []
  
  for (var i = 1; i <= Math.min(n, 254); i++) {
    var grey = ('0' + i.toString(16)).slice(-2)
    shades.push('#' + grey + grey + grey)
  }
  
  return shades
}

//---- Заканчивается ли строка на второй аргумент ----

function solution(str, ending){
  return new RegExp(ending+"$", "i").test(str);
}