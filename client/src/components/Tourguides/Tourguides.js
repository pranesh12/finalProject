import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getTourguidesData } from "../../Redux/actions/tourguide";

const Tourguides = () => {
  const TourguidesData = useSelector((state) => state.tourGuidesReducer.fetchDAta);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTourguidesData());
  }, [dispatch]);
  return (
    <>
      <Navbar />
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
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tourguides;
