const express = require("express");
const {
  getAllArticleData,
  addArticles,
  removeArticle,
  getArticleById,
  updateArticle,
  getArticleCard,
} = require("../controllers/article");

const router = express.Router();

router.get("/articleCard", getArticleCard);
router.get("/articles", getAllArticleData);
router.get("/article", getArticleById);
router.post("/article", addArticles);
router.put("/article", updateArticle);
router.delete("/article", removeArticle);

module.exports = router;
