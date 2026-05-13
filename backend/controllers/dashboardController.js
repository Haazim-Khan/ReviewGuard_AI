import Review from "../models/Review.js";

export async function dashboard(req, res) {
  const reviews = await Review.find();

  const fakeCount = reviews.filter(
    (r) => r.prediction === "Fake Review"
  ).length;

  const genuineCount = reviews.filter(
    (r) => r.prediction === "Genuine Review"
  ).length;

  res.render("dashboard", {
    fakeCount,
    genuineCount,
    reviews,
  });
}