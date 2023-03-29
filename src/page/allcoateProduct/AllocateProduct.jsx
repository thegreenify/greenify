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
// import { Link } from "react-router-dom";
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

const AllocateProduct = () => {
  const [productData, setProductData] = useState([]);
  const [product, setProduct] = useState([]);
  const [rowSelectionModel, setRowSelectionModel] = useState([]);

  useEffect(() => {
    ApiService.getMeters().then((res) => {
      setProduct(res.data);
      const ids = res.data.map((o) => o.productName);
      setProductData(
        res.data.filter(
          ({ productName }, index) => !ids.includes(productName, index + 1)
        )
      );
    });
  }, []);

  console.log(rowSelectionModel);

  const columns = [
    {
      field: "id",
      headerName: "S.No.",
      width: 60,
      valueGetter: (params) => params.row.id,
    },
    {
      field: "productName",
      headerName: "Product",
      width: 100,
    },
    {
      field: "companyName",
      headerName: "Company Name",
      width: 140,
    },
    {
      field: "meterNumber",
      headerName: "Meter Number",
      width: 110,
    },
    {
      field: "modelNumber",
      headerName: "Model Number",
      width: 110,
    },
    {
      field: "select",
      headerName: "Select",
    },
  ];

  const rows = product.map((row, index) => ({
    ...row,
    id: index + 1,
  }));
  return (
    <div style={{ width: "95%", paddingLeft: 20, paddingBottom: 50 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div className="input-style" style={{ width: 250 }}>
          <p>Select Product</p>
          <select style={{ height: 30 }}>
            {productData.map((item, index) => (
              <option value={item.productName} key={index}>
                {item.productName}
              </option>
            ))}
          </select>
        </div>
        <div className="input-style" style={{ width: 250 }}>
          <p>Contractor Name</p>
          <input style={{ height: 30 }} />
        </div>
        <div className="input-style" style={{ width: 250 }}>
          <p>Contractor Email</p>
          <input style={{ height: 30 }} />
        </div>
        <div className="input-style" style={{ width: 250 }}>
          <p>Contractor Mobile Number</p>
          <input style={{ height: 30 }} />
        </div>
      </div>
      <div
        style={{
          height: "500px",
          width: "100%",
          background: "#fff",
          marginTop: 15,
        }}
      >
        <h3 style={{ padding: "10px 0 20px" }}>Product's</h3>
        <DataGrid
          autoHeight={true}
          checkboxSelection
          onRowSelectionModelChange={(newRowSelectionModel) => {
            console.log(newRowSelectionModel);
            setRowSelectionModel(newRowSelectionModel);
          }}
          rowSelectionModel={rowSelectionModel}
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
      <button style={{}}>Allocate</button>
    </div>
  );
};

export default AllocateProduct;
