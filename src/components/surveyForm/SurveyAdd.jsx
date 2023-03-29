import React, { useState, useEffect } from "react";
import axios from "axios";
import ApiService from "../../api/ApiService";

const SurveyAdd = ({ setSurveyId }) => {
  const [surveyName,setSurveyName]=useState("")
  const [area, setArea] = useState({});
  const [stateName, setState] = useState("");
  const [areaData, setAreaData] = useState([]);
  const [divisionName, setDivisionName] = useState("");
  const [zoneName, setZoneName] = useState("");
  const [cityName, setCityName] = useState("");
  const [regionName, setRegionName] = useState("");
  const [circleName, setCircleName] = useState("");
  const [subdivisionName, setSubdivisionName] = useState("");
  const [cityData, setCityData] = useState([]);
  const [zoneData, setZoneData] = useState([]);
  const [divisionData, setDivisionData] = useState([]);
  const [subdivisionData, setSubdivisionData] = useState([]);
  const [regionData, setRegionData] = useState([]);
  const [circleData, setCircleData] = useState([]);
  const [pincode, setPincode] = useState("");
  const [pincodeData, setPincodeData] = useState([]);

  useEffect(() => {
    ApiService.getAreas().then((res) => {
      setAreaData(res.data);
    });
  }, []);

  const ids = areaData.map((o) => o.stateName);
  const stateData = areaData.filter(
    ({ stateName }, index) => !ids.includes(stateName, index + 1)
  );
  const handelState = async ({ currentTarget: input }) => {
    console.log(input.value);
    setState(input.value);
    await axios
      .post("http://localhost:8000/area/get-city", {
        stateName: input.value,
      })
      .then(async (res) => {
        const ids = res.data.cities.map((o) => o.cityName);
        const city = res.data.cities.filter(
          ({ cityName }, index) =>
            !ids.includes(cityName, index + 1) && cityName != null
        );
        setCityData(city);
        setCityName(city[0].cityName);
        const reg = res.data.cities.map((o) => o.regionName);
        const region = res.data.cities.filter(
          ({ regionName }, index) =>
            !reg.includes(regionName, index + 1) && regionName != null
        );
        setRegionData(region);
        setRegionName(region[0].regionName);
        const cir = res.data.cities.map((o) => o.circleName);

        const circle = res.data.cities.filter(
          ({ circleName }, index) =>
            !cir.includes(circleName, index + 1) && circleName != null
        );
        setCircleData(circle);
        setCircleName(circle[0].circleName);
        const zon = res.data.cities.map((o) => o.zoneName);
        const zone = res.data.cities.filter(
          ({ zoneName }, index) =>
            !zon.includes(zoneName, index + 1) && zoneName != null
        );

        setZoneName(zone[0].zoneName);
        setZoneData(zone);
        const divi = res.data.cities.map((o) => o.divisionName);
        const division = res.data.cities.filter(
          ({ divisionName }, index) =>
            !divi.includes(divisionName, index + 1) && divisionName != null
        );
        setDivisionName(division[0].divisionName);
        setDivisionData(division);
        const sub = res.data.cities.map((o) => o.subdivisionName);
        const subdivision = res.data.cities.filter(
          ({ subdivisionName }, index) =>
            !sub.includes(subdivisionName, index + 1) && subdivisionName != null
        );
        setSubdivisionName(subdivision[0].subdivisionName);
        setSubdivisionData(subdivision);
        const pin = res.data.cities.map((o) => o.pincode);
        const pincode = res.data.cities.filter(
          ({ pincode }, index) =>
            !pin.includes(pincode, index + 1) && pincode != null
        );
        setPincode(pincode[0].pincode);
        setPincodeData(pincode);
      });
  };
  const handelSubmit = async () => {
    try {
      const url = "http://localhost:8000/survey/add-survey";

      const res = await axios.post(url, {
        surveyName,
        stateName,
        cityName,
        regionName,
        circleName,
        zoneName,
        divisionName,
        subdivisionName,
        pincode,
      });
      setSurveyId(res.data);
      window.location("/survey");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <div
        style={{
          width: "82.5%",
          margin: "20px 0 0 0px",
          background: "#fff",
          padding: "20px",
        }}
      >
        <div className="input-style">
          <p>Survey Name</p>
          <input onChange={(e)=>setSurveyName(e.target.value)} />
        </div>
      </div>
      <div className="accordion">
        <div className="item">
          <div className="title">
            <p>ADDRESS DETAIL</p>
          </div>
          <div style={{ backgroundColor: "#fff", padding: "20px 20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="input-style">
                <p>State</p>
                <select onChange={handelState}>
                  {stateData.map((item, index) => (
                    <option value={item.stateName}>{item.stateName}</option>
                  ))}
                </select>
              </div>
              <div className="input-style">
                <p>City</p>
                <select onChange={(e) => setCityName(e.target.value)}>
                  {cityData.map((item, index) => (
                    <option value={item.cityName} key={index}>
                      {item.cityName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-style">
                <p>Region</p>
                <select onChange={(e) => setRegionName(e.target.value)}>
                  {regionData.map((item, index) => (
                    <option value={item.regionName} key={index}>
                      {item.regionName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="input-style">
                <p>Circle</p>
                <select onChange={(e) => setCircleName(e.target.value)}>
                  {circleData.map((item, index) => (
                    <option value={item.circleName} key={index}>
                      {item.circleName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-style">
                <p>Zone</p>
                <select onChange={(e) => setZoneName(e.target.value)}>
                  {zoneData.map((item, index) => (
                    <option value={item.zoneName} key={index}>
                      {item.zoneName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-style">
                <p>Division</p>
                <select onChange={(e) => setPincode(e.target.value)}>
                  {divisionData.map((item, index) => (
                    <option value={item.divisionName} key={index}>
                      {item.divisionName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "65%",
              }}
            >
              <div className="input-style" style={{ width: "46%" }}>
                <p>Sub Division</p>
                <select
                  onChange={(e) => setArea({ ...area, city: e.target.value })}
                >
                  {subdivisionData.map((item, index) => (
                    <option value={item.subdivisionName} key={index}>
                      {item.subdivisionName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-style" style={{ width: "46%" }}>
                <p>Pincode</p>
                <select
                  onChange={(e) => setArea({ ...area, city: e.target.value })}
                >
                  {pincodeData.map((item, index) => (
                    <option value={item.pincode} key={index}>
                      {item.pincode}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#ff4a00",
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
    </>
  );
};

export default SurveyAdd;
