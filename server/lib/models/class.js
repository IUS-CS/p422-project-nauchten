const mongoose = require('mongoose');

const ClassSchema = mongoose.Schema({
  CurrentDate: {
    type: String,
    required: true,
    unique: true
  },
  title: String,
  description: String,
  motivationToCompleteEvent: [String]
});

ClassSchema.query.bySection = function(name) {
  return this.where({section: name});
}

const Class = mongoose.model('Class', ClassSchema);

module.exports = Class;
