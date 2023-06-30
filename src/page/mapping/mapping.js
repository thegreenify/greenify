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

const Mapping = () => {
  const [rough, setRough] = useState([]);

  useEffect(() => {
    ApiService.getRough().then((res) => {
        console.log(res.data, "rough");
      setRough(res.data.data);
    });

  }, []);

//   console.log(rough[0]?.purchaseDate.split("T")[0]);

  const columns = [
    {
      field: "id",
      headerName: "S.No.",
      width: 60,
      valueGetter: (params) => params.row.id,
    },
    {
      field: "houseNo",
      headerName: "House_No",
      width: 200,
    },
    {
      field: "blockNo",
      headerName: "Block No",
      width: 240,
    },
    {
      field: "meterSNo",
      headerName: "Meter_S_No",
      width: 110,
    },
    {
      field: "reading",
      headerName: "Reading",
      width: 110,
    },
    {
      field: "readingDate",
      headerName: "Reading Date(mm/dd/yy)",
      width: 210,
    },
  ];

    const rows = rough.map((row, index) => ({
      ...row,
      id: index + 1,
    }));
//   const rows = []
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
        <h3 style={{ padding: "10px 0 20px" }}>Mapping</h3>
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

export default Mapping;
