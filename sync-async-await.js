const fs = require("fs");

// sync
// const mydata=fs.readFileSync('data.txt','utf8');
// console.log(mydata);

//async file read

// fs.readFile('data.txt',"utf-8",(err,data)=>{
//     //  console.log(err);
//     console.log(data);
// });
// console.log('this is after async readfile log');

//sync

// const myData=fs.readFileSync('data.txt','utf8');
// console.log(myData);

// fs.readFile('data.txt','utf8',(err,data)=>{
//     console.log(data);
// });

// node promise

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         const success=Math.random >2;
//         if (success) {
//            resolve('Operation completed successfully');
//         }else{
//             reject(new Error('Operation failed'))
//         }
//     },1000);
// });

// myPromise.then(result=>console.log('this is result',result)).catch(error=>console.log(error.message));

// const myPromise = new Promise((resolve, reject) => {
//   const success = Math.random() > 5;
//   if (success) {
//     resolve("Operation completed successfully");
//   } else {
//     reject(new Error("Operation failed"));
//   }
// });

// myPromise.then((result)=>result).catch((error)=>error);

// Basic Async/Await

// async function getStart() {
//   console.log("starting...");
//   const result = await Myresult();
//   console.log(`Result: ${result}`);
//   return result;
// }

// function Myresult() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("this is my result");
//     }, 1000);
//   });
// }

// getStart().then(data => console.log('Final data:', data));

async function MyFunction() {
  console.log("this is start");
  const result = await testFuncion();
  return result;
}

function testFuncion() {
  return new Promise((resolve) => resolve("this is await"), 500000);
}

MyFunction().then((result) => console.log("this is data", result));
