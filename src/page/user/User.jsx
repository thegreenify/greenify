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

const Employ = () => {
  const [surveyTeam, setSurveyTeam] = useState([]);

  useEffect(() => {
    ApiService.getEmployees().then((res) => {
      setSurveyTeam(res.data);
    });
  }, []);

  const columns = [
    {
      field: "fullName",
      headerName: "Name",
      width: 120,
      // renderCell: (params) => {
      //   return (
      //     <Link to="/employ-detail" className="button">
      //       Detail
      //     </Link>
      //   );
      // },
    },
    {
      field: "email",
      headerName: "Email",
      width: 180,
    },
    {
      field: "mobileNumber",
      headerName: "Contact Number",
      width: 150,
    },
  ];

  const rows = surveyTeam.map((row, index) => ({
    ...row,
    id: index + 1,
  }));
  return (
    <div>
      <Link
        style={{
          padding: "10px",
          background: "#b7e9f7",
          width: "230px",
          margin: "10px 0",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        to="/add-employ"
      >
        Add User{" "}
      </Link>
      <div style={{ marginTop: "15px", height: 200 }}>
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

export default Employ;
