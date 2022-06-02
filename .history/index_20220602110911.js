import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

// Varieablen

const port = process.env.PORT;
const mongo_connect = process.env.MONGO_CONNECTION;

// Express

app.use(express.json());
app.use(cors());

// Datenbank

const { Schema } = mongoose;

// Datenbank fragen

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
