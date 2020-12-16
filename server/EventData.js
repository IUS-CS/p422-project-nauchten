// Our backend server json data for the event planner - Conner Mayfield
const mongoose = require('mongoose');
const Event = require('./lib/models/event');

// event 1 for our event planner
const event1 = new Event({
  eventName: 'event1',
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
const event2 = new Event({
  eventName: 'event2',
  CurrentDate: 'November 21, 2020',
  title: 'Dinner with family at 6pm',
  description: 'Remember you have dinner with your family tonight at Chilis at 6. Dont be late!!',

  motivationToCompleteEvent: [
    '1: Your in laws are not that bad, give them a chance',
    '2: Also you love Chilis chips and salsa, so thats a plus.',

  ],

});


// event 3 for our event planner
const event3 = new Event({
  eventName: 'event3',
  CurrentDate: 'November 22, 2020',
  title: 'Soccer practice after dinner',
  description: 'Remember you have soccer practice at 8:30pm. Also bring a extra set of goalie gloves for Tommy',

  motivationToCompleteEvent: [
    '1: Practice makes perfect',
    '2: Hey remember soccer is good exercise and it beats going to the gym.',

  ],

});



// event 4 for our event planner
const event4 = new Event({
  eventName: 'event4',
  CurrentDate: 'November 23, 2020',
  title: 'Free day/Lazy day',
  description: 'Use this day to catch up on stuff or relax',

  motivationToCompleteEvent: [
    '1: Its your free day, enjoy it!!'
  ],

});


// event 5 for our event planner
const event5 = new Event({
  eventName: 'event5',
  CurrentDate: 'November 27, 2020',
  title: 'Work',
  description: 'You have to return to work this day. You work from 7am-3:30pm.',

  motivationToCompleteEvent: [
    '1: This job is good experience for your resume.',
    '2: The money will be good so you can get your AC fixed in your car.'
  ],

});













mongoose.connect('mongodb://localhost:27017/p422-project-nauchten', {useNewUrlParser: true, useUnifiedTopology: true});

event1.save().catch(err => console.error(err)).then(() => { console.log('saved event1') });
event2.save().catch(err => console.error(err)).then(() => { console.log('saved event2') });
event3.save().catch(err => console.error(err)).then(() => { console.log('saved event3') });
