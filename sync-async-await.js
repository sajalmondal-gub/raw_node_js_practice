const fs=require('fs');


// sync
// const mydata=fs.readFileSync('data.txt','utf8');
// console.log(mydata);

//async file read

fs.readFile('data.txt',"utf-8",(err,data)=>{
    //  console.log(err);
    console.log(data);
});
console.log('this is after async readfile log');
