const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const user = require("./routes/users");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected to mongoDB")
})

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));



app.get("/", (req, res) => {
    res.send("welcome to insta")
})

app.use("/api/user", user);

app.listen(3000, () => {
    console.log("Backend server is running on 3000")
})

