import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
//import { stateData } from "../../data/stateData";
import { Navigate } from "react-router-dom";
import SurveyAdd from "../../components/surveyForm/SurveyAdd";
import AssignTo from "../../components/surveyForm/AssignTo";

const AddSurvey = () => {
  const [surveyId, setSurveyId] = useState("");

  return (
    <div className="wrapper">
      <div style={{ display: "flex", width: "100%", paddingLeft: 72 }}>
        {/* <div className="button" style={{ marginRight: 10 }}>
          Survey
        </div> */}
        {/* <div className="button">Meter Installation</div> */}
      </div>
      <SurveyAdd setSurveyId={setSurveyId} />
      {/* <AssignTo surveyId={surveyId} /> */}
    </div>
  );
};

export default AddSurvey;
