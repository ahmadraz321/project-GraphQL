const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Not started", "In Progress", "Completed"],
  },
  clientId: {
    type: mongoose.Schema.ObjectId,
    ref: "Client",
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
