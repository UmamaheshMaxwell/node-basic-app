console.log(` Exec Path : ${process.execPath}`)
console.log(` Id : ${process.pid}`)
console.log(` Cwd : ${process.cwd()}`)

const http = require('http')
console.log('http', http.STATUS_CODES)