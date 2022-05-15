import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getArticleCard } from "../../Redux/actions/article";
import { useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import "./Article.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Atricles = () => {
  const articleCardData = useSelector((state) => state.articleCardReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticleCard());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="article_section">
        <div className="container  text-center mt-5">
          <div className="row gx-3 gy-5">
            <Cards filterData={articleCardData} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Atricles;
