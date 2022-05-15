import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {
  getTourguidesData,
  removeTourGuideData,
} from "../../Redux/actions/tourguide";
import Dashboard from "./DashBoard/DashBoard";

const AdminTourGuideList = () => {
  const dispatch = useDispatch();
  const TourguidesData = useSelector((state) => state.tourGuidesReducer.fetchDAta);

  useEffect(() => {
    dispatch(getTourguidesData());
  }, [dispatch]);

  const deleteTourGuide = (id) => {
    dispatch(removeTourGuideData(id));
  };

  return (
    <div className="row">
      <div className="d-flex align-items-stretch">
        <div className="col-md-2">
          <Dashboard />
        </div>
        <div id="content" className="p-4 p-md-5 pt-5 col-md-10">
          <div className="tourguide_section">
            <div id="content" className="p-4 p-md-5 pt-5 col-md-10">
              <h1 className="mx-auto">Tour Guides</h1>

              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Status</th>
                    <th>Edit / Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {TourguidesData?.map((person) => {
                    return (
                      <>
                        <tr>
                          <td>{person.name}</td>
                          <td>
                            {person.address} , {person.district}
                          </td>
                          <td>{person.phone_number}</td>
                          <td>avilable</td>

                          <td>
                            <div className="d-flex justify-content-around">
                              <div>
                                <Link to={`/admin/tourguideEdit/${person._id}`}>
                                  <i className="far fa-edit editIcon"></i>
                                </Link>
                              </div>
                              <div>
                                <i
                                  onClick={() => deleteTourGuide(person._id)}
                                  className="fas fa-trash-alt deleteIcon"
                                ></i>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTourGuideList;
