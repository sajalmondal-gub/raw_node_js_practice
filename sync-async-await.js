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

const myPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const success=Math.random >2;
        if (success) {
           resolve('Operation completed successfully');
        }else{
            reject(new Error('Operation failed'))
        }
    },1000);
});

myPromise.then(result=>console.log('this is result',result)).catch(error=>console.log(error.message));
