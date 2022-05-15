import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dashboard from "./DashBoard/DashBoard";
import { useDispatch, useSelector } from "react-redux";
import { getTourGuideById, updateTourGuide } from "../../Redux/actions/tourguide";

const TourGuideUpdate = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const foundedData = useSelector((state) => state.tourGuideByIdReducer.data);

  const [tourGuideData, settourGuideData] = useState({
    name: "",
    district: "",
    phone_number: "",
    address: "",
    status: "avilable",
  });

  useEffect(() => {
    if (foundedData) {
      if (id === foundedData._id) {
        settourGuideData({
          name: foundedData?.name,
          district: foundedData?.district,
          phone_number: foundedData?.phone_number,
          address: foundedData?.address,
          status: foundedData?.status,
        });
      } else {
        dispatch(getTourGuideById(id));
      }
    } else {
      dispatch(getTourGuideById(id));
    }
  }, [id, dispatch, foundedData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTourGuide(id, tourGuideData));
  };
  const handleChange = (e) => {
    settourGuideData({
      ...tourGuideData,
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
                name="status"
                value={tourGuideData.status}
                onChange={handleChange}
              >
                <option value="avilable">Avilable</option>
                <option value="not avilable">Not avilable</option>
              </select>
            </div>

            <div class="mb-3">
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={tourGuideData.name}
              />
            </div>

            <div class="mb-3">
              <input
                className="form-control"
                type="text"
                name="district"
                placeholder="District"
                value={tourGuideData.district}
                onChange={handleChange}
              />
            </div>

            <div class="mb-3">
              <input
                className="form-control"
                type="number"
                name="phone_number"
                placeholder="Phone number"
                value={tourGuideData.phone_number}
                onChange={handleChange}
              />
            </div>

            <div class="mb-3">
              <input
                className="form-control"
                type="text"
                name="address"
                placeholder="Address"
                value={tourGuideData.address}
                onChange={handleChange}
              />
            </div>

            <button className="btn submit_button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TourGuideUpdate;
