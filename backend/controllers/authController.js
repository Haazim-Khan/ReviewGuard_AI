import User from "../models/User.js";
import { hash, compare } from "bcryptjs";

export async function register(req, res) {
  const { name, email, password } = req.body;

  const hashedPassword = await hash(password, 10);

  await User.create({
    name,
    email,
    password: hashedPassword,
  });

  res.redirect("/login");
}

export async function login(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.send("User not found");
  }

  const isMatch = await compare(password, user.password);

  if (!isMatch) {
    return res.send("Invalid Password");
  }

  req.session.user = user;

  res.redirect("/dashboard");
}