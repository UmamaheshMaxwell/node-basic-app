var fs = require("fs")

fs.appendFile("files/text.txt", " \n Appended more text", function(err){
    if(err){
        throw err
    }
    else {
        console.log('Append operation is completed')
    }
})

// fs.appendFileSync