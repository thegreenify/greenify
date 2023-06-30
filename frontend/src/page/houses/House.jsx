import React, { useState, useEffect } from "react";
import { StyledDataGrid } from "../../data/StyledDataGrid ";
import { CustomPagination } from "../../data/StyledDataGrid ";
import ApiService from "../../api/ApiService";

const House = () => {
  const [house, setHouse] = useState([]);

  useEffect(() => {
    ApiService.getHouse().then((res) => {
      setHouse(res.data);
    });
  }, []);

  console.log(house);
  const columns = [
    {
      field: "id",
      headerName: "S.No.",
      width: 60,
      valueGetter: (params) => params.row.id,
    },
    {
      field: "houseNo",
      headerName: "HouseNo",
      width: 100,
    },
    {
      field: "houseID",
      headerName: "House ID",
      width: 100,
      //   
    },
    {
      field: "houseType",
      headerName: "House Type",
      width: 100,
      //   valueGetter: (params) => params.row.areaId.cityName,
    },
    {
      field: "loft",
      headerName: "Loft",
      width: 70,
      //   valueGetter: (params) => params.row.areaId.divisionName,
      renderCell: (params) => {
        return (
          <>
            {params.row.lofts && Object.keys(params.row.lofts).length>0 ? (
              <p>Yes</p>
            ) : (
              <p>No</p>
            )}
          </>
        );
      },
    },
    {
      field: "state",
      headerName: "State",
      valueGetter: (params) => params.row.houseAdd.stateName,
    },
    // {
    //   field: "surveyAssign",
    //   headerName: "Assign To",
    //   width: 160,
    //   renderCell: (params) => {
    //     return (
    //       <div style={{ display: "flex", flexWrap: "wrap" }}>
    //         {params.row.surveyor.map((item, index) => (
    //           <p key={index}>{item.surveyorId.fullName}</p>
    //         ))}
    //       </div>
    //     );
    //   },
    // },
    // {
    //   field: "deadline",
    //   headerName: "Deadline",
    // },
    // {
    //   field: "Action",
    //   headerName: "Action",
    //   width: 120,
    //   renderCell: (params) => {
    //     return (
    //       <div
    //         style={{
    //           display: "flex",
    //           color: " #12a812",
    //           fontSize: 25,
    //           justifyContent: "space-between",
    //           width: "100%",
    //         }}
    //       >
    //         {/* <TbEdit style={{ cursor: "pointer" }} />
    //         <TiEyeOutline style={{ cursor: "pointer" }} />
    //         <RiDeleteBin6Line style={{ color: "red", cursor: "pointer" }} /> */}
    //       </div>
    //     );
    //   },
    // },
  ];

  const rows = house.map((row, index) => ({
    ...row,
    id: index + 1,
  }));
  return (
    <div style={{ height: "90vh", width: "100%" }}>
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
  );
};

export default House;
