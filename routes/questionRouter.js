const questionController = require("../controllers/questionController.js");
const {
  authenticateUser,
  authenticateAdmin,
} = require("../middlewares/authenticate");
const { validate } = require("../middlewares/validate");
const {
  creatingQuestionSchema,
  deletingQuestionSchema,
  updatingQuestionSchema,
} = require("../middlewares/validate/questionValidate");

// router
const router = require("express").Router();

// use routers

router.get("/", [authenticateUser], questionController.getAllQuestions);
router.post(
  "/",
  [validate(creatingQuestionSchema), authenticateAdmin],
  questionController.createQuestion
);
router.get("/:id", authenticateUser, questionController.getOneQuestion);
router.delete(
  "/:id",
  [validate(deletingQuestionSchema), authenticateAdmin],
  questionController.deleteQuestion
);
router.put(
  "/:id",
  [validate(updatingQuestionSchema), authenticateAdmin],
  questionController.updateQuestion
);
router.post(
  "/submitAnswers",
  authenticateUser,
  questionController.submitAnswer
);

module.exports = router;
