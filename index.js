const express = require("express");

const app = express();

// middleware

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// routers

// const router = require("./routes/productRouter.js");
const questionRouter = require("./routes/questionRouter.js");
// app.use("/api/products", router);

app.use("/api/question", questionRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to gacoder.info" });
});

//static Images Folder

//port

const PORT = process.env.PORT || 8080;

//server

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
