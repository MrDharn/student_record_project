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

//student records array to store the student records in memory (student attributes)
let studentsRecords = [
    {
        student_id: Date.now() - Math.floor(Math.random() * 1000000),
        firstname: "Dharn",
        lastname: "myDharn",
        email: "dharn@example.com"
    }
];

console.log(typeof (studentsRecords[0].student_id))

//get all students endPoint


//create student record endpoint


//get student by student_id endpoint //By Adekanye Oluwatosin

app.get('/api/v1/students/:student_id', (req, res) => {
    const studentId = req.params.student_id;
    const studentFetched = studentsRecords.find(student => student.student_id === studentId);
    if (!studentFetched) {
        return res.status(404).json({ 
            status: 'failed',
            message: 'Student not found' });
    }
    res.status(200).json({
        status: 'success',
        message: 'Student record fetched successfully',
        student: studentFetched
    });
});


//update student record endpoint


//delete student record endpoint //By Rose Mary
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

