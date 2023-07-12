import React, { useState } from "react";

const AddAllottee = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    dob: "",
    state: "",
    city: "",
    area: "",
    pincode: "",
    mobile: "",
    address: "",
    profileimage: null,
    idproof: "",
    idproofno: null,
    pancardno: "",
    pancard: null,
    openingbal: "",
    crdr: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("addAllottee", formData);

    // try {
    //   const response = await fetch("http://localhost:8000/addAllottee", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (!response.ok) {
    //     throw new Error("Failed to save allottee");
    //   }

    //   // Handle successful response
    //   alert("Allottee saved successfully");
    // } catch (error) {
    //   console.error("Error saving allottee:", error);
    // }
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'checkbox') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: checked,
      }));
    } else if (type === 'file') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  return (
    <div>
      <div id="accordion2">
        <div className="card mb-2">
          <div className="card-header bg-primary">
            <a
              className="d-flex justify-content-between text-white text-large text-uppercase"
              data-toggle="collapse"
              aria-expanded="true"
              href="#accordion2-1"
            >
              Allottee Details<div className="collapse-icon"></div>
            </a>
          </div>
          <div
            id="accordion2-1"
            className="collapse show"
            data-parent="#accordion2"
          >
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label className="form-label">Allottee Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Full Name"
                      maxLength="100"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <div className="clearfix"></div>
                  </div>

                  <div className="form-group col-md-6">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Email"
                      maxLength="100"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <div className="clearfix"></div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label className="form-label">Gender</label>
                    <select className="custom-select" name="gender" id="gender"
                                  value={formData.gender}
                                  onChange={handleChange}>
                      <option >-- Select Gender --</option>
                      <option value="m">Male</option>
                      <option value="f">Female</option>
                    </select>
                    <div className="clearfix"></div>
                  </div>

                  <div className="form-group col-md-6">
                    <label className="form-label">Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      id="dob"
                      className="form-control"
                      placeholder="Date of Birth"
                      value={formData.dob}
                      onChange={handleChange}
                    />
                    <div className="clearfix"></div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label className="form-label">State</label>

                    <select
                      className="custom-select"
                      name="state"
                      id="sel_state"
                      value={formData.state}
                      onChange={handleChange}
                    >
                      <option>-- Select State --</option>
                    </select>
                    <div className="clearfix"></div>
                  </div>

                  <div className="form-group col-md-4">
                    <label className="form-label">City</label>

                    <select className="custom-select" name="city" id="sel_city">
                      <option>-- Select City --</option>
                    </select>
                    <div className="clearfix"></div>
                  </div>

                  <div className="form-group col-md-4">
                    <label className="form-label">Area</label>

                    <select className="custom-select" name="area" id="sel_area">
                      <option>-- Select Area --</option>
                    </select>
                    <div className="clearfix"></div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label className="form-label">Pin Code</label>

                    <select
                      className="custom-select"
                      name="pincode"
                      id="sel_pin"
                    >
                      <option>-- Select Pincode--</option>
                    </select>
                    <div className="clearfix"></div>
                  </div>

                  <div className="form-group col-md-6">
                    <label className="form-label">Mobile</label>
                    <input
                      type="text"
                      name="mobile"
                      id="mobile"
                      className="form-control"
                      placeholder="Mobile"
                      maxLength="10"
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                    <div className="clearfix"></div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label className="form-label">Home Address</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      className="form-control"
                      placeholder="1234 Main St"
                      maxLength="200"
                      value={formData.address}
                      onChange={handleChange}
                    />
                    <div className="clearfix"></div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label className="form-label">Profile Image</label>
                    <input
                      type="file"
                      name="profileimage"
                      id="profileimage"
                      className="form-control"
                      placeholder="sdf"
                      onChange={handleChange}
                    />
                    <div className="clearfix"></div>
                  </div>

                  <div className="form-group col-md-4">
                    <label className="form-label">Id Proof</label>
                    <div className="clearfix"></div>
                    <label className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="idproof"
                        value="1"
                      />
                      <span className="form-check-label">Adhaar Card</span>
                    </label>
                    <label className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="idproof"
                        value="2"
                      />
                      <span className="form-check-label">Voter ID</span>
                    </label>
                    <label className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="idproof"
                        value="3"
                      />
                      <span className="form-check-label">Driving License</span>
                    </label>

                    <input
                      type="file"
                      name="idproofno"
                      id="idproofno"
                      className="form-control"
                      placeholder="sdf"
                    />
                    <div className="clearfix"></div>
                  </div>

                  <div className="form-group col-md-4">
                    <label className="form-label">PAN Card</label>
                    <input
                      type="text"
                      name="pancardno"
                      id="pancardno"
                      className="form-control"
                      placeholder="Pan Card No"
                      maxLength="10"
                      value={formData.pancardno}
                      onChange={handleChange}
                    />
                    <input
                      type="file"
                      name="pancard"
                      id="pancard"
                      className="form-control"
                      placeholder="sdf"
                      onChange={handleChange}
                    />
                    <div className="clearfix"></div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label className="form-label">Opening Balance</label>
                    <input
                      type="text"
                      name="openingbal"
                      id="openingbal"
                      className="form-control"
                      placeholder="Opening Balance like 5000"
                      maxLength="10"
                    />
                    <div className="clearfix"></div>
                  </div>

                  <div className="form-group col-md-6">
                    <label className="form-label">Credit/Debit</label>
                    <select className="custom-select" name="crdr" id="crdr">
                      <option value="1">Credit</option>
                      <option value="2">Debit</option>
                    </select>
                    <div className="clearfix"></div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAllottee;
