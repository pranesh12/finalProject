const tourGuideModel = require("../models/tourguide");

const getAllTourGuides = async (req, res) => {
  try {
    const tourGuide = await tourGuideModel.find({});
    res.json(tourGuide);
  } catch (error) {
    console.log(error);
  }
};

//Article by id
const getTourGuideById = async (req, res) => {
  try {
    const { id } = req.query;
    const foundTourGuide = await tourGuideModel.findOne({ _id: id });
    res.json(foundTourGuide);
  } catch (error) {
    res.json(error);
  }
};

const addTourGuide = async (req, res) => {
  try {
    const { name, district, phone_number, address, status } = req.body;
    await tourGuideModel.create({
      name,
      district,
      phone_number,
      address,
      status,
    });
    res.json({ meassage: "Tourguide created succesfuly" });
  } catch (error) {
    res.json(error);
  }
};

const removeTourGuide = async (req, res) => {
  try {
    const { id } = req.query;
    await tourGuideModel.deleteOne({ _id: id });
    res.json("Tour guide removded");
  } catch (error) {
    res.json(error);
  }
};

const updateTourGuide = async (req, res) => {
  const { id, newData } = req.body;
  const { name, district, phone_number, address, status } = newData;
  try {
    const newTourGuide = {
      name,
      district,
      phone_number,
      address,
      status,
    };

    await tourGuideModel.findByIdAndUpdate(id, newTourGuide, { new: true });
    res.status(200).json({ message: "update successfull" });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  getAllTourGuides: getAllTourGuides,
  getTourGuideById: getTourGuideById,
  addTourGuide: addTourGuide,
  removeTourGuide: removeTourGuide,
  updateTourGuide: updateTourGuide,
};
