const express = require("express")
const bodyParser = require("body-parser");
const sql = require('mssql');
const { request } = require("express");
const app = express();

const dbConfig = {
    server: 'LAPTOP-963RI6PP',
    database: 'Student',
    user: 'sa',
    password: 'user@123'
}


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const router = express.Router();

router.get("/", function(req, res){
    res.json("Dwefault Endpoint")
})

router.get("/student", function(req, res){

    sql.connect(dbConfig, (err) => {
        if(err){
            console.log(err);
        }

        const request = new sql.Request();

        const selectQuery = "Select * from Student"

        request.query(selectQuery, (err, data) => {
            if(err){
                console.log(err)
            }

            res.json(data.recordset);
        })
    })
})

router.post("/student", function(req, res){

    var data = req.body;

    sql.connect(dbConfig, (err) => {
        if(err){
            console.log(err);
        }

        const request = new sql.Request();

        const insertQuery = `INSERT INTO Student (name,email,city) VALUES('${data.name}', '${data.email}','${data.city}')`

        request.query(insertQuery, (err, data) => {
            if(err){
                console.log(err)
            }

            res.json(data);
        })
    })
})

router.put("/student/:id", function(req, res){

    var data = req.body;
    var studentID = req.params.id

    sql.connect(dbConfig, (err) => {
        if(err){
            console.log(err);
        }

        const request = new sql.Request();

        const updateQuery = `UPDATE Student SET name='${data.name}', email='${data.email}',city='${data.city}' WHERE ID=${studentID}`

        console.log(updateQuery)

        request.query(updateQuery, (err, data) => {
            if(err){
                console.log(err)
            }

            res.json(data);
        })
    })
})

app.use("/api", router)

const PORT =  process.env.PORT || 3001

app.listen(PORT, function(){
    console.log(`Server Listening at PORT ${PORT}`)
})