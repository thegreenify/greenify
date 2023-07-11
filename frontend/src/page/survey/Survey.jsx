import React, { useState,useEffect } from "react";
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import {TiEyeOutline} from "react-icons/ti"
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

const Survey = () => {
    const [area, setArea] = useState([]);

    useEffect(()=>{
  
      ApiService.getSurvey().then((res)=> {setArea(res.data);
        // console.log(res.data, "sitessss");
      })
    },[])

    console.log(area)
    const columns = [
      {
        field: "id",
        headerName: "S.No.",
        width: 60,
         valueGetter: (params) => params.row.id,
      },
      {
        field:"surveyName",
        headerName:"Site Name",
        width:150
      },
      {
        field: "state",
        headerName: "State",
        width: 140,
        valueGetter: (params) => params.row.areaId.stateName,
      },
      {
        field: "city",
        headerName: "City",
        width: 160,
        valueGetter: (params) => params.row.areaId.cityName,
      },
      {
        field: "division",
        headerName: "Division",
        width: 140,
        valueGetter: (params) => params.row.areaId.divisionName,
      },
      {
        field:"status",
        headerName:"Status",
      },
      {
        field:"surveyAssign",
        headerName:"Assign To",
        width: 160,
        renderCell:(params)=>{
          return(
            <div style={{display:"flex",flexWrap:"wrap"}}>
            {/* {params.row.surveyor.map((item,index)=>(
              <p key={index}>{item.surveyorId
                .fullName}</p>
            ))} */}
            </div>
          )
        }
      },
      {
        field:"deadline",
        headerName:"Deadline"
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
              <TiEyeOutline style={{ cursor: "pointer" }} />
              <RiDeleteBin6Line style={{ color: "red", cursor: "pointer" }} />
            </div>
          );
        },
      },
    ];
  
    const rows = area.map((row, index) => ({
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
        to="/start-survey"
      >
        Add New Site
      </Link>
      <div style={{ marginTop: "15px",height:"100vh" }}>
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
  )
}

export default Survey