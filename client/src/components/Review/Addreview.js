import React, { useState } from "react";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import "./addreview.css";
import {
  addReview,
  findReviewbyMail,
  updateReview,
} from "../../Redux/actions/review";
import Navbar from "../Navbar/Navbar";

const Addreview = () => {
  const dispatch = useDispatch();
  const foundedReview = useSelector(
    (state) => state.findReviewByMailReducer.fetchData
  );
  const id = foundedReview?._id;

  const email = useSelector((state) => state.loginUserReducer?.currentUser?.email);
  const [comment, setComment] = useState();
  const [currentValue, setCurrentValue] = useState();
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  useEffect(() => {
    if (foundedReview) {
      if (email === foundedReview?.user.email) {
        setCurrentValue(foundedReview?.star);
        setComment(foundedReview?.comment);
      } else {
        dispatch(findReviewbyMail());
      }
    } else {
      dispatch(findReviewbyMail());
    }
  }, [dispatch, email, foundedReview]);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const hadnleReview = () => {
    const reviewData = {
      comment,
      currentValue,
      id,
    };

    foundedReview
      ? dispatch(updateReview(reviewData))
      : dispatch(addReview(reviewData));
  };

  return (
    <>
      <Navbar />
      <div className="review_container mt-5" style={styles.container}>
        <h2 className="mb-4 rate_header"> Rate this Website </h2>
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={
                  (hoverValue || currentValue) > index ? colors.orange : colors.grey
                }
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
            );
          })}
        </div>
        <textarea
          className="review_textbox"
          placeholder="What's your experience?"
          style={styles.textarea}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button
          className="review_button"
          onClick={hadnleReview}
          style={styles.button}
        >
          Submit
        </button>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 150,
    width: 320,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
};

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

export default Addreview;
