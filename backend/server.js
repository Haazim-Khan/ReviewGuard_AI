import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import { dashboard } from "./controllers/dashboardController.js";
import Review from "./models/Review.js";

dotenv.config();

const app = express();

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/analyze", (req, res) => {
  res.render("analyze", { result: null });
});

app.get("/dashboard", dashboard);

app.use(authRoutes);
app.use(reviewRoutes);

app.get("/history", async (req, res) => {

  const reviews = await Review.find().sort({
    createdAt: -1,
  });

  res.render("history", {
    reviews,
  });
});

app.get("/admin", async (req, res) => {

  const reviews = await Review.find();

  res.render("admin", {
    reviews,
  });
});


app.get("/delete/:id", async (req, res) => {

  await Review.findByIdAndDelete(req.params.id);

  res.redirect("/admin");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});