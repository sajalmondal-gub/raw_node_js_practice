const fs=require('fs');


// sync
const mydata=fs.readFileSync('data.txt','utf8');
console.log(mydata);

//async file read