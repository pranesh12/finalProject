const express = require("express");
const {
  getAllTourGuides,
  getTourGuideById,
  addTourGuide,
  removeTourGuide,
  updateTourGuide,
} = require("../controllers/tourguide");

const router = express.Router();

router.get("/guides", getAllTourGuides);
router.get("/guide", getTourGuideById);
router.post("/guide", addTourGuide);
router.delete("/guide", removeTourGuide);
router.put("/guide", updateTourGuide);

module.exports = router;
