const Class = require('../models/event');

module.exports = {
  root: (req, res) => {
    Class.find().exec((err, OurEvents) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      let ret = [];
      for (let klass of OurEvents) {
        ret.push(klass.section);
      }
      res.json(ret);
    })
  },
  byEvent: (req, res) => {
    const section = req.params.class;

    Class.findOne().bySection(section).exec((err, klass) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      if (!klass) {
        res.status(404);
        res.json({'err': 'Event not found'});
        return;
      }
      console.log('sending event: ' + klass)
      res.json(klass);
    })
  }
}
