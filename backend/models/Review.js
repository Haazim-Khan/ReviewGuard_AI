import { Schema, model } from "mongoose";

const reviewSchema = new Schema({

  productName: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    required: true,
  },

  reviewText: {
    type: String,
    required: true,
  },

  prediction: {
    type: String,
    required: true,
  },

  confidence: {
    type: Number,
    required: true,
  },

  explanation: {
    type: [String],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model("Review", reviewSchema);