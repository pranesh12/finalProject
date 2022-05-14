import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dashboard from "./DashBoard/DashBoard";
import { useDispatch, useSelector } from "react-redux";
import { getArticleByID, updateArticle } from "../../Redux/actions/article";

const ArticleUpdate = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const foundedData = useSelector((state) => state.articleByIdReducer.data);

  const [articleData, setArticleData] = useState({
    category: "History",
    writer: "",
    header: "",
    article: "",
    img: "",
    thumbnail: "",
  });

  useEffect(() => {
    if (foundedData) {
      if (id === foundedData._id) {
        setArticleData({
          header: foundedData?.data.header,
          category: foundedData?.category,
          writer: foundedData?.writer,
          article: foundedData?.data.article,
          img: foundedData?.data.image,
          thumbnail: foundedData?.data.thumbnail,
        });
      } else {
        dispatch(getArticleByID(id));
      }
    } else {
      dispatch(getArticleByID(id));
    }
  }, [id, dispatch, foundedData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateArticle(id, articleData));
  };
  const handleChange = (e) => {
    setArticleData({
      ...articleData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="row">
      <div className="d-flex align-items-stretch">
        <div className="col-md-2">
          <Dashboard />
        </div>
        <div id="content" className="p-4 p-md-5 pt-5 col-md-10">
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <select
                className="form-select"
                type="select"
                name="category"
                value={articleData.category}
                onChange={handleChange}
              >
                <option value="History">History</option>
                <option value="Art and Culture">Art and Culture</option>
                <option value="Education">Education</option>
                <option value="Potentiality in Cht">Potentiality in Cht</option>
              </select>
            </div>

            <div class="mb-3">
              <input
                className="form-control"
                type="text"
                name="header"
                placeholder="Header"
                onChange={handleChange}
                value={articleData.header}
              />
            </div>

            <div class="mb-3">
              <input
                className="form-control"
                type="url"
                name="img"
                placeholder="Image"
                value={articleData.img}
                onChange={handleChange}
              />
            </div>
            <div class="mb-3">
              <input
                className="form-control"
                type="url"
                name="thumbnail"
                placeholder="Image thumbnail"
                value={articleData.thumbnail}
                onChange={handleChange}
              />
            </div>

            <div class="mb-3">
              <input
                className="form-control"
                type="text"
                name="writer"
                placeholder="Writer"
                value={articleData.writer}
                onChange={handleChange}
              />
            </div>
            <div class="mb-3">
              <textarea
                style={{ height: "30vh" }}
                className="form-control"
                name="article"
                placeholder="Article"
                onChange={handleChange}
                value={articleData.article}
              />
            </div>
            <button className="btn submit_button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ArticleUpdate;
