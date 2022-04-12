const express = require("express");

const app = express();

// middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers

const questionRouter = require("./routes/questionRouter.js");
const userRouter = require("./routes/userRouter.js");
app.use("/api/question", questionRouter);
app.use("/api/user", userRouter);
app.get("/", (req, res) => {
  res.json({ message: "Welcome to gacoder.info" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
