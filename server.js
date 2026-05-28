require('dotenv').config();
const express  = require('express')
const app = express();

//declare port using global environment
const PORT = process.env.PORT || 5000

//Middleware in order to accept request from the body
app.use(express.json());
let students = [];



//middleware to track error easily
app.use((req, res, next)=>{
    console.log(`This is getting request from ${req.url} using ${req.method} VERB`);
    next()
})

//Test endpoint
app.get('/', (req,res)=>{
    res.send("This is Student Record API")
})

//get all students endPoint


//create student record endpoint


//get student by student_id endpoint


//update student record endpoint


//delete student record endpoint
app.delete('/api/v1/student/:id', (req, res) =>{

    //get student id from request
    const studentId = req.params.id;

    //check if student exsit in the array
    const studentExists = students.find(student => student.student_id == studentId);

    //if student does not exist return error
    if(!studentExists){
        return res.status(404).json({
            success: false,
            message: "Student not found"
        })
    }

    //remove the student from the students array
    students = students.filter(
        student => student.student_id != studentId
    );

    //return success response
    res.status(200).json({
        success: true,
        message: "Student deleted successfully"
    })
})

//listen
app.listen(PORT, ()=> {
    console.log(`The server has started running on port ${PORT}`)
})

