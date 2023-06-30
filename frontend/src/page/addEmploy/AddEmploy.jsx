import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios";
import AddressDetails from "../../components/AddressDetails";
import FamilyReferences from "../../components/FamilyReferences";
import ParticularsAssignedByTheCompany from "../../components/ParticularsAssignedByTheCompany";
import PERsonalDetails from "../../components/PERsonalDetails";
import PreviousCompanyDetails from "../../components/PreviousCompanyDetails";
import PreviousCompanyReferences from "../../components/PreviousCompanyReferences";
import "./addEmploy.css";

const AddEmploy = () => {
  const [personalDetail, setPersonalDetail] = useState({
    name: "",
    email: "",
    gender: "",
    dateOfBarth: "",
    password: "",
    mobileNumber: "",
    idProof: "",
    panCard: "",
    cuniformPassword:""
  });
  const [currentAddress, setCurrentAddress] = useState({
    state: "",
    city: "",
    area: "",
    pincode: "",
    fullAddress: "",
  });
  const [permanentAddress, setPermanentAddress] = useState({
    state: "",
    city: "",
    area: "",
    pincode: "",
    fullAddress: "",
  });
  const [familyReference, setFamilyReferences] = useState({
    referenceName1: "",
    relation1: "",
    contactNumber1: "",
    referenceName2: "",
    relation2: "",
    contactNumber2: "",
  });
  const [previousCompanyDetails, setPreviousCompanyDetails] = useState({
    designation: "",
    companyName: "",
    companyOwnerName: "",
    companyAddress: "",
  });
  const [previousCompanyReferences, setPreviousCompanyReferences] = useState({
    refEmployeeName1: "",
    mobile1: "",
    designation1: "",
    refEmployeeName2: "",
    mobile2: "",
    designation2: "",
  });
  const [assignedToWork, setAssignedToWork] = useState({
    department: "",
    designation: "",
    dateOfJoining: "",
    employeeCode: "",
    officialEmail: "",
  });
  const [idProofImage, setIdProofImage] = useState(null);
  const [panCardImage, setPanCardImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [index, setIndex] = useState(null);

  const toggle = (string) => {
    if (index === string) {
      return setIndex(null);
    }
    setIndex(string);
  };

  const handelSubmit = async () => {
    try {
      const formData = new FormData();

      formData.append("idProofImage", idProofImage);
      formData.append("panCardImage", panCardImage);
      formData.append("profileImage", profileImage);
      formData.append("personalDetail", JSON.stringify(personalDetail));
      formData.append("currentDetails", JSON.stringify(currentAddress));
      formData.append("permanentAddress", JSON.stringify(permanentAddress));
      formData.append("familyReference", JSON.stringify(familyReference));
      formData.append(
        "previousCompanyDetails",
        JSON.stringify(previousCompanyDetails)
      );
      formData.append(
        "previousCompanyReferences",
        JSON.stringify(previousCompanyReferences)
      );
      formData.append("assignedToWork", JSON.stringify(assignedToWork));
      await axios.post("http://localhost:8000/employ/add-employ", formData);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        <div className="item">
          <div className="title" onClick={() => toggle("PERSONAL DETAILS")}>
            <p>PERSONAL DETAILS</p>
            {/* <span>{index === i ? "-" : "+"}</span> */}
            <IoIosArrowDown
              className={
                index === "PERSONAL DETAILS" ? "animating" : "animating2"
              }
            />
          </div>
          <div
            className={
              index === "PERSONAL DETAILS" ? "show content" : "content"
            }
          >
            <PERsonalDetails
              personalDetail={personalDetail}
              setPersonalDetail={setPersonalDetail}
              setIdProofImage={setIdProofImage}
              setPanCardImage={setPanCardImage}
              setProfileImage={setProfileImage}
            />
          </div>
        </div>
      </div>

      <div className="item" style={{ width: "900px" }}>
        <div
          className="title"
          style={{ backgroundColor: "#55a3f4" }}
          onClick={() => toggle("ADDRESS DETAILS")}
        >
          <p>ADDRESS DETAILS</p>
          <IoIosArrowDown
            className={index === "ADDRESS DETAILS" ? "animating" : "animating2"}
          />
        </div>
        <div
          className={index === "ADDRESS DETAILS" ? "show content" : "content"}
        >
          <AddressDetails
            currentAddress={currentAddress}
            setCurrentAddress={setCurrentAddress}
            permanentAddress={permanentAddress}
            setPermanentAddress={setPermanentAddress}
          />
        </div>
      </div>
      <div className="item" style={{ width: "900px" }}>
        <div
          className="title"
          style={{ backgroundColor: "#ff4a00" }}
          onClick={() => toggle("FAMILY REFERENCES")}
        >
          <p>FAMILY REFERENCES</p>
          <IoIosArrowDown
            className={
              index === "FAMILY REFERENCES" ? "animating" : "animating2"
            }
          />
        </div>
        <div
          className={index === "FAMILY REFERENCES" ? "show content" : "content"}
        >
          <FamilyReferences
            familyReference={familyReference}
            setFamilyReferences={setFamilyReferences}
          />
        </div>
      </div>
      <div className="item" style={{ width: "900px" }}>
        <div
          className="title"
          style={{ backgroundColor: "#ff4961" }}
          onClick={() => toggle("PREVIOUS COMPANY DETAILS")}
        >
          <p>PREVIOUS COMPANY DETAILS</p>
          <IoIosArrowDown
            className={
              index === "PREVIOUS COMPANY DETAILS" ? "animating" : "animating2"
            }
          />
        </div>
        <div
          className={
            index === "PREVIOUS COMPANY DETAILS" ? "show content" : "content"
          }
        >
          <PreviousCompanyDetails
            previousCompanyDetails={previousCompanyDetails}
            setPreviousCompanyDetails={setPreviousCompanyDetails}
          />
        </div>
      </div>
      <div className="item" style={{ width: "900px" }}>
        <div
          className="title"
          style={{ backgroundColor: "#f4ab55" }}
          onClick={() => toggle("PREVIOUS COMPANY REFERENCES")}
        >
          <p>PREVIOUS COMPANY REFERENCES</p>
          <IoIosArrowDown
            className={
              index === "PREVIOUS COMPANY REFERENCES"
                ? "animating"
                : "animating2"
            }
          />
        </div>
        <div
          className={
            index === "PREVIOUS COMPANY REFERENCES" ? "show content" : "content"
          }
        >
          <PreviousCompanyReferences
            previousCompanyReferences={previousCompanyReferences}
            setPreviousCompanyReferences={setPreviousCompanyReferences}
          />
        </div>
      </div>
      <div className="item" style={{ width: "900px" }}>
        <div
          className="title"
          style={{ backgroundColor: "#62d493" }}
          onClick={() => toggle("PARTICULARS ASSIGNED BY THE COMPANY")}
        >
          <p>PARTICULARS ASSIGNED BY THE COMPANY</p>
          <IoIosArrowDown
            className={
              index === "PARTICULARS ASSIGNED BY THE COMPANY"
                ? "animating"
                : "animating2"
            }
          />
        </div>
        <div
          className={
            index === "PARTICULARS ASSIGNED BY THE COMPANY"
              ? "show content"
              : "content"
          }
        >
          <ParticularsAssignedByTheCompany
            assignedToWork={assignedToWork}
            setAssignedToWork={setAssignedToWork}
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#ff4a00",
          padding: "7px 20px",
          marginBottom: "10px",
          color: "#fff",
          cursor: "pointer",
        }}
        onClick={handelSubmit}
      >
        Save
      </div>
    </div>
  );
};

export default AddEmploy;
