const mongoose = require('mongoose');
const Student = require('../../models/Student');

const index = (req, res) =>  {
  Student
    .find()
    .exec()
    .then(students => {
      res.json({
        students,
        total: students.length
      })
      .status(200)
    })
    .catch(err => {
      console.log(`Caught error: ${err}`);
      return res.status(500).json(err)
    })
}

    const create = (req, res) => {
      const newStudent = new Student({
        _id: mongoose.Types.ObjectId(),
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        class: req.body.class,
        grade: req.body.grade
      })

      newStudent
        .save()
        .then( data => {
          res.json({
            type: 'New student created',
            data: data
          })
          .status(200)
        })
        .catch(err => {
          console.log(`Caught error: ${err}`);
          return res.status(500).json({message: 'Post failed'})
        })
      }

    const findBy = (req, res) => {
        Student
        
        .find({class: req.params.class})
        .exec()
        .then( users => {
          res.json({
            type: 'User found by Id',
            users
          })
          .status(200)
        })
        .catch(err => {
          console.log(`Caught error: ${err}`);
          return res.status(500).json(err)
        })
      }

module.exports = {
  index, create, findBy
}