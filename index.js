// Code your solutions in this file
// for (let age = 30; age < 40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }
// const gifts = ["teddybear", "drone", "doll"]
// function wrapGifts(gifts){
//     for(let i=0; i < gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and added a bowl`)
//         debugger;
//     }
//     return gifts
// }
// wrapGifts(gifts)
//
let myArray = ["Guadalupe", "Ollie", "Ak"];
let item = "birthday";
function writeCards(myArray, item) {
  let newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    newArray.push(`Thank you, ${myArray[i]}, for the wonderful ${item} gift!`);
    debugger;
  }
  return newArray;
}

function countDown(num){
    
    while(num >= 0){
        console.log(num)
        num--;
    }
    return num;
}
countDown(10);