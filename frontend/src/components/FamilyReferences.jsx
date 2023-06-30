import React, { useState } from "react";

const FamilyReferences = ({familyReference,setFamilyReferences}) => {
  const [focus, setFocus] = useState(false);
  const [check, setCheck] = useState("");
  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          width: "100%",
          display: "flex",
          justifyContent:"space-between",
        }}
      >
        <div style={{ backgroundColor: "#fff", width: "30%" }}>
          <p>Reference Name</p>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e)=>setFamilyReferences({...familyReference,referenceName1:e.target.value})}
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
          <p>Relation</p>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e)=>setFamilyReferences({...familyReference,relation1:e.target.value})}
          />
          <div
            className="inputBottom"
            style={{
              backgroundColor: focus ? "#ff4a00" : "grey",
              paddingBottom: focus ? "1px" : "0.5px",
            }}
          />
        </div>
        <div style={{ backgroundColor: "#fff", width: "30%",paddingRight:"20px" }}>
          <p>Mobile</p>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e)=>setFamilyReferences({...familyReference,contactNumber1:e.target.value})}
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
          paddingBottom:"10px"
        }}
      >
        <div style={{ backgroundColor: "#fff", width: "35%" }}>
          <p>Reference Name</p>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e)=>setFamilyReferences({...familyReference,referenceName2:e.target.value})}
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
          <p>Relation</p>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e)=>setFamilyReferences({...familyReference,relation2:e.target.value})}
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
            onChange={(e)=>setFamilyReferences({...familyReference,contactNumber2:e.target.value})}
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

export default FamilyReferences;
