var express = require("express")
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

var router = express.Router();

router.get("/employee", function(req, res){
    res.json("Employee end point is created")
})

app.use("/api", router)

var PORT =  process.env.PORT || 3001

app.listen(PORT, function(){
    console.log(`Server Listening at PORT ${PORT}`)
})