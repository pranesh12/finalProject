const express = require("express");
const {
  getAllInfo,
  addArticles,
  removeArticle,
  getArticleById,
  updateArticle,
  getArticleCard,
} = require("../controllers/article");

const router = express.Router();

router.get("/articleCard", getArticleCard);
router.get("/article", getAllInfo);
router.get("/getArticleId", getArticleById);
router.post("/article", addArticles);
router.put("/article", updateArticle);
router.delete("/article", removeArticle);

module.exports = router;
