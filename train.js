//taskF
function findDigits(params) {
  const arr = [];
  for (let i = 0; i < params.length; i++) {
   const num = params[i];
   if(!isNaN(num)){
    arr.push(num)
   }
  }
  const result = arr.join("");
  console.log(result);
}

findDigits("675jva1203");


// //challenge6

// const magazine = "Irure aliquip officia laboris incididunt esse culpa."

// const note = "aliquip officia culpa culpa";
// const result = canMurderWrite(note);
// console.log("can killer write:", result);

// function canMurderWrite(note) {
//   const noteArr = note.split(" ")
//   const magazineArr = magazine.split(" ")
//   for (let index = 0; index < noteArr.length; index++) {
//     const indexMagazine = magazine.indexOf(noteArr[index])
//     if (indexMagazine != -1) {
//         magazineArr.splice(indexMagazine, 1);
//     }else{
//         return false;
//     }
//   }

//   return true;
// };

//challenge5

// Challenge -- 5
// const detail_list = [12, 23, null, 34, null, 32, null, null];
// const result = moveNullsKeepOrder(detail_list);
// console.log("result:", result);

// function moveNullsKeepOrder(list) {
//     let arr= [];
//     arr = list.filter(el => {
//         return el !== null
//     })
//     for(let i=0; i < list.length; i++) {
//         if(list[i] === null){
//             arr.push(list[i])
//         }
//     }
//     return arr;
// }

// const detail_list = [12, 23, null, 34, 3, null, 32, null, 3, null,47,1];
// const result1 = moveNullsKeepOrder(detail_list);
// console.log("result:", result1);

// function moveNullsKeepOrder(detail_list) {
//     detail_list.sort((a, b) => {
//         if (a === null && b !== null) {
//             return 1;
//         } else if (a !== null && b === null) {
//             return -1;
//         } else if (a !== null && b !== null) {
//             return a - b;
//         } else {
//             return 0;
//         }
//     });
//     return detail_list;
// }

// const prices = [2, 1, 5, 30, 1, 3, 10];
// console.log("You should buy stock =>", buyStock(prices));

// function buyStock(stock_prices) {
//     let minValue = stock_prices[0];
//     let minIndex = 0;
//     let maxValue = stock_prices[0];
//     let maxIndex = 0;

//     for (let i = 1; i < stock_prices.length; i++) {
//         if (stock_prices[i] < minValue) {
//             minValue = stock_prices[i];
//             minIndex = i;
//         }

//         if (stock_prices[i] > maxValue) {
//             maxValue = stock_prices[i];
//             maxIndex = i;
//         }
//     }
//     let difference = maxValue - minValue;

//     return { index: minValue, profit: difference };
// }
