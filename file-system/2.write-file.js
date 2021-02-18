var fs = require("fs")

var data = "Hello World, Welcome to NodeJS"

fs.writeFile("files/text.txt", data , function(err){
    if(err){
        throw err
    }
    else {
        console.log('Write operation is completed')
    }
})

// fs.writeFileSync


