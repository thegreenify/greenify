import React, { useState, useEffect } from "react";
import axios from "axios";
import ApiService from "../../api/ApiService";

const AssignTo = ({ surveyId }) => {
  const [areaData, setAreaData] = useState([]);
  const [surveyorId, setSurveyorId] = useState("");
  const [deadline, setDeadline] = useState("");
  const [authorization, setAuthorization] = useState("");
  const designation = "survey";

  useEffect(() => {
    ApiService.getEmployByDesignation(designation).then((res) => {
      setAreaData(res.data);
      setSurveyorId(areaData[0]?._id);
      if(areaData[0]._id===undefined){
        setSurveyorId(areaData[0]?._id)
      }
    });
  }, []);

  const handelSubmit = async () => {
    try {
      const url = "http://localhost:8000/survey/add-survey";

      await axios.post(url, { surveyorId, authorization, deadline, surveyId });
      window.location("/survey");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="accordion">
      <div className="item">
        <div className="title" style={{ background: "#55a3f4" }}>
          <p>ASSIGN TO</p>
        </div>
        <div style={{ backgroundColor: "#fff", padding: "20px 20px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <div className="input-style">
              <p>Surveyor Name</p>
              <select onChange={(e) => setSurveyorId(e.target.value)}>
                {areaData.map((item, index) => (
                  <option value={item._id} key={index}>
                    {item.fullName}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-style">
              <p>Authorization</p>
              <select onChange={(e) => setAuthorization(e.target.value)}>
                <option value="None">None</option>
                <option value="View">View</option>
                <option value="View+Add">View+Add</option>
                <option value="View+Add+Edit">View+Add+Edit</option>
                <option value="View+Add+Edit+Delete">
                  View+Add+Edit+Delete
                </option>
              </select>
            </div>
            <div className="input-style">
              <p>Deadline</p>
              <select onChange={(e) => setDeadline(e.target.value)}>
                <option value="None">None</option>
                <option value="10 Day's">10 Day's</option>
                <option value="20 Day's">20 Day's</option>
                <option value="25 Day's">25 Day's</option>
                <option value="1 Month">1 Month</option>
              </select>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#55a3f4",
              padding: "7px 20px",
              marginBottom: "10px",
              color: "#fff",
              cursor: "pointer",
              width: "75px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
            onClick={handelSubmit}
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignTo;
