import React, { useState } from "react";

const PreviousCompanyReferences = ({
  previousCompanyReferences,
  setPreviousCompanyReferences,
}) => {
  const [focus, setFocus] = useState(false);
  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ backgroundColor: "#fff", width: "30%" }}>
          <p>Reference Employee Name</p>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) =>
              setPreviousCompanyReferences({
                ...previousCompanyReferences,
                refEmployeeName1: e.target.value,
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
        <div style={{ backgroundColor: "#fff", width: "30%" }}>
          <p>Mobile</p>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) =>
              setPreviousCompanyReferences({
                ...previousCompanyReferences,
                mobile1: e.target.value,
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
        <div
          style={{
            backgroundColor: "#fff",
            width: "30%",
            paddingRight: "20px",
          }}
        >
          <p>Designation</p>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) =>
              setPreviousCompanyReferences({
                ...previousCompanyReferences,
                designation1: e.target.value,
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
          paddingBottom: "10px",
        }}
      >
        <div style={{ backgroundColor: "#fff", width: "35%" }}>
          <p>Reference Name</p>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) =>
              setPreviousCompanyReferences({
                ...previousCompanyReferences,
                refEmployeeName2: e.target.value,
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
        <div style={{ backgroundColor: "#fff", width: "35%" }}>
          <p>Mobile</p>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) =>
              setPreviousCompanyReferences({
                ...previousCompanyReferences,
                mobile2: e.target.value,
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
        <div style={{ backgroundColor: "#fff", width: "35%" }}>
          <p>Designation</p>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) =>
              setPreviousCompanyReferences({
                ...previousCompanyReferences,
                designation2: e.target.value,
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

export default PreviousCompanyReferences;
