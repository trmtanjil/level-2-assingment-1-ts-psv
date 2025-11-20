
//  1 problem solve 

function formatValue (Value:number|string|boolean){
if(typeof Value ==='number'){
    return Value= Value*10
}
else if(typeof Value === 'string'){
return Value.toUpperCase()
}
else{
    return !Value
}
}
// console.log(formatValue('talksjf'))



// 2nd problem 

function getLength(value:string|any[] ) {
  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length;
  } else {
    return 0;
  }
}
console.log(getLength('t '))
console.log(getLength([22,22,22,4]))