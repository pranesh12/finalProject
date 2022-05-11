import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Information from "../../components/Information/Infromation";
import Navbar from "../../components/Navbar/Navbar";
import Section from "../../components/Section/Section";
import { getArticleData } from "../../Redux/actions/article";
import { useSelector } from "react-redux";
import SubArticle from "../../components/SubArticle/SubArticle";
import { changeLanguage } from "../../Redux/actions/changingLanguage";
import englishLanguageData from "../../data/englishLanguageData";
import chakmaLanguageData from "../../data/chakmaLanguageData";

const Home = () => {
  const articleData = useSelector((state) => state.articleReducer.fetchDAta);
  const currentLanguage = useSelector(
    (state) => state.languageReducer.changeToChakmaLange
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticleData());
    dispatch(changeLanguage(false));
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      {currentLanguage ? (
        <>
          <Banner props={chakmaLanguageData} />
          <Section props={chakmaLanguageData} />
          <SubArticle data={articleData} />
          <About props={chakmaLanguageData} />
          <Information props={chakmaLanguageData} />
          <Footer props={chakmaLanguageData} />
        </>
      ) : (
        <>
          <Banner props={englishLanguageData} />
          <Section props={englishLanguageData} />
          <SubArticle data={articleData} />
          <About props={englishLanguageData} />
          <Information props={englishLanguageData} />
          <Footer props={englishLanguageData} />
        </>
      )}
    </div>
  );
};

export default Home;
