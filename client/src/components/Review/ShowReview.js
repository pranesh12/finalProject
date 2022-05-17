import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getAllReview } from "../../Redux/actions/review";

import "./showreview.css";

const AnoterCard = () => {
  const reviewState = useSelector((state) => state.getAllreviewReducer.fetchData);
  const slicedReview = reviewState?.slice(0, 3);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReview());
  }, [dispatch]);

  return (
    <div>
      <div className="container mt-5 mb-5 ">
        <div className="row ">
          {slicedReview?.map((review) => {
            return (
              <>
                <div className="col-md-4">
                  <div className="card p-3 mb-2">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div className="icon">
                          <i className="bx bxl-mailchimp"></i>{" "}
                        </div>
                        <div className="ms-2 c-details">
                          <h6 className="mb-0">{review.user.name}</h6>{" "}
                          <span>1 days ago</span>
                        </div>
                      </div>
                      <div className="badge">
                        <span>Review</span>
                      </div>
                    </div>
                    <div className="mt-5">
                      <h3 className="heading">{review.comment}</h3>
                      <div className="mt-5">
                        <div>
                          {Array(review.star)
                            .fill()
                            .map((_) => {
                              return (
                                <FaStar
                                  size={24}
                                  color={colors.orange}
                                  style={{
                                    marginRight: 10,
                                    cursor: "pointer",
                                  }}
                                />
                              );
                            })}
                        </div>
                        <div className="mt-3">
                          <span className="text1">
                            Mail: <span className="text2">{review.user.email}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

export default AnoterCard;
