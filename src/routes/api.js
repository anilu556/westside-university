const { Router } = require('express');
const app = Router();

//requerir Auth
const Students = require('../controllers/students/student')


//managers routes
app.get('/students', Students.index);
app.post('/students', Students.create);

module.exports = app;