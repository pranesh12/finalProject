const mongoose = require("mongoose");
const { Schema } = mongoose;

const tourguideSchema = new Schema(
  {
    name: {
      type: String,
      require,
    },
    email: { type: String, require },
    district: { type: String, require },
    phone_number: { type: Number, require },
    address: { type: String, require },
    status: { type: String, require },
  },
  { timestamps: true }
);

const tourGuideModel = mongoose.model("tourguides", tourguideSchema);

module.exports = tourGuideModel;
