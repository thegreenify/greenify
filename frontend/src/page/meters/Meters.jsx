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

const Meters = () => {
  const [meters, setMeters] = useState([]);

  useEffect(() => {
    ApiService.getMeters().then((res) => {
      setMeters(res.data);
    });
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
      field: "productName",
      headerName: "Category",
      width: 100,
    },
    {
      field: "companyName",
      headerName: "Company Name",
      width: 140,
    },
    {
      field: "modelNumber",
      headerName: "Model Number",
      width: 110,
    },
    {
      field: "meterNumber",
      headerName: "Meter S.No.",
      width: 110,
    },
    {
      field: "status",
      headerName: "Status",
      width: 110,
      valueGetter: (params) => params.row.allocatedTo || "Allocatted"

    },
    {
      field: "allocattedTo",
      headerName: "Allocatted to",
      width: 110,
      valueGetter: (params) => params.row.allocatedTo || "Umakant garg"
    },

    // {
    //   field: "purchaseDate",
    //   headerName: "Purchase Date",
    //   width: 110,
    //   renderCell: (params) => {
    //     return <p>{params.row.purchaseDate.split("T")[0]}</p>;
    //   },
    // },
  ];

  const rows = meters.map((row, index) => ({
    ...row,
    id: index + 1,
  }));
  return (
    <div>
      <div style={{display:"flex",}}>
      <Link
        style={{
          padding: "10px",
          background: "#b7e9f7",
          margin: "10px 0",
          borderRadius: "5px",
          cursor: "pointer",
          textDecoration: "none",
          color: "#000",
          textAlign:"center"
        }}
        to="/add-meters"
      >
        Add Products
      </Link>
      <Link
        style={{
          padding: "10px",
          background: "#b7e9f7",
          margin: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          textDecoration: "none",
          color: "#000",
        }}
        to="/allocate-product"
      >
        Allocate Product
      </Link>
      </div>
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
        <h3 style={{ padding: "10px 0 20px" }}>Product's</h3>
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

export default Meters;
