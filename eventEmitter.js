var events =  require("events")

var event = new events.EventEmitter();

event.on("click", function(data){
    console.log(`Click Event :  ${data}`)
})

event.on("focus", function(){
    console.log(`Focus event is emitted`)
})

event.emit("click", "Click Event Emitted")

event.emit("focus")
