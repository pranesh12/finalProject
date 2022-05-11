const express = require("express");
const {
  getAllInfo,
  addArticles,
  removeArticle,
  getArticle,
  updateArticle,
} = require("../controllers/article");

const router = express.Router();

router.get("/article", getAllInfo);
router.get("/getArticle", getArticle);
router.post("/article", addArticles);
router.put("/article", updateArticle);
router.delete("/article", removeArticle);

module.exports = router;
