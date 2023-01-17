const Positionss = require("../models/positions");
const positionscltr = {};

positionscltr.list = (req, res) => {
  Positionss.find()
    .then((positions) => {
      res.json(positions);
    })
    .catch((err) => {
      res.json(err.message);
    });
};
positionscltr.create = (req, res) => {
  const body = req.body;
  const task = new Positionss(body);
  task
    .save()
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
};
positionscltr.show = (req, res) => {
  const id = req.params.id;

  Positionss.findById(id)
    .then((positions) => {
      res.json(positions);
    })
    .catch((err) => {
      res.json(err);
    });
};
positionscltr.update = (req, res) => {
  const id = req.params.id;
  console.log(id);
  const body = req.body;
  Positionss.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((positions) => {
      res.json(positions);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = positionscltr;
