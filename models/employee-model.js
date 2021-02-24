const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId
const employeeSchema = mongoose.Schema({
    _id: {
        type: ObjectId,
        index: {unique: true}
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    city: {
        type: String
    }
})



module.exports =  EmployeeModel =  mongoose.model("employee", employeeSchema, "employee")

module.exports.getEmployee = function(callback){
    EmployeeModel.find(callback)
}

module.exports.createEmployee = function(employee, callback){
    EmployeeModel.create(createEmployeeJSON(employee), callback)
}

module.exports.updateEmployee = function(id, employee, callback){
    EmployeeModel.update({_id: id}, 
                        {$set: {
                            name: employee.name,
                            email: employee.email,
                            city: employee.city
                        }}, 
                        callback)
}

function createEmployeeJSON(empObj){
    const employee = {
        _id : new mongoose.Types.ObjectId(),
        name: empObj.name,
        email: empObj.email,
        city: empObj.city
    }
    return employee;
}