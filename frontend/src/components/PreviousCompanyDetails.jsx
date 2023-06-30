import React, { useState } from "react";

const PreviousCompanyDetails = ({
  previousCompanyDetails,
  setPreviousCompanyDetails,
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
          <p>Designation</p>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) =>
              setPreviousCompanyDetails({
                ...previousCompanyDetails,
                designation: e.target.value,
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
          <p>Company Name</p>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) =>
              setPreviousCompanyDetails({
                ...previousCompanyDetails,
                companyName: e.target.value,
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
          <p>Company Owner Name</p>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) =>
              setPreviousCompanyDetails({
                ...previousCompanyDetails,
                companyOwnerName: e.target.value,
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
      <div style={{ backgroundColor: "#fff", width: "100%", padding: "20px" }}>
        <p>Company Address</p>
        <input
          style={{ border: "none", outline: "none", width: "100%" }}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={(e) =>
            setPreviousCompanyDetails({
              ...previousCompanyDetails,
              companyAddress: e.target.value,
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
    </>
  );
};

export default PreviousCompanyDetails;
