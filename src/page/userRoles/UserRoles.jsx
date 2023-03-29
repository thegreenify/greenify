import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import { StyledDataGrid } from "../../data/StyledDataGrid ";
import { CustomPagination } from "../../data/StyledDataGrid ";
import ApiService from "../../api/ApiService";
import { roleData } from "../../data/roleData";
import { Checkbox } from "@mui/material";

const UserRoles = () => {
  const [surveyTeam, setSurveyTeam] = useState([]);
  const [string, setString] = useState("");
  const [modal, setModal] = useState(false);
  const menu = ["None", "View", "View+Add+Edit", "View+Add+Edit+Delete"];

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  useEffect(() => {
    ApiService.getEmployees().then((res) => {
      setSurveyTeam(res.data);
    });
  }, []);

  const columns = [
    {
      field: "departmentName",
      headerName: "Department Name",
      width: 170,
    },
    {
      field: "activeUsers",
      headerName: "Active Users",
      width: 180,
    },
    {
      field: "type",
      headerName: "Type",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
    },
    {
      field: "Action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <div
            style={{
              display: "flex",
              color: " #12a812",
              fontSize: 25,
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <TbEdit style={{ cursor: "pointer" }} />
            <AiOutlineHome style={{ cursor: "pointer" }} />
            <RiDeleteBin6Line style={{ color: "red", cursor: "pointer" }} />
          </div>
        );
      },
    },
  ];

  const rows = surveyTeam.map((row, index) => ({
    ...row,
    id: index + 1,
  }));
  return (
    <div
      style={{
        height: 350,
        width: "100%",
        background: "#fff",
        paddingRight: 20,
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button className="add-button" onClick={toggleModal}>
          +
        </button>
      </div>
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
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div
            className="modal-content"
            style={{ maxWidth: 700, minWidth: 300, width: "100%", top: 900 }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4 style={{ color: "#4cbee8" }}>Create A New Role</h4>
              <RxCross2
                className="add-button"
                style={{ width: 25, height: 25 }}
                onClick={toggleModal}
              />
            </div>
            <p>Role Name</p>
            <input className="input" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                border: "0.5px solid silver",
                marginTop: "20px",
                padding: "0px 20px",
              }}
            >
              <p
                style={{
                  width: "45%",
                  borderRight: "0.5px solid silver",
                  padding: "5px",
                }}
              >
                Resource
              </p>
              <p
                style={{
                  width: "40%",
                  borderRight: "0.5px solid silver",
                  padding: "5px",
                }}
              >
                Permission
              </p>
              <p style={{ width: "15%", padding: "5px" }}>Global</p>
            </div>
            {roleData.map((item, index) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  borderBottom: "0.5px solid silver",
                  borderLeft: "0.5px solid silver",
                  borderRight: "0.5px solid silver",
                  padding: "0px 20px",
                }}
              >
                <p
                  style={{
                    width: "45%",
                    borderRight: "0.5px solid silver",
                    padding: "10px",
                  }}
                >
                  {item}
                </p>
                <div className="dropdown2">
                  <div
                    style={{
                      textAlign: "center",
                      border: "1px solid silver",
                      padding: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      if (string === item) return setString("");
                      setString(item);
                    }}
                  >
                    {menu[0]}
                  </div>
                  <div className={string === item ? "active" : "dropdown_item"}>
                    {menu.map((str, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          setString("");
                        }}
                      >
                        {str}
                      </div>
                    ))}
                  </div>
                </div>
                <Checkbox style={{ width: "15%", padding: "5px" }} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserRoles;
