import React, { useState, useEffect } from "react";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { StyledDataGrid } from "../../data/StyledDataGrid ";
import { CustomPagination } from "../../data/StyledDataGrid ";

const Zone = ({ state }) => {
  const [area, setArea] = useState({
    stateName: "",
  });
  const [cityName, setCityName] = useState("");
  const [regionName, setRegionName] = useState("");
  const [circleName, setCircleName] = useState("");
  const [cityData, setCityData] = useState([]);
  const ids = state.map((o) => o.stateName);
  const regions = state.filter(
    ({ stateName }, index) => !ids.includes(stateName, index + 1)
  );
  const [regionData, setRegionData] = useState([]);
  const [circleData, setCircleData] = useState([]);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handelState = async ({ currentTarget: input }) => {
    console.log(input.value);
    setArea({ ...area, stateName: input.value });
    await axios
      .post("http://localhost:8000/area/get-city", {
        stateName: input.value,
      })
      .then(async (res) => {
        const ids = res.data.cities.map((o) => o.cityName);
        const city = res.data.cities.filter(
          ({ cityName }, index) => !ids.includes(cityName, index + 1) != null
        );
        setCityData(city);
        setCityName(city[0].cityName);
        const reg = res.data.cities.map((o) => o.regionName);
        const region = res.data.cities.filter(
          ({ regionName }, index) =>
            !reg.includes(regionName, index + 1) && regionName != null
        );
        setRegionData(region);
        setRegionName(regionName);
        const cir = res.data.cities.map((o) => o.circleName);

        const circle = res.data.cities.filter(
          ({ circleName }, index) =>
            !cir.includes(circleName, index + 1) && circleName != null
        );
        setCircleData(circle);
        setCircleName(circle[0].circleName);
      });
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const columns = [
    {
      field: "id",
      headerName: "S.No.",
      width: 60,
      hideable: false,
      valueGetter: (params) => params.row.id,
    },
    {
      field: "zoneName",
      headerName: "Zone",
      width: 150,
    },
    {
      field: "circleName",
      headerName: "Circle",
      width: 150,
    },
    {
      field: "regionName",
      headerName: "Region",
      width: 150,
    },
    {
      field: "cityName",
      headerName: "City",
      width: 150,
    },
    {
      field: "stateName",
      headerName: "State",
      width: 150,
    },
    // {
    //   field: "country",
    //   headerName: "Country",
    //   width: 150,
    // },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      renderCell: (params) => {
        return (
          <p
            className="edit-button"
            style={{
              background: params.row.status == "Active" ? "#6ad699" : "red",
            }}
          >
            {params.row.status}
          </p>
        );
      },
    },
    {
      field: "Action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              padding: "0 10px",
            }}
          >
            <div className="edit-button">
              <TbEdit />
              Edit
            </div>
            <div
              className="edit-button"
              style={{
                backgroundColor: "#ff5269",
              }}
            >
              {" "}
              <RiDeleteBin6Line /> Delete
            </div>
          </div>
        );
      },
    },
  ];

  const data = state.filter(
    (item) => item.zoneName != null || item.zoneName != undefined
  );

  const rows = data.map((row, index) => ({
    ...row,
    id: index + 1,
  }));
  const handelSubmit = async () => {
    try {
      const url = "http://localhost:8000/area/add-area";

      await axios.post(url, {
        stateName: area.stateName,
        cityName: area.cityName,
        regionName: area.regionName,
        circleName: circleName,
        zoneName: area.zoneName,
      });
      toggleModal();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div style={{ paddingBottom: 50 }}>
      <div
        style={{ background: "#fff", width: "95%", border: "1px solid silver" }}
      >
        <p className="summary">Zone Summary</p>
        <div style={{ display: "flex" }}>
          <div className="total">
            <h2 style={{ padding: "20px 0" }}>{state.length}</h2>
            <p style={{ padding: "20px 0" }}>Total Zone</p>
          </div>
          <div className="total">
            <h2 style={{ padding: "20px 0" }}>1</h2>
            <p style={{ padding: "20px 0" }}>Active Zone</p>
          </div>
          <div className="total">
            <h2 style={{ padding: "20px 0" }}>1</h2>
            <p style={{ padding: "20px 0" }}>Inactive Zone</p>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "15px",
          width: "95%",
          background: "#fff",
          border: "1px solid silver",
          padding: "0 20px 20px",
        }}
      >
        <p style={{ padding: "20px 0", borderBottom: "1px solid silver" }}>
          States
        </p>
        <div
          style={{
            padding: "20px 0",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div className="button" onClick={toggleModal}>
            Add Zone
          </div>
        </div>
        <div style={{ height: 350, width: "100%" }}>
          <StyledDataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            sx={{}}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
            components={{
              Pagination: CustomPagination,
            }}
          />
        </div>
      </div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Add Zone</h4>

              <RxCross2 onClick={toggleModal} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <div className="input-style" style={{ width: 170 }}>
                <p>State</p>
                <select onChange={handelState}>
                  {regions.map((item, index) => (
                    <option value={item.stateName} key={index}>
                      {item.stateName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-style" style={{ width: 170 }}>
                <p>City</p>
                <select
                  onChange={(e) =>
                    setArea({ ...area, cityName: e.target.value })
                  }
                >
                  {cityData.map((item, index) => (
                    <option value={item.cityName} key={index}>
                      {item.cityName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-style" style={{ width: 170 }}>
                <p>Region</p>
                <select
                  onChange={(e) =>
                    setArea({ ...area, regionName: e.target.value })
                  }
                >
                  {regionData.map((item, index) => (
                    <option value={item.regionName} key={index}>
                      {item.regionName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-style" style={{ width: 250 }}>
                <p>Circle</p>
                <select
                  onChange={(e) =>
                    setArea({ ...area, circleName: e.target.value })
                  }
                >
                  {circleData.map((item, index) => (
                    <option value={item.circleName} key={index}>
                      {item.circleName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-style" style={{ width: 250 }}>
                <p>Zone</p>
                <input
                  onChange={(e) =>
                    setArea({ ...area, zoneName: e.target.value })
                  }
                />
              </div>
            </div>
            <div
              style={{ display: "flex", paddingTop: 10, alignItems: "center" }}
            >
              <div
                style={{
                  padding: "5px 10px",
                  background: "#ff4a00",
                  color: "#fff",
                  marginRight: 5,
                  cursor: "pointer",
                }}
                onClick={handelSubmit}
              >
                Save
              </div>
              <div
                style={{
                  padding: "5px 10px",
                  background: "#ff4a00",
                  color: "#fff",
                  marginRight: 5,
                }}
              >
                Exit
              </div>
              OR
              <div
                style={{
                  padding: "5px 10px",
                  background: "#ff4a00",
                  color: "#fff",
                }}
              >
                Add City
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Zone;