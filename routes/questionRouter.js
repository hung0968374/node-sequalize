// import controllers review, products
const questionController = require("../controllers/questionController.js");

// router
const router = require("express").Router();

// use routers

router.get("/allQuestions", questionController.getAllQuestions);

module.exports = router;
