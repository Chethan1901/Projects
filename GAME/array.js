// let letters = {
//     A: 5, 
//     h:8,
//     s: 5, 
//     x: 7, 
//     k: 7,
//     o: 2, 
//     w:2
// };
// let data = {};
// for (var values in letters) {
//     obj.keys([values, letters[values]);
// }

// data.sort(function(a, b) {
//     return a[1] - b[1];
// });

// console.log(data)

// let winnerData = [
//     [
//         { playerName: "Elon", attempts: 4 },
//         { playerName: "Vishnu", attempts: 4 },
//         { playerName: "Vishwesh", attempts: 4 }
//     ],
//     [
//         { playerName: "Prash", attempts: 3 },
//         { playerName: "Saad", attempts: 3 },
//         { playerName: "Adnan", attempts: 3 },
//         { playerName: "Musk", attempts: 3 }
//     ],
//     [
//         { playerName: "Cenfu", attempts: 1 },
//     ],
//     [
//         { playerName: "abc", attempts: 2 },
//         { playerName: "kpi", attempts: 2 },
//         { playerName: "qwerty", attempts: 2 },
//         { playerName: "poi", attempts: 2 },
//     ],
//     [
//         { playerName: "sd", attempts: 8 },
//         { playerName: "sdf", attempts: 8 },
//         { playerName: "qwesdfrty", attempts: 8 },
//         { playerName: "sdfsdf", attempts: 8 },
//     ],
//     [
//         { playerName: "Huda", attempts: 5 },
//         { playerName: "Rahmath", attempts: 5 }
//     ],
//     [
//         { playerName: "Majid", attempts: 6 }
//     ],
//     [
//         { playerName: "Ateeq", attempts: 1 }
//     ]
// ];

// let newWinners = [];
// let temp = [];


// // console.log(winnerData);//2D Array
// winnerData = winnerData.flat();
// console.log(winnerData)
// winnerData.sort((a, b) => a.attempts - b.attempts);
// console.log(winnerData)
// temp[0] = winnerData[0];
// // console.log(winnerData);
// let i;
// for (i = 1; i < winnerData.length; i++) {
//     if (winnerData[i].attempts == winnerData[i - 1].attempts) {
//         temp.push(winnerData[i]);
//     } else {
//         newWinners.push(temp);
//         temp = [];
//         temp.push(winnerData[i]);
//     }
// }
// temp.push(winnerData[i]);

// console.log(newWinners);

// var obj = {};
// var pair = {key1: "value3",key2: "value3",key3: "value3"};
// obj = {...obj, ...pair};

// console.log(obj)



var object = { '232510350': 672,
'232510352': 672,
'232510353': 672,
'232510356': 672,
'232510358': 672,
'232510359': 672,
'232510360': 672 }

var values = Object.values(object);
var final = [];
var counter = 0;
var portion = {};

for (var key in object) {
  if (counter !== 0 && counter % 3 === 0) {
    final.push(portion);
    portion = {};
  }
  portion[key] = values[counter];
  counter++
}
final.push(portion);

console.log(final)