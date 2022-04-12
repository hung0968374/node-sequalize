// import controllers review, products
const userController = require("../controllers/userController.js");
const { authenticateAdmin } = require("../middlewares/authenticate");

const {
  creatingUserSchema,
  logginInSchema,
  refreshingTokenSchema,
} = require("../middlewares/validate/userValidate");

const { validate } = require("../middlewares/validate");

// router
const router = require("express").Router();

// use routers

router.get("/", authenticateAdmin, userController.getAllUsers);
router.post("/", userController.createUser);
router.post("/login", validate(logginInSchema), userController.login);
router.post("/refreshToken", userController.refreshToken);

module.exports = router;
