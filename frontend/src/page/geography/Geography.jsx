import React, { useState, useEffect } from "react";
import { CgStack } from "react-icons/cg";
import { StateModel } from "../../components/master/Model";
import ApiService from "../../api/ApiService";
import City from "../../components/master/City";
import Region from "../../components/master/Region";
import Circle from "../../components/master/Circle";
import Zone from "../../components/master/Zone";
import Division from "../../components/master/Division";
import SubDivision from "../../components/master/SubDivision";
import Pincode from "../../components/master/Pincode";

const Geography = () => {
  const [string, setString] = useState("State");
  const [areaData, setAreaData] = useState([]);
  useEffect(() => {
    ApiService.getAreas().then((res) => {
      console.log(res.data);
      setAreaData(res.data);
    });
  }, []);
  const data = [
    {
      title: "State",
      colorCode: "#ff4a00",
    },
    {
      title: "City",
      colorCode: "#55a3f4",
    },
    {
      title: "Region",
      colorCode: "#ff4a00",
    },
    {
      title: "Circle",
      colorCode: "#ff4961",
    },

    {
      title: "Zone",
      colorCode: "#f4ab55",
    },
    {
      title: "Division",
      colorCode: "#62d493",
    },
    {
      title: "Sub Division",
      colorCode: "#55a3f4",
    },
    {
      title: "Pincode",
      colorCode: "#ff4a00",
    },
  ];
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "95%",
        }}
      >
        {data.map((item, index) => (
          <div
            style={{
              background: "#fff",
              padding: "10px 20px",
              boxShadow: "0px 5px 7px lightgrey",
              fontSize: 17,
              fontWeight: "bold",
              width: 240,
              marginBottom: 10,
              borderRadius: 10,
              color: `${item.colorCode}`,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: `1px solid ${item.colorCode}`,
                borderRadius: 30,
              }}
            >
              <CgStack style={{ fontSize: 35 }} />
            </div>
            <div
              style={{
                width: "60%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p>{item.title}</p>
              <p style={{ fontSize: 20, padding: "10px 0" }}>1</p>
              <div
                style={{
                  fontSize: 11,
                  border: `1px solid ${item.colorCode}`,
                  padding: "5px 10px",
                  borderRadius: 25,
                  cursor: "pointer",
                  width: "100%",
                }}
                onClick={() => setString(item.title)}
              >
                Click Here to view
              </div>
            </div>
          </div>
        ))}
      </div>

      {string === "City" ? (
        <City state={areaData} />
      ) : string === "Region" ? (
        <Region state={areaData}  />
      ) : string === "Circle" ? (
        <Circle state={areaData} />
      ) : string === "Zone" ? (
        <Zone
          state={areaData}
        />
      ) : string === "Division" ? (
        <Division
          state={areaData}
        />
      ) : string === "Sub Division" ? (
        <SubDivision
          state={areaData}
        />
      ) : string === "Pincode" ? (
        <Pincode
          state={areaData}
        />
      ) : (
        <StateModel areaData={areaData} />
      )}
    </div>
  );
};

export default Geography;
