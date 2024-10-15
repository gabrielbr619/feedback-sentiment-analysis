const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  text: { type: String, required: true },
  sentiment: { type: Number, required: true },
  category: { type: String, required: true },
  language: { type: String, required: true },
  keywords: [String],
  emotion: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Feedback", FeedbackSchema);
