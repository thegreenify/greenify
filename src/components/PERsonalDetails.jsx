import React, { useState } from "react";

const PERsonalDetails = ({
  personalDetail,
  setPersonalDetail,
  setIdProofImage,
  setPanCardImage,
  setProfileImage,
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
        <div style={{ backgroundColor: "#fff", width: "48%" }}>
          <p>Employee Name</p>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) =>
              setPersonalDetail({ ...personalDetail, name: e.target.value })
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
          <p>Email</p>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) =>
              setPersonalDetail({ ...personalDetail, email: e.target.value })
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
        <div style={{ backgroundColor: "#fff", width: "24%" }}>
          <p>Role</p>
        <select
            style={{
              border: "none",
              outline: "none",
              width: "95%",
              marginLeft: "15px",
              padding: "7px 0",
            }}
   
          >
             <option value="superAdmin">superAdmin</option>
          <option value="Admin">Admin</option>
          <option value="Surveyor">Surveyor</option>
          <option value="Contractor">Contractor</option>
          <option value="MeterInstaller">MeterInstaller</option>
            
  
            
          </select>

      </div>
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          width: "100%",
          display: "flex",
        }}
      >
        <div style={{ backgroundColor: "#fff", width: "48%" }}>
          <p>Gender</p>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) =>
              setPersonalDetail({ ...personalDetail, gender: e.target.value })
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
          <p>Date Of Barth</p>
          <input
          type="date"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) =>
              setPersonalDetail({ ...personalDetail, dateOfBarth: e.target.value })
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
        }}
      >
        <div style={{ backgroundColor: "#fff", width: "48%" }}>
          <p>Password</p>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) =>
              setPersonalDetail({ ...personalDetail, password: e.target.value })
            }
          />
          <div
            className="inputBottom"
            style={{
              backgroundColor: focus ? "#ff4a00" : "grey",
              paddingBottom: focus ? "1px" : "0.5px",
              margin: "0px 20px 10px",
              width: "100%",
            }}
          />
        </div>
        <div style={{ backgroundColor: "#fff", width: "48%" }}>
          <p>Confirm Password</p>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) =>
              setPersonalDetail({ ...personalDetail, password: e.target.value })
            }
          />
          <div
            className="inputBottom"
            style={{
              backgroundColor: focus ? "#ff4a00" : "grey",
              paddingBottom: focus ? "1px" : "0.5px",
              marginLeft: "20px",
            }}
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          width: "100%",
          display: "flex",
        }}
      >
        <div style={{ backgroundColor: "#fff", width: "30%" }}>
          <p>Mobile Number</p>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) =>
              setPersonalDetail({ ...personalDetail, mobileNumber: e.target.value })
            }
          />
          <div
            className="inputBottom"
            style={{
              backgroundColor: focus ? "#ff4a00" : "grey",
              paddingBottom: focus ? "1px" : "0.5px",
              marginLeft: "20px",
            }}
          />
        </div>
        <div style={{ backgroundColor: "#fff", width: "30%" }}>
          <p>Id Proof</p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              paddingLeft: "19px",
              paddingTop: "5px",
            }}
          >
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  borderRadius: "10px",
                  padding: "2px",
                  border:
                  personalDetail.idProof === "Adhaar Card"
                      ? "0.5px solid #ff4a00"
                      : "0.5px solid grey",
                }}
                onClick={() => {
                  setPersonalDetail({...personalDetail,idProof:"Adhaar Card"})
              }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    backgroundColor:
                    personalDetail.idProof === "Adhaar Card" ? "#ff4a00" : "#fff",
                  }}
                />
              </div>
              <p style={{ fontSize: "12px", paddingLeft: "5px" }}>
                Adhaar Card
              </p>
            </div>
            <div
              style={{
                display: "flex",
                width: "50%",
                marginBottom: "5px",
              }}
            >
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  borderRadius: "10px",
                  padding: "2px",
                  border:
                  personalDetail.idProof === "Voter ID"
                      ? "0.5px solid #ff4a00"
                      : "0.5px solid grey",
                }}
                onClick={() =>  setPersonalDetail({...personalDetail,idProof:"Voter ID"})}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    backgroundColor: personalDetail.idProof === "Voter ID" ? "#ff4a00" : "#fff",
                  }}
                />
              </div>
              <p style={{ fontSize: "12px", paddingLeft: "5px" }}>Voter ID</p>
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  borderRadius: "10px",
                  padding: "2px",
                  border:
                  personalDetail.idProof === "Driving License"
                      ? "0.5px solid #ff4a00"
                      : "0.5px solid grey",
                }}
                onClick={() =>  setPersonalDetail({...personalDetail,idProof:"Driving License"})}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    backgroundColor:
                    personalDetail.idProof === "Driving License" ? "#ff4a00" : "#fff",
                  }}
                />
              </div>
              <p style={{ fontSize: "12px", paddingLeft: "5px" }}>
                Driving License
              </p>
            </div>
          </div>
          <input style={{ marginTop: "10px" }} type="file" onChange={(e)=>setIdProofImage(e.target.files[0])} />
        </div>
        <div style={{ backgroundColor: "#fff", width: "30%" }}>
          <p>PAN Card</p>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) =>
              setPersonalDetail({ ...personalDetail, panCard: e.target.value })
            }
          />
          <div
            className="inputBottom"
            style={{
              backgroundColor: focus ? "#ff4a00" : "grey",
              paddingBottom: focus ? "1px" : "0.5px",
              marginLeft: "20px",
            }}
          />
          <input style={{ marginTop: "10px" }} type="file" onChange={(e)=>setPanCardImage(e.target.files[0])} />
        </div>
      </div>
      <p style={{ paddingLeft: "20px" }}>Profile Image</p>
      <input
        style={{ marginTop: "10px", marginLeft: "20px", marginBottom: "20px" }}
        type="file"
        onChange={(e)=>setProfileImage(e.target.files[0])}
      />
    </>
  );
};

export default PERsonalDetails;
