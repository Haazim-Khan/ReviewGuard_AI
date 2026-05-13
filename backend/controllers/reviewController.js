import axios from "axios";
import Review from "../models/Review.js";


export async function analyzeReview(req, res) {

  const {
    productName,
    rating,
    review,
  } = req.body;

  try {

    const response = await axios.post(
      "http://127.0.0.1:5000/predict",
      {
        review,
      }
    );

    const result = response.data;

    await Review.create({

      productName,

      rating,

      reviewText: review,

      prediction: result.prediction,

      confidence: result.confidence,

      explanation: result.important_words,
    });


    res.render("analyze", {

      result,
    });

  } catch (error) {

    console.log(error);

    res.send("Error analyzing review");
  }
}