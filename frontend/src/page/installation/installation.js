import React, { useState, useEffect } from "react";
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { Link } from "react-router-dom";
import ApiService from "../../api/ApiService";

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      variant="outlined"
      shape="rounded"
      page={page + 1}
      count={pageCount}
      renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

const Installation = () => {
  const [meters, setMeters] = useState([]);

  useEffect(() => {
    // ApiService.getMeters().then((res) => {
    //   setMeters(res.data);
    // });
  }, []);

  console.log(meters[0]?.purchaseDate.split("T")[0]);

  const columns = [
    {
      field: "id",
      headerName: "S.No.",
      width: 60,
      valueGetter: (params) => params.row.id,
    },
    {
      field: "siteName",
      headerName: "Site Name",
      width: 100,
    },
    {
      field: "contractorName",
      headerName: "Contractor Name",
      width: 140,
    },
    {
      field: "totalHouses",
      headerName: "Total Houses",
      width: 110,
    },
    {
      field: "totalMetersSupplied",
      headerName: "Total Meters Supplied",
      width: 210,
    },

    // {
    //   field: "purchaseDate",
    //   headerName: "Purchase Date",
    //   width: 110,
    //   renderCell: (params) => {
    //     return <p>{params.row.purchaseDate.split("T")[0]}</p>;
    //   },
    // },
    {
        field: "navigate",
        headerName: "Actions",
        width: 110,
        renderCell: (params) => (
          <Link to="/mapping">
            <button className="button">Mapping</button>
          </Link>
        ),
      },
  ];

  //   const rows = meters.map((row, index) => ({
  //     ...row,
  //     id: index + 1,
  //   }));
  const rows = [{
    id:1,
    siteName: "Aliganj",
    contractorName: "Umakant Garg",
    totalHouses : 315,
    totalMetersSupplied : 315

  }];
  return (
    <div>
      <div
        style={{
          height: "90vh",
          width: "97%",
          background: "#fff",
          marginTop: 15,
          paddingLeft: 20,
          borderRadius: 5,
        }}
      >
        <h3 style={{ padding: "10px 0 20px" }}>Installation</h3>
        <DataGrid
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
  );
};

export default Installation;
