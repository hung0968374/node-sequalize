const yup = require("yup");

const creatingQuestionSchema = yup.object({
  body: yup.object({
    question: yup.string().required(),
    answer1: yup.string().required(),
    answer2: yup.string().required(),
    answer3: yup.string().required(),
    answer4: yup.string().required(),
    correctAnswer: yup.string().required(),
  }),
});

const deletingQuestionSchema = yup.object({
  params: yup.object({
    id: yup.number().required(),
  }),
});

const updatingQuestionSchema = yup.object({
  body: yup.object({
    question: yup.string().required(),
    answer1: yup.string().required(),
    answer2: yup.string().required(),
    answer3: yup.string().required(),
    answer4: yup.string().required(),
    correctAnswer: yup.string().required(),
  }),
  params: yup.object({
    id: yup.number().required(),
  }),
});

module.exports = {
  creatingQuestionSchema,
  deletingQuestionSchema,
  updatingQuestionSchema,
};
