const express = require('express');
const path = require('path');
const app = express();

var cors = require('cors');
app.use(cors())


//HTTP Method: Get, POST, PUT/PATCH, DELETE
//Operation Behaviour: CRUD: Read, Create, Update, Delete

let db = [
    {
        "Students": [
            { name: "Khoa", class: "CTTT" },
            { name: "Khai", class: "CTTT" }
        ]
    },
    {
        "Teachers": [
            { name: "Khoa", class: "CTTT" }
        ]
    }
]

//DB relational: ORM
//DB No-sql: ODM

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

//endpoint: /student/createNewStudent
app.post('/student/createNewStudent', (req, res) => {
    console.log(req.body);

    res.json(db)
})

app.put('/school/student/updateTeacher', (req, res) => {

    let reqQuery = req.query;

    db[0].Students.map((student) => {
        if (student.name == req.query.name) {
            student.class = "CNPM"
        }
    })

    res.json(db)
})

//3 cach de gui data tu FE -> BE: param, query, body(method: POST, create: Create)

app.listen(3000, () => {
    console.log('Server is running at ');
})


// FE ----------localhost:3000-----------> BE