import React, { useState } from "react";

const ParticularsAssignedByTheCompany = ({
  assignedToWork,
  setAssignedToWork,
}) => {
  const [focus, setFocus] = useState(false);
  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          width: "100%",
          display: "flex",
        }}
      >
        <div style={{ backgroundColor: "#fff", width: "38%" }}>
          <p>Department</p>
          {/* <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          /> */}
          <select
            style={{
              border: "none",
              outline: "none",
              width: "95%",
              marginLeft: "15px",
              padding: "7px 0",
            }}
            onChange={(e) =>
              setAssignedToWork({
                ...assignedToWork,
                department: e.target.value,
              })
            }
          >
            <option value="Account Department">Account Department</option>
            <option value="Marketing">Marketing</option>
            <option value="Consultant">Consultant</option>
            <option value="Developer">Developer</option>
            <option value="Survey">Survey</option>
          </select>
          <div
            className="inputBottom"
            style={{
              backgroundColor: focus ? "#ff4a00" : "grey",
              paddingBottom: focus ? "1px" : "0.5px",
            }}
          />
        </div>
        <div style={{ backgroundColor: "#fff", width: "38%" }}>
          <p>Designation</p>
          <select
            name="cars"
            style={{
              border: "none",
              outline: "none",
              width: "95%",
              marginLeft: "15px",
              padding: "7px 0",
            }}
            onChange={(e) =>
              setAssignedToWork({
                ...assignedToWork,
                designation: e.target.value,
              })
            }
          >
            <option value="Manager">Manager</option>
            <option value="Supervisor">Supervisor</option>
            <option value="Worker">Worker</option>
            <option value="Helper">Helper</option>
          </select>
          <div
            className="inputBottom"
            style={{
              backgroundColor: focus ? "#ff4a00" : "grey",
              paddingBottom: focus ? "1px" : "0.5px",
            }}
          />
        </div>
        <div style={{ backgroundColor: "#fff", width: "180px" }}>
          <p>Date OF Joining</p>
          <input
            type="date"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) =>
              setAssignedToWork({
                ...assignedToWork,
                dateOfJoining: e.target.value,
              })
            }
          />
          <div
            className="inputBottom"
            style={{
              backgroundColor: focus ? "#ff4a00" : "grey",
              paddingBottom: focus ? "1px" : "0.5px",
            }}
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          width: "100%",
          display: "flex",
          margin: "10px 0",
        }}
      >
        <div style={{ backgroundColor: "#fff", width: "48%" }}>
          <p>Employee Code</p>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) =>
              setAssignedToWork({
                ...assignedToWork,
                employeeCode: e.target.value,
              })
            }
          />
          <div
            className="inputBottom"
            style={{
              backgroundColor: focus ? "#ff4a00" : "grey",
              paddingBottom: focus ? "1px" : "0.5px",
            }}
          />
        </div>
        <div style={{ backgroundColor: "#fff", width: "48%" }}>
          <p>Official Email</p>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) =>
              setAssignedToWork({
                ...assignedToWork,
                officialEmail: e.target.value,
              })
            }
          />
          <div
            className="inputBottom"
            style={{
              backgroundColor: focus ? "#ff4a00" : "grey",
              paddingBottom: focus ? "1px" : "0.5px",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ParticularsAssignedByTheCompany;
