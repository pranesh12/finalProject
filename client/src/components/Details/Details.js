import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getArticleByID } from "../../Redux/actions/article";
import "./Details.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const foundedArticle = useSelector((state) => state.articleByIdReducer.data);
  useEffect(() => {
    dispatch(getArticleByID(id));
    window.scrollTo(0, 0);
  }, [id, dispatch]);

  return (
    <>
      <Navbar />
      <div className="details_container">
        <div className="details">
          <div className="container">
            <h1 className="text-center pt-2 pb-5 details_header">
              {foundedArticle?.data.header}
            </h1>
            <div className="d-flex justify-content-center mb-5">
              <img
                className="img-fluid"
                src={foundedArticle?.data.image}
                alt={foundedArticle?.data.header}
              />
            </div>
            <div>
              <p className="article_details">{foundedArticle?.data.article}</p>
            </div>
            <div className="mt-5 writer">
              <p>লেখক: {foundedArticle?.writer}</p>
              <p>Updated At: {foundedArticle?.createdAt.slice(0, 10)}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;
