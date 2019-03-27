const mongoose = require('mongoose');
const {Schema} = mongoose

const studentSchema = new Schema ({
  _id: Schema.Types.ObjectId,
  first_name: { type: String, required: true},
  last_name: { type: String, required: true},
  email: {type: String, unique: true},
  class: {type: String, unique: true},
  grade: {type: String, required: true}
})

module.exports= mongoose.model('Student', studentSchema)
