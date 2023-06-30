const employModel = require("../models/employ");

exports.addEmploy = async (req, res) => {
  try {
    console.log(JSON.parse(req.body.personalDetail));
    let {
      personalDetail,
      currentDetails,
      permanentAddress,
      familyReference,
      previousCompanyDetails,
      previousCompanyReferences,
      assignedToWork,
    } = req.body;
    personalDetail = JSON.parse(personalDetail);
    currentDetails = JSON.parse(currentDetails);
    permanentAddress = JSON.parse(permanentAddress);
    familyReference = JSON.parse(familyReference);
    previousCompanyDetails = JSON.parse(previousCompanyDetails);
    previousCompanyReferences = JSON.parse(previousCompanyReferences);
    assignedToWork = JSON.parse(assignedToWork);

    const request = {
      fullName: personalDetail.name,
      email: personalDetail.email,
      gender: personalDetail.gender,
      dateOfBarth: personalDetail.dateOfBarth,
      password: personalDetail.password,
      mobileNumber: personalDetail.mobileNumber,
      idProof: personalDetail.idProof,
      idProofPdf: personalDetail.idProofPdf,
      panCard: personalDetail.panCard,
      panCardImage: personalDetail.panCardImage,
      profileImage: personalDetail.profileImage,
      currentDetails,
      permanentAddress,
      familyReference,
      previousCompanyDetails,
      previousCompanyReferences,
      department: assignedToWork.department,
      designation: assignedToWork.designation,
      dateOfJoining: assignedToWork.dateOfJoining,
      employeeCode: assignedToWork.employeeCode,
      officialEmail: assignedToWork.officialEmail,
    };
    const result = await employModel.create(request);
    return res.status(201).send("success");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

exports.getEmploy = async (req, res) => {
  try {
    const employs = await employModel.find();

    return res.status(200).send(employs);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

exports.getEmployByDesignation = async (req, res) => {
  try {
    const {designation} = req.body;

    const employ = await employModel.find({designation:designation});

    return res.status(200).send(employ)
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
