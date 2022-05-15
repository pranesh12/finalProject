import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTourGuide } from "../../Redux/actions/tourguide";
import Dashboard from "./DashBoard/DashBoard";

const AddTourGuide = () => {
  const dispatch = useDispatch();
  const [tourGuideData, settourGuideData] = useState({
    name: "",
    district: "",
    phone_number: "",
    address: "",
    status: "avilable",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTourGuide(tourGuideData));
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
          <h2 className="mb-4 text-center">Add Article</h2>

          {/* Adding form */}
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

export default AddTourGuide;
