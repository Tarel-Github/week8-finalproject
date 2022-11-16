const mongoose = require("mongoose");
const { Schema } = mongoose;
const missionSchema = new Schema({
  reporterId: {
    type: Number,
    required: true,
  },
  suspectId: {
    type: Number,
    required: true,
  },
  targetId: {
    type: Number,
    required: true,
  },
  targetName: {
    type: String,
    required: true,
  },
  processing: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model(`report`, missionSchema);
