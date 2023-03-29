const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
    },
    gender: {
      type: String,
      trim: true,
    },
    dateOfBarth: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    mobileNumber: {
      type: String,
      trim: true,
      unique: true,
    },
    idProof: {
      type: String,
      trim: true,
    },
    idProofPdf: {
      type: String,
      trim: true,
    },
    panCard: {
      type: String,
      trim: true,
    },
    panCardImage: {
      type: String,
      trim: true,
    },
    profileImage: {
      type: String,
      trim: true,
    },
    currentAddress: {
      state: {
        type: String,
        trim: true,
      },
      city: {
        type: String,
        trim: true,
      },
      pinCode: {
        type: String,
        trim: true,
      },
      fullAddress: {
        type: String,
        trim: true,
      },
    },
    permanentAddress: {
      state: {
        type: String,
        trim: true,
      },
      city: {
        type: String,
        trim: true,
      },
      pinCode: {
        type: String,
        trim: true,
      },
      fullAddress: {
        type: String,
        trim: true,
      },
    },
    familyReferences: {
      referenceName1: {
        type: String,
        trim: true,
      },
      relation1: {
        type: String,
        trim: true,
      },
      contactNumber1: {
        type: String,
        trim: true,
      },
      referenceName2: {
        type: String,
        trim: true,
      },
      relation2: {
        type: String,
        trim: true,
      },
      contactNumber2: {
        type: String,
        trim: true,
      },
    },
    previousCompanyDetails: {
      designation: {
        type: String,
        trim: true,
      },
      companyName: {
        type: String,
        trim: true,
      },
      companyOwnerName: {
        type: String,
        trim: true,
      },
      companyAddress: {
        type: String,
        trim: true,
      },
    },
    previousCompanyReferences: {
      refEmployeeName1: {
        type: String,
        trim: true,
      },
      mobile1: {
        type: String,
        trim: true,
      },
      designation1: {
        type: String,
        trim: true,
      },
      refEmployeeName2: {
        type: String,
        trim: true,
      },
      mobile2: {
        type: String,
        trim: true,
      },
      designation2: {
        type: String,
        trim: true,
      },
    },
    department: {
      type: String,
      trim: true,
    },
    designation: {
      type: String,
      trim: true,
    },
    dateOfJoining: {
      type: String,
      trim: true,
    },
    employeeCode: {
      type: String,
      trim: true,
    },
    officialEmail: {
      type: String,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    unActive: {
      type: String,
      trim: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    removedTime: {
      type: String,
      trim: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("employ", adminSchema);
