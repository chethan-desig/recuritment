// const mongoose = require("mongoose");

// const task = new mongoose.Schema({
//   title: {
//     type: String,
//     required: [true, "mandatory"],
//   },
//   description: {
//     type: String,
//   },
//   completed: {
//     type: Boolean,
//   },
//   duedate: {
//     type: Date,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Task = mongoose.model("Task", task);

// module.exports = Task;

const mongoose = require("mongoose");

const PositionsSchema = new mongoose.Schema({
  positionType: {
    type: String,
    required: [true, "fill the position type"],
  },
  client: {
    type: String,
    required: [true, "fill the client"],
  },
  skillSet: {
    type: String,
    required: [true, "fill the skillset"],
  },
  JodDescription: {
    type: String,
    required: [true, "fill the jobdescription"],
  },
  numberOfPositions: {
    type: String,
    required: [true, "fill the number of positions"],
  },
  earliestStartDate: {
    type: Date,
    required: [true, "fill the earlieststartdatee"],
  },
  targetDate: {
    type: Date,
    required: [true, "fill the targetdate"],
  },
  releventExperience: {
    type: String,
    required: [true, "fill the relevent  experience"],
  },
  projectLocation: {
    type: String,
    required: [true, "fill the projectlocation"],
  },
  assigned_TA_SPOC: {
    type: String,
    required: [true, "fill the assigned_TA_SPOC"],
  },
  immediateBIllingImpact: {
    type: Boolean,
    required: [true, "fill the immediateBillingImpact"],
  },
  billingCurrency: {
    type: String,
    required: [true, "fill the billing currency"],
  },
  BillingRate: {
    type: String,
    required: [true, "fill the billing rate"],
  },
  practice: {
    type: String,
    required: [true, "fill the practise"],
  },
  priority: {
    type: String,
    required: [true, "fill the priority"],
  },
  status: {
    type: String,
    required: [true, "fill the status"],
  },
});

const Positions = mongoose.model("Positions", PositionsSchema);

module.exports = Positions;
