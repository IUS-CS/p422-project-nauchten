const mongoose = require('mongoose');

const AssignmentSchema = mongoose.Schema({
  CurrentDate: {
    type: String,
    required: true,
    unique: true
  },
  title: String,
  description: String,
  motivationToCompleteEvent: [String]
});

AssignmentSchema.query.bySection = function(name) {
  return this.where({section: name});
}

const Assignment = mongoose.model('Class', AssignmentSchema);

module.exports = Assignment;
