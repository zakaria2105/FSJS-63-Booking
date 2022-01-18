const express = require("express");
const authRoutes = require("./routes/auth");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const PORT = 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection Success.");
  })
  .catch((err) => {
    console.error("Mongo Connection Error", err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", authRoutes);

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
