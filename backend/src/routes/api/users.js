const express = require("express");
const router = express.Router();

const app = express();

//helmet for security
const helmet = require("helmet");
app.use(helmet());

const userController = require("../../controllers/userController");
const validation = require("../../middlewares/validation");

const { checkRegister } = require("../../utils/validationChecks");

// @route POST /api/users
router.post("/", checkRegister(), validation, userController.postSignup);

// @route GET /api/users
router.get("/", userController.getSignup);

module.exports = router;
