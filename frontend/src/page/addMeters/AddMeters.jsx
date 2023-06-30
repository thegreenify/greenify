import React, { useState } from "react";
import { BiCloudDownload } from "react-icons/bi";
import "./addMeters.css"
import { read, utils } from "xlsx";
import axios from "axios";

const AddMeters = () => {
  const [movies, setMovies] = useState([]);

  const handleImport = ($event) => {
    const files = $event.target.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const wb = read(event.target.result);
        const sheets = wb.SheetNames;

        if (sheets.length) {
          const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
          console.log(rows);
          setMovies(rows);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  //   const handleExport = () => {
  //     const headings = [[
  //         'Movie',
  //         'Category',
  //         'Director',
  //         'Rating'
  //     ]];
  //     const wb = utils.book_new();
  //     const ws = utils.json_to_sheet([]);
  //     utils.sheet_add_aoa(ws, headings);
  //     utils.sheet_add_json(ws, movies, { origin: 'A2', skipHeader: true });
  //     utils.book_append_sheet(wb, ws, 'Report');
  //     writeFile(wb, 'Movie Report.xlsx');
  // }

  const handelSubmit = async () => {
    //await ApiService.addMeters(formData)
    await axios.post("http://localhost:8000/meter/add-meter", { movies });
  };

  return (
    <div className="file">
      <h3 style={{paddingBottom:20}}>Chose A XLSX File</h3>
        <div className="file-input">
          <BiCloudDownload style={{fontSize:65}} />
          <p>Drag And Drop</p>
          or
          <input type="file" onChange={handleImport} />
        </div>
      <button onClick={handelSubmit}>Save</button>
    </div>
  );
};

export default AddMeters;
