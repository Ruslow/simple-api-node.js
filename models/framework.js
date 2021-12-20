const mongoose = require("mongoose");

const frameworkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "framework name must be provided"],
  },
  image: {
    type: String,
    required: [true, "framework image must be provided"],
  },
  desc: {
    type: String,
    required: [true, "framework description must be provided"],
  },
  features: {
    type: Array,
  },
});

module.exports = mongoose.model("Framework", frameworkSchema);
