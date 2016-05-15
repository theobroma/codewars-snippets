/*
# ===============================================
#   Сниппеты для работы с массивами и обьектами
# ===============================================
*/

//----Reject----

function reject(array, iterator) {
  return array.filter(function(x) {return !iterator(x);});
}
//----Alphabet----
var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");


//----Min and max----

function minMax(arr){
  var min = Math.min.apply(null, arr),
      max = Math.max.apply(null, arr);
  return [min, max];
}
//----Перебор массива----

    arr.forEach(function(entry) {
      console.log(entry);
    });
//----Перевод значение массива в число----

  .map(Number)
//----Make arguments a real array----
Array.prototype.slice.call(arguments)
	//или (2-ой аргумент: с какого аргумента начинать)
[].slice.call(arguments, 2);

//----Duplicates----

function findDup(arr){
  return arr.reduce(function(n, v, i){
    return arr.indexOf(v) == i ? n : v;
  }, null);
}

//----Clever(создание методов)----
['a', 'b', 'p', 'body', 'div', 'span', 'title'].forEach(function(tag) {
  HTMLGen.prototype[tag] = function(content) {
    return '<' + tag + '>' + content + '</' + tag + '>'
  }
})

//----Сортировка ----
arr.sort(function(a,b){return a-b;}); //Прямой порядок
arr.sort(function(a,b){return b-a;}); //Обратный порядок

//----Batch replays----

function computerToPhone(numbers) {
  return numbers.split('').map(function(v) {return {0:0, 1:7, 2:8, 3:9, 4:4, 5:5, 6:6, 7:1, 8:2, 9:3}[v];}).join('');
}

//----Подсчет одинаковых элементов в массиве----

function count(arr,num) {
    var resArr = arr.filter(function(elem) {
      return elem == num;
    });
    return resArr.length;
}

//----Combine arrays----

(arr1||[]).concat(arr2||[])
/*
# ===============================================
#   Объекты
# ===============================================
*/
// 
if('key' in myObj)
// Sort array of objects by string property value in JavaScript
function compare(a,b) {
  if (a.last_nom < b.last_nom)
    return -1;
  if (a.last_nom > b.last_nom)
    return 1;
  return 0;
}

objs.sort(compare);


//----Перебор обьекта----

for (i in obj) {
  alert(i+": "+obj[i]);
}

//----Замена на элемент с обьекта----

CHAR_TO_MORSE[' '] = ' '; .//   '0': '-----', '1': '.----', '2': '..---', '3': '...--', и так далее...
function encryption(message) {
  return message.split('').map(x => CHAR_TO_MORSE[x]).join(' ');
}

//----Facebook likes----

function likes (names) {
  var templates = [
    'no one likes this',
    '{name} likes this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {n} others like this'
  ];
  var idx = Math.min(names.length, 4);
  
  return templates[idx].replace(/{name}|{n}/g, function (val) {
    return val === '{name}' ? names.shift() : names.length;
  });
}

//----Operator overload----

var Foo = function(value) {
  this.val = value;
}

Foo.prototype.valueOf = function() {
  return this.val;
}