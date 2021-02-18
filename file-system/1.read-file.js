var fs= require("fs");

fs.readFile("files/sample.txt", 'UTF-8', function(err, data){
    if(err){
        throw err;
    }
    console.log(`Line Number 7 : `, data)
})

var data = fs.readFileSync("files/sample.txt", 'UTF-8')
console.log(`Line Number 11 : `, data)
console.log(`Line Number 12 : `,'Read the file !!!')

