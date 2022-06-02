import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

const port = process.env.PORT;
const mongo_connect = process.env.MONGO_CONNECTION;

// Express

app.use(express.json());
app.use(cors());

const { Schema } = mongoose;

const questionSchema = new Schema({
  question: String,
  answers: [
    {
      answer: String,
      points: Number,
    },
  ],
});

const Question = mongoose.model("Question", questionSchema, "questions");

// Routen

app.get("/apifragen", async (req, res) => {
  try {
    await mongoose.connect(mongo_connect);
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.send(err);
  }
});

// Express

app.listen(port, () => {
  console.log(`Quiz App Backend is listeing on port ${port} ...`);
});
