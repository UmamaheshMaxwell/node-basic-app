var fs = require("fs")

fs.unlink("files/sample.txt", function(err){
    if(err){
        throw err;
    }
    console.log('Delete operation completed')
})