const db = require("../models");

const Question = db.questions;

const getAllQuestions = async (req, res) => {
  let questions = await Question.findAll({});
  res.status(200).send({ questions, totalQuestions: questions.length });
};

const createQuestion = async (req, res) => {
  const newQuestion = {
    question: req.body.question,
    answer1: req.body.answer1,
    answer2: req.body.answer2,
    answer3: req.body.answer3,
    answer4: req.body.answer4,
    correctAnswer: req.body.correctAnswer,
  };

  const newQues = await Question.create(newQuestion);
  res.status(200).send({ newQues, msg: "Created a new question successfully" });
};

const getOneQuestion = async (req, res) => {
  const id = req.params.id;
  const OneQuestion = await Question.findOne({ where: { id: id } });
  res.status(200).send(OneQuestion);
};

const deleteQuestion = async (req, res) => {
  const id = req.params.id;

  await Question.destroy({ where: { id: id } });

  res.status(200).send({ msg: "question is deleted" });
};

const updateQuestion = async (req, res) => {
  const id = req.params.id;

  const question = await Question.update(req.body, { where: { id: id } });

  res.status(200).send({ msg: "Question has been updated successfully" });
};

const submitAnswer = async (req, res) => {
  const userAnswers = req.body;
  let mark = 0;

  const correctAnswers = await Promise.all(
    userAnswers.map((userAnswer) => {
      const answerId = userAnswer.id;
      const trueAnswer = Question.findOne({
        where: { id: answerId },
      });
      return trueAnswer;
    })
  );

  correctAnswers.forEach((correctAnswer, idx) => {
    if (correctAnswer.correctAnswer === userAnswers[idx].userAnswer) {
      mark++;
      userAnswers[idx].result = true;
    } else {
      userAnswers[idx].result = false;
    }
  });

  res.status(200).send({
    userAnswers,
    mark,
    totalAnsweredQuestion: userAnswers.length,
  });
};

module.exports = {
  createQuestion,
  getAllQuestions,
  getOneQuestion,
  deleteQuestion,
  updateQuestion,
  submitAnswer,
};
