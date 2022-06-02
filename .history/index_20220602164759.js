import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

const PORT = process.env.PORT;
const mongo_connect = process.env.MONGO_CONNECTION;

// Express

/*  app.use(express.json());*/
app.use(cors());

/*  const { Schema } = mongoose;

const questionSchema = new Schema({
  question: String,
  answers: [
    {
      answer: String,
      points: Number,
    },
  ],
});
*/
const questionSchema = new mongoose.Schema({
  question: String,
  optionA: String,
  optionB: String,
  optionC: String,
  answer: String,
});

const Question = mongoose.model("Question", questionSchema, "questions");

// Routen

app.use("/apifragen", async (req, res) => {
  try {
    /*    await mongoose.connect(mongo_connect);*/
    const questions = await Question.find().exec();
    res.json(questions);
  } catch (err) {
    res.send(err);
  }
});

mongoose.connect(process.env.MONGO_CONNECTION).then(() => {
  app.listen(PORT, () => {
    console.log(`Quiz App Backend is listeing on port ${PORT} ...`);
  });
});
// Express

/*  app.listen(port, () => {
  console.log(`Quiz App Backend is listeing on port ${port} ...`);
});
*/
