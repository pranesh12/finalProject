import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getTourguidesData } from "../../Redux/actions/tourguide";
import "./Tourguide.css";

const Tourguides = () => {
  const TourguidesData = useSelector((state) => state.tourGuidesReducer.fetchDAta);

  const dispatch = useDispatch();
  const [serarchKey, setSearchKey] = useState("");
  const [itemlist, setItemList] = useState(TourguidesData);

  useEffect(() => {
    dispatch(getTourguidesData());
  }, [dispatch]);

  const filterItems = (e) => {
    const filterdlist = TourguidesData.filter((item) =>
      item.district.toLowerCase().includes(serarchKey.toLowerCase())
    );
    setItemList(filterdlist);
  };
  return (
    <>
      <Navbar />
      <div className="tourguide_section">
        <div id="content" className="p-4 p-md-5 pt-5 col-md-10">
          <input
            value={serarchKey}
            className="form-control mb-5"
            type="name"
            placeholder="Search By District Name"
            onChange={(e) => setSearchKey(e.target.value)}
            onKeyUp={filterItems}
          />

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
              {itemlist?.map((person) => {
                return (
                  <>
                    <tr>
                      <td>{person.name}</td>
                      <td>
                        {person.address} , {person.district}
                      </td>
                      <td>{person.phone_number}</td>
                      {person?.status?.length === 8 ? (
                        <td
                          className="status"
                          style={{ color: "var(--primaryViolet)" }}
                        >
                          {person.status}
                        </td>
                      ) : (
                        <td
                          className="status"
                          style={{ color: "var(--primaryRed)" }}
                        >
                          {person.status}
                        </td>
                      )}
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
