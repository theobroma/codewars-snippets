/*
# ===============================================
#   Сниппеты для работы со строками и числами 
# ===============================================
*/

//----Алфавит----

"abcdefghijklmnopqrstuvwxyz"
//----Replace----
str.replace(/(?=.{5})./g, '#') //Замена в строке всех символов кроме последних 4 на #
str.replace(/\./gi, "-");
str.replace(/T/g, 'U');
str.replace(/[aeiou]+/g, '') //удаляет все гласные
//оставляет только гласные
str.replace(/[^aeiou]+/g, '') //оставляет только гласные
(str.match(/[aeiou]/ig)||[]).length;//bp

//----Достать число из слова----

str.match(/\d+/)[0];


//----Только буквы----
/^[a-zA-Z]+$/.test('sfjd') // возращает true или false


//----Number to string----

var a = 123..toString();
var a = 123 .toString()
var a = (123).toString();
var a = 123 + '';

//----Random int----

Math.floor(Math.random() * 4)//number max+1

//----Подстрока----

var sub = string.substr(start[, length])
var str = "abcdefghij";
(1,2): bc

//----Делить по 3 цифры преобразовывая в массив----

str.split( /(?=(?:...)*$)/ )

//----Проверка телефонного номера----

function validPhoneNumber(phoneNumber){
  return /^\(\d{3}\) \d{3}\-\d{4}$/.test(phoneNumber);
}