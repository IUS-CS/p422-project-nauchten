// Our backend server json data for the event planner - Conner Mayfield
const mongoose = require('mongoose');
const Class = require('./lib/models/class');

// event 1 for our event planner
const event1 = new Class({
  CurrentDate: 'November 20, 2020',
  title: 'Calculus HW due tonight',
  description: 'The calculus HW is due tonight and its over chapter 4. Its Questions: 1-7',

  motivationToCompleteEvent: [
    '1: Limits are easy',
    '2: Derivatives are not too bad',
    '3: Integration are just derivatives backwards',
    '4: Calculus class is almost over! :)'
  ],
});
// event 2 for our event planner
const event2 = new Class({
  CurrentDate: 'November 20, 2020',
  title: 'Dinner with family at 6pm',
  description: 'Remember you have dinner with your family tonight at Chilis at 6. Dont be late!!',

  motivationToCompleteEvent: [
    '1: your in laws arnt that bad, give them a chance',
    '2: Also you love Chilis chips and salsa, so thats a plus',

  ],

});


// event 3 for our event planner
const event3 = new Class({
  CurrentDate: 'November 20, 2020',
  title: 'Soccer Practice after dinner',
  description: 'Remember you have soccer practice at 8:30pm. Also bring a extra set of goalie gloves for Tommy',

  motivationToCompleteEvent: [
    '1: Practice makes perfect',
    '2: Hey remember soccer is good exercise and it beats going to the gym',

  ],

});



mongoose.connect('mongodb://localhost:27017/p422-project-nauchten', {useNewUrlParser: true, useUnifiedTopology: true});

event1.save().catch(err => console.error(err)).then(() => { console.log('saved event1') });
event2.save().catch(err => console.error(err)).then(() => { console.log('saved event2') });
event3.save().catch(err => console.error(err)).then(() => { console.log('saved event3') });
