const http = require('http');

let ClientRequestht = http.request("http://123.207.32.32:8000/home/multidata",(data)=>{
    console.log(data);
}).end();