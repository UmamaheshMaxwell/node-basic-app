const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const EmployeeModel = require("./models/employee-model")

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/Employee", { useNewUrlParser: true, useUnifiedTopology: true }, (err)=>{
    if(err){
        throw err
    }
    console.log('Connected to database sucessfully')
})

router.get("/", (req, res) => {
    res.send("Default Employee Endpoint")
})

router.get("/employee", function(req, res){
    EmployeeModel.getEmployee(function(err, data){
        if(err){
            throw err
        }
        res.json(data)
    })
})

router.get("/employee/:id", function(req, res){
    var empId = req.params.id
    EmployeeModel.getEmployeeById(empId, function(err, data){
        if(err){
            throw err
        }
        res.json(data)
    })
})

router.post("/employee", function(req, res){
    var empObj = req.body;
    console.log(empObj)
    EmployeeModel.createEmployee(empObj, function(err, data){
        if(err){
            throw err
        }
        res.json(data)
    })
})

router.put("/employee/:id", function(req, res){
    var empObj = req.body;
    var empId = req.params.id
    console.log(empObj)
    EmployeeModel.updateEmployee(empId, empObj, function(err, data){
        if(err){
            throw err
        }
        res.json(data)
    })
})

router.delete("/employee/:id", function(req, res){
    var empId = req.params.id
    EmployeeModel.deleteEmployee(empId, function(err, data){
        if(err){
            throw err;
        }
        res.json(data)
    })
})

const PORT = 3001

app.use("/api", router)

app.listen(PORT, ()=>{
    console.log(`Server listening at PORT ${PORT}`)
})