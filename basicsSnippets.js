//----Пример с continue----
function dontDisplayNegative(arr){
  for (var i=0;i<arr.length;i++){
    if (arr[i]<0) continue;   
    console.log(arr[i])
  }
}
//----Пример с continue и break----
function grabDoll(dolls){
  var bag=[];
  //coding here
  for (var i=0;i<dolls.length;i++){
    if (bag.length>2){
      break;
    } ;

    if(dolls[i] != "Hello Kitty" && dolls[i] != "Barbie doll") continue;
    bag.push(dolls[i]);

  }
  return bag;
}
//----Цвет с RGB в HEX. Ф-ция Padding для добора нулями ----
function colorOf(r,g,b){
  //coding here
  function padding(hex) {
    while (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
  }
  let nr =padding(r.toString(16));
  let ng =padding(g.toString(16));
  let nb =padding(b.toString(16));

  return "#"+nr+ng+nb;
}