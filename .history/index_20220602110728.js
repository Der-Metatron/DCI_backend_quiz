import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

// ---------- Enviroment Variables ----------

const port = process.env.PORT;
const mongo_connect = process.env.MONGO_CONNECTION;

// ---------- Express Middleware ----------

app.use(express.json());
app.use(cors());

// ---------- Database ----------

const { Schema } = mongoose;

// ---------- Database: Questions ----------

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
