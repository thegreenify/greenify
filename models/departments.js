const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema(
  {
    departmentName: {
      type: String,
      trim: true,
      unique: true,
    },
    departmentUsers: {
      type: Number,
      trim: true,
    },
    type: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      trim: true,
      default: "active",
    },
    projects: {
      type: String,
      trim: true,
    },

    projectTemplates: {
      type: String,
      trim: true,
    },

    projectBillingInfo: {
      type: String,
      trim: true,
    },

    team: {
      type: String,
      trim: true,
    },

    leads: {
      type: String,
      trim: true,
    },

    tasks: {
      type: String,
      trim: true,
    },

    expenses: {
      type: String,
      trim: true,
    },

    timeSheets: {
      type: String,
      trim: true,
    },

    invoices: {
      type: String,
      trim: true,
    },

    payments: {
      type: String,
      trim: true,
    },

    products: {
      type: String,
      trim: true,
    },

    estimates: {
      type: String,
      trim: true,
    },

    proposals: {
      type: String,
      trim: true,
    },

    proposalTemplates: {
      type: String,
      trim: true,
    },

    contracts: {
      type: String,
      trim: true,
    },

    contractTemplates: {
      type: String,
      trim: true,
    },

    clients: {
      type: String,
      trim: true,
    },

    contacts: {
      type: String,
      trim: true,
    },

    tickets: {
      type: String,
      trim: true,
    },

    knowledgebase: {
      type: String,
      trim: true,
    },

    messages: {
      type: String,
      trim: true,
    },

    assignProjects: {
      type: String,
      trim: true,
    },

    assignLeads: {
      type: String,
      trim: true,
    },

    assignTasks: {
      type: String,
      trim: true,
    },

    setProjectPermissions: {
      type: String,
      trim: true,
    },

    manageKnowledgebase: {
      type: String,
      trim: true,
    },

    importContent: {
      type: String,
      trim: true,
    },

    exportContent: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("department", departmentSchema);
