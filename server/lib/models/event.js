const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
  eventName: {
    type: String,
    required: true,
    unique: true
  },
  currentDate: String,
  title: String,
  description: String,
  motivationToCompleteEvent: [String]
});

EventSchema.query.bySection = function(name) {
  return this.where({section: name});
}

const Event = mongoose.model('Class', EventSchema);

module.exports = Event;
