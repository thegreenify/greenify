import React, { useState } from "react";
import { stateData } from "../data/stateData";

const AddressDetails = ({
  currentAddress,
  setCurrentAddress,
  permanentAddress,
  setPermanentAddress,
}) => {
  const [focus, setFocus] = useState(false);
  const [state, setState] = useState("");
  const [state2, setState2] = useState("");

  const cites = stateData.filter((item) => {
    if (item.state === state) {
      return item.cites;
    }
  });

  const cites2 = stateData.filter((item) => {
    if (item.state === state2) return item.cites;
  });

  return (
    <>
      <p
        style={{
          margin: "0 20px",
          paddingTop: "5px",
          borderBottom: "0.5px solid grey",
          width: "95%",
        }}
      >
        Current Address
      </p>
      <div
        style={{
          backgroundColor: "#fff",
          width: "100%",
          display: "flex",
        }}
      >
        <div style={{ backgroundColor: "#fff", width: "24%" }}>
          <p>State</p>
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
            onChange={(e) => {
              setState(e.target.value);
              setCurrentAddress({
                ...currentAddress,
                state: e.target.value,
              });
            }}
          >
            {stateData.map((item, index) => (
              <option value={item.state} key={index}>
                {item.state}
              </option>
            ))}
          </select>
          <div
            className="inputBottom"
            style={{
              backgroundColor: focus ? "#ff4a00" : "grey",
              paddingBottom: focus ? "1px" : "0.5px",
            }}
          />
        </div>
        <div style={{ backgroundColor: "#fff", width: "24%" }}>
          <p>City</p>
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
              setCurrentAddress({
                ...currentAddress,
                city: e.target.value,
              })
            }
          >
            {cites[0] ?
              cites[0].cites.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              )):<option>--Select City--</option>}
          </select>
          <div
            className="inputBottom"
            style={{
              backgroundColor: focus ? "#ff4a00" : "grey",
              paddingBottom: focus ? "1px" : "0.5px",
            }}
          />
        </div>
        <div style={{ backgroundColor: "#fff", width: "24%" }}>
          <p>Area</p>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) =>
              setCurrentAddress({
                ...currentAddress,
                area: e.target.value,
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
        <div style={{ backgroundColor: "#fff", width: "24%" }}>
          <p>Pin Code</p>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) =>
              setCurrentAddress({
                ...currentAddress,
                pinCode: e.target.value,
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
        <p>Current Full Address</p>
        <input
          style={{ border: "none", outline: "none", width: "100%" }}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={(e) =>
            setCurrentAddress({
              ...currentAddress,
              fullAddress: e.target.value,
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
      <p
        style={{
          margin: "0 20px",
          paddingTop: "15px",
          borderBottom: "0.5px solid grey",
          width: "95%",
        }}
      >
        Permanent Address
      </p>
      <div
        style={{
          backgroundColor: "#fff",
          width: "100%",
          display: "flex",
        }}
      >
        <div style={{ backgroundColor: "#fff", width: "24%" }}>
          <p>State</p>
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
            onChange={(e) => {
              setState2(e.target.value);
              setPermanentAddress({
                ...permanentAddress,
                state: e.target.value,
              });
            }}
          >
            {stateData.map((item, index) => (
              <option value={item.state} key={index}>
                {item.state}
              </option>
            ))}
          </select>
          <div
            className="inputBottom"
            style={{
              backgroundColor: focus ? "#ff4a00" : "grey",
              paddingBottom: focus ? "1px" : "0.5px",
            }}
          />
        </div>
        <div style={{ backgroundColor: "#fff", width: "24%" }}>
          <p>City</p>
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
              setPermanentAddress({
                ...permanentAddress,
                city: e.target.value,
              })
            }
          >
            {cites2[0] ?
              cites2[0].cites.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              )):<option>--Select City--</option>}
          </select>
          <div
            className="inputBottom"
            style={{
              backgroundColor: focus ? "#ff4a00" : "grey",
              paddingBottom: focus ? "1px" : "0.5px",
            }}
          />
        </div>
        <div style={{ backgroundColor: "#fff", width: "24%" }}>
          <p>Area</p>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) =>
              setPermanentAddress({
                ...permanentAddress,
                area: e.target.value,
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
        <div style={{ backgroundColor: "#fff", width: "24%" }}>
          <p>Pin Code</p>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) =>
              setPermanentAddress({
                ...permanentAddress,
                pinCode: e.target.value,
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
        <p>Home Address</p>
        <input
          style={{ border: "none", outline: "none", width: "100%" }}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={(e) =>
            setPermanentAddress({
              ...permanentAddress,
              fullAddress: e.target.value,
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

export default AddressDetails;
