var log = {
    info: function(info){
        console.log(`info:  ${info}`)
    },
    warn: function(warn){
        console.log(`warning: ${warn}`)
    },
    error: function(error){
        console.log(`Error: ${error}`)
    }
}

module.exports = log;
