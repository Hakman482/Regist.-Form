let MathScore = [
    ['John Doe', 20, 60, 'A'],
    ['Jane Doe', 10, 52, 'B'],
    ['Petr Chess', 5, 24, 'F'],
    ['Ling Jess', 28, 43, 'A'],
    ['Ben Liard', 16, 51, 'B']
];

// MathScore.forEach((score) => {
//     let totalScore = score[1]+ score[2];
//     score.push(totalScore)
// })
//  console.log(MathScore);
//   MathScore.pop();
// console.log(MathScore);

let myMatrix = function (rows, columns){
arr = [];
value = 0;
 for (let i=0; i<rows; i++){
    arr[i] = [];
    for (let j=0; j<columns; j++){
        arr[i][j] = value;
        value+=2;
    }
}
   return arr
}
let columns = 5;
let rows = 4;
 console.log(myMatrix(rows,columns))


// let temp = "My name < is Issah Hakeem. Wow"
// let myTemp = temp.split(' ')
// console.log(myTemp.join(''))



//1,1,2,3,5,8,13
// function sumFibs(num) {
//     let prevNum = 0;
//     let currentNum = 1;
//     let result = 0;
    
//     while (currentNum <= num) {
//         if (currentNum % 2 !== 0 ){
//             result += currentNum
//         }
//       currentNum += prevNum
//       prevNum = currentNum - prevNum
//     }
//     return result;
//   }
  
//   console.log(sumFibs(4));
// function smallestCommons(arr) {
//     let max = Math.max(arr);
//     let min = Math.min(arr);
//     let value = 0
  
//     while (arr){
//     for (let j in arr){
//         min += min;
//         max += max;
//         if (min === max){
//             let value = max
//             return value;
//         }
//     }
// // }
// //     for (let i=min; i<= max; i++) {
// //       if (arr.every(i => value % i === 0)){
// //         return value
// //       }
//      }
    
//    }
  
//   console.log(smallestCommons([1,5]));
