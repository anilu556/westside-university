const { Router } = require('express');
const app = Router();

//requerir Auth
const Students = require('../controllers/students/student')


//students routes
app.get('/students', Students.index);
app.post('/students', Students.create);
app.get('/classes/:class', Students.findClass);
app.get('/students/:studentId', Students.findBy);

module.exports = app;