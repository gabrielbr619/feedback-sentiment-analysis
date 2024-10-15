const express = require("express");
const {
  submitFeedback,
  getAnalysis,
  getAllFeedback,
} = require("../controllers/feedbackController");
const auth = require("../middleware/auth");

const router = express.Router();

// Rota para submeter um novo feedback
router.post("/feedback", auth, submitFeedback);

// Rota para obter todos os feedbacks
router.get("/feedback", auth, getAllFeedback);

// Rota para obter a análise
router.get("/analysis", auth, getAnalysis);

module.exports = router;
