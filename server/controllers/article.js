const articleModel = require("../models/articleModel");

const getAllArticleData = async (req, res) => {
  try {
    const info = await articleModel.find({});
    res.json(info);
  } catch (error) {
    console.log(error);
  }
};
//getArticle of card
const getArticleCard = async (req, res) => {
  try {
    const info = await articleModel.find({}).select("data.header data.thumbnail");
    res.json(info);
  } catch (error) {
    console.log(error);
  }
};

//Article by id
const getArticleById = async (req, res) => {
  try {
    const { id } = req.query;
    const foundArticle = await articleModel.findOne({ _id: id });
    res.json(foundArticle);
  } catch (error) {
    res.json(error);
  }
};

const addArticles = async (req, res) => {
  try {
    const { category, writer, header, article, img, thumbnail } = req.body;
    await articleModel.create({
      category,
      writer,
      data: {
        image: img,
        thumbnail: thumbnail,
        header: header,
        article: article,
      },
    });
    res.json({ meassage: "Article created succesfuly" });
  } catch (error) {
    res.json(error);
  }
};

const removeArticle = async (req, res) => {
  try {
    const { id } = req.query;
    await articleModel.deleteOne({ _id: id });
    res.json("Data removded");
  } catch (error) {
    res.json(error);
  }
};

const updateArticle = async (req, res) => {
  const { id, newData } = req.body;
  const { category, writer, header, article, img, thumbnail } = newData;
  try {
    const newData = {
      category,
      writer,
      data: {
        image: img,
        header,
        article,
        thumbnail: thumbnail,
      },
    };

    await articleModel.findByIdAndUpdate(id, newData, { new: false });
    res.status(200).json({ message: "update successfull" });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  getAllArticleData: getAllArticleData,
  addArticles: addArticles,
  removeArticle: removeArticle,
  getArticleById: getArticleById,
  updateArticle: updateArticle,
  getArticleCard: getArticleCard,
};
