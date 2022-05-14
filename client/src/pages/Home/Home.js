import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Information from "../../components/Information/Infromation";
import Navbar from "../../components/Navbar/Navbar";
import Section from "../../components/Section/Section";
import { getArticleCard } from "../../Redux/actions/article";
import { useSelector } from "react-redux";
import SubArticle from "../../components/SubArticle/SubArticle";
import { changeLanguage } from "../../Redux/actions/changingLanguage";
import englishLanguageData from "../../data/englishLanguageData";
import chakmaLanguageData from "../../data/chakmaLanguageData";
import AnoterCard from "../../components/Review/Showreview";

const Home = () => {
  const articleCardData = useSelector((state) => state.articleCardReducer.data);
  const currentLanguage = useSelector(
    (state) => state.languageReducer.changeToChakmaLange
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticleCard());
    dispatch(changeLanguage(false));
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      {currentLanguage ? (
        <>
          <Banner props={chakmaLanguageData} />
          <Section props={chakmaLanguageData} />
          <SubArticle data={articleCardData} />
          <About props={chakmaLanguageData} />
          <AnoterCard />
          <Information props={chakmaLanguageData} />
          <Footer props={chakmaLanguageData} />
        </>
      ) : (
        <>
          <Banner props={englishLanguageData} />
          <Section props={englishLanguageData} />
          <SubArticle data={articleCardData} />
          <About props={englishLanguageData} />
          <AnoterCard />
          <Information props={englishLanguageData} />
          <Footer props={englishLanguageData} />
        </>
      )}
    </div>
  );
};

export default Home;
