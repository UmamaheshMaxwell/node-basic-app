var express = require("express")
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

var router = express.Router();

router.get("/", (request, response) => {
    response.json({"say": 'Hello World'})
})


router.get("/sample", (request, response) => {
    response.send('You tried hitting sample endpoint')
})

router.get("/employee", (request, response) => {
    response.json({
        name: 'Uma',
        designation: 'Sr.Manager',
        location: 'Hyderabad'
    })
})

router.post("/employee", (request, response) =>{
    var data = request.body
    console.log(data)
    response.json({
        "employee": [{data: data}]
    })
})

app.use("/api", router)

var PORT =  process.env.PORT || 5000

app.listen(PORT, function(){
    console.log(`Server Listening at PORT ${PORT}`)
})