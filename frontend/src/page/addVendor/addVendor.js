import React from 'react'

const AddVendor = () => {
  return (
    <div><div className="card mb-2">
    <div className="card-header bg-info">
    <a className="d-flex justify-content-between text-white text-large text-uppercase" data-toggle="collapse" aria-expanded="true" href="#accordion2-2">Company/Firm Details<div className="collapse-icon"></div></a>
    </div>
    <div id="accordion2-2" className="collapse show" data-parent="#accordion2">
    <div className="card-body">
    
    <div className="form-row">
    
    {/* <!--<div className="form-group col-md-6">
    <label className="form-label">Company Type</label>
    <select className="custom-select" name="companytype" id="companytype">
    <option>Select Company Type</option>
    <option value="1">Private Ltd</option>
    <option value="2">Public Ltd</option>
    <option value="3">Limited Liability Partnership (LLP)</option>
    <option value="4">One Person Company (OPC)</option>
    <option value="5">Partnership</option>
    <option value="6">Sole Proprietorship</option>
    </select>
    <div className="clearfix"></div>
    </div>
    
    <div className="form-group col-md-6">
    <label className="form-label">Sector</label>
    <div className="clearfix"></div>
    
    <select id="bs-multiselect-2" name="sector[]" multiple>
    
    </select>
    
    <div className="clearfix"></div>
    </div> --> */}
    
    </div>
    
    <div className="form-row">
    
    <div className="form-group col-md-6">
        <input type="hidden" name="division" value="" className="form-control"/>
        <input type="hidden" name="company" value="" className="form-control"/>
    <label className="form-label">Company/Firm Name</label>
    <input type="text" name="companyname" id="companyname" className="form-control" placeholder="Company/Firm Name" maxlength="100"/>
    <div className="clearfix"></div>
    </div>
    
    <div className="form-group col-md-6">
    <label className="form-label">Company/Firm Owner Name</label>
    <input type="text" name="companyownername" id="companyownername" className="form-control" placeholder="Company/Firm Owner Name" maxlength="100"/>
    <div className="clearfix"></div>
    </div>
    
    </div>
    
    <div className="form-row">
        <div className="clearfix"><br/></div>
    </div>
    
    <div className="form-row">
    
    <div className="form-group col-md-6">
    <label className="form-label">Opening Balance</label>
    <input type="text" name="openingbal" id="openingbal" className="form-control" placeholder="Opening Balance like 5000" maxlength="10"/>
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
        <div className="clearfix"><br/></div>
    </div>
    
    <div className="form-row">
    
    <div className="form-group col-md-6">
    <label className="form-label">Company/Firm GST No.</label>
    <input type="text" name="gstno" id="gstno" className="form-control" placeholder="Company/Firm GST No" maxlength="100"/>
    <div className="clearfix"></div>
    </div>
    
    <div className="form-group col-md-6">
    <label className="form-label">Company/Firm Status</label>
    <select className="custom-select" name="companystatus" id="companystatus">
    <option>Select Company/Firm Status</option>
    <option value="1">Active</option>
    <option value="0">Inactive</option>
    </select>
    <div className="clearfix"></div>
    </div>
    
    </div>
    
    <div className="form-row">
        <div className="clearfix"><br/></div>
    </div>
    
    
    <div className="form-row">
    
    
    
    <div className="form-group col-md-6">
    <label className="form-label">State</label>
    
    <select className="custom-select" name="state" id="sel_state">
    <option value="11">bihar</option>
    <option value="9">andhra pradesh</option>
    <option value="8">Maharastra</option>
    <option value="7">Madhya Pradesh</option>
    <option value="4">Madhya Pradesh</option>
    </select>
    <div className="clearfix"></div>
    </div>
    
    <div className="form-group col-md-6">
    <label className="form-label">City</label>
    {/* <!-- <select className="custom-select" name="city" id="city" required>
    <option value="7">Itarsi</option>
    <option value="6">Sehore</option>
    <option value="5">Bhopal</option>
    <option value="3">Indore</option>
    <option value="4">Gwalior</option>
    </select> --> */}
    <select className="custom-select" name="city" id="sel_city">
        <option>-- Select City --</option>
    </select>
    <div className="clearfix"></div>
    </div>
    
    
    
    </div>
    
    <div className="form-row">
        <div className="clearfix"><br/></div>
    </div>
    
    <div className="form-row">
    <div className="form-group col-md-6">
    <label className="form-label">Area</label>
    {/* <!-- <select className="custom-select" name="area" id="area" required>
    <option value="3">MP Nagar</option>
    <option value="2">BERKHEDA PATHANI</option>
    <option value="1">Awadhpuri</option>
    </select> --> */}
    <select className="custom-select" name="area" id="sel_area">
        <option>-- Select Area --</option>
    </select>
    <div className="clearfix"></div>
    </div>
    <div className="form-group col-md-6">
    <label className="form-label">Pin Code</label>
    {/* <!-- <select className="custom-select" name="pincode" id="pincode" required>
    <option value="2">462022</option>
    </select> --> */}
    <select className="custom-select" name="pincode" id="sel_pin">
        <option>-- Select Pincode--</option>
    </select>
    <div className="clearfix"></div>
    </div>
    
    
    

    

    
    <div className="form-row">
        <div className="clearfix"><br/></div>
    </div>
    
    
    </div>
    <div className="form-row">
        <div className="clearfix"><br/></div>
    </div>
    <div className="form-row">
    
    <div className="form-group col-md-12">
    <label className="form-label">Company/Firm Address</label>
    <input type="text" name="companyaddress" id="companyaddress" className="form-control" placeholder="Company/Firm Address" maxlength="100"/>
    <div className="clearfix"></div>
    </div>
    </div>
    </div>
    </div>
    <div id="accordion2">
    <div className="card mb-2">
    <div className="card-header bg-primary">
    <a className="d-flex justify-content-between text-white text-large text-uppercase" data-toggle="collapse" aria-expanded="true" href="#accordion2-1">Personal Details<div className="collapse-icon"></div></a>
    </div>
    <div id="accordion2-1" className="collapse show" data-parent="#accordion2">
    <div className="card-body">
    
    <form action="http://accounters.in/add_vendor" method="post" enctype="multipart/form-data">
    <div className="form-row">
    
    <div className="form-group col-md-6">
    <label className="form-label">Vendor Name</label>
    <input type="text" name="name" id="name" className="form-control" placeholder="Full Name" maxlength="100"/>
    <div className="clearfix"></div>
    </div>
    
    <div className="form-group col-md-6">
    <label className="form-label">Email</label>
    <input type="email" name="email" id="email" className="form-control" placeholder="Email" maxlength="100"/>
    <div className="clearfix"></div>
    </div>
    
    </div>
    
    
    
    
    
    
    <div className="form-row">
    <div className="form-group col-md-6">
    <label className="form-label">Mobile</label>
    <input type="number" name="mobile" id="mobile" className="form-control" placeholder="Mobile" maxlength="10"/>
    <div className="clearfix"></div>
    </div>
    <div className="form-group col-md-6">
    <label className="form-label">Designation</label>
    <input type="text" name="designation" id="mobile" className="form-control" placeholder="Mobile" maxlength="10"/>
    <div className="clearfix"></div>
    </div>
    
    </div>
    <div className="form-row">
        
    <div className="form-group col-md-6">
    <label className="form-label">Gender</label>
    <select className="custom-select" name="gender" id="gender">
    <option value="1">Male</option>
    <option value="2">Female</option>
    </select>
    <div className="clearfix"></div>
    </div>
    
    <div className="form-group col-md-6">
    <label className="form-label">Date of Birth</label>
    <input type="date" name="dob" id="dob" className="form-control" placeholder="Date of Birth"/>
    <div className="clearfix"></div>
    </div>
    
    </div>
    
    {/* <!-- <div className="form-row">
    
    <div className="form-group col-md-12">
    <label className="form-label">Home Address</label>
    <input type="text" name="address" id="address" className="form-control" placeholder="1234 Main St" maxlength="200"> 
    <div className="clearfix"></div>
    </div>
    
    </div> --> */}
    
    
    
    
    <div className="form-row">
    
    <div className="form-group col-md-4">
    <label className="form-label">Profile Image</label>
    <input type="file" name="profileimage" id="profileimage" className="form-control" placeholder="sdf"/>
    <div className="clearfix"></div>
    </div>
    
    {/* <!-- <div className="form-group col-md-4">
    
    
    <label className="form-label">Id Proof</label>
    <div className="clearfix"></div>
    <label className="form-check form-check-inline">
    <input className="form-check-input" type="radio" name="idproof" value="1">
    <span className="form-check-label">Adhaar Card</span>
    </label>
    <label className="form-check form-check-inline">
    <input className="form-check-input" type="radio" name="idproof" value="2">
    <span className="form-check-label">Voter ID</span>
    </label>
    <label className="form-check form-check-inline">
    <input className="form-check-input" type="radio" name="idproof" value="3">
    <span className="form-check-label">Driving License</span>
    </label>
    
    <input type="file" name="idproofno" id="idproofno" className="form-control" placeholder="sdf">
    <div className="clearfix"></div>
    </div> --> */}
    
    {/* <!-- <div className="form-group col-md-4">
    <label className="form-label">PAN Card</label>
    <input type="text" name="pancardno" id="pancardno" className="form-control" placeholder="Pan Card No" maxlength="10">
    <input type="file" name="pancard" id="pancard" className="form-control" placeholder="sdf">
    <div className="clearfix"></div>
    </div> --> */}
    
    </div>
    
    
    
    </form></div>
    </div>
    </div>
    
    
    
    <div className="card mb-2">
    <div className="card-header bg-success">
    <a className="d-flex justify-content-between text-white text-large text-uppercase" data-toggle="collapse" aria-expanded="true" href="#accordion2-3">Bank Account Details<div className="collapse-icon"></div></a>
    </div>
    <div id="accordion2-3" className="collapse show" data-parent="#accordion2">
    <div className="card-body">
    
    <div className="form-row">
    
    <div className="form-group col-md-6">
    <label className="form-label">Bank Name</label>
    <input type="text" name="bankname" id="bankname" className="form-control" placeholder="Bank Name" maxlength="100"/>
    <div className="clearfix"></div>
    </div>
    
    <div className="form-group col-md-6">
    <label className="form-label">Account Holder Name</label>
    <input type="text" name="accountholder" id="accountholder" className="form-control" placeholder="Account Holder Name" maxlength="100"/>
    <div className="clearfix"></div>
    </div>
    
    </div>
    
    <div className="form-row">
        <div className="clearfix"><br/></div>
    </div>
    
    <div className="form-row">
    
    <div className="form-group col-md-6">
    <label className="form-label">Account Number</label>
    <input type="text" name="accountno" id="accountno" className="form-control" placeholder="Account Number" maxlength="100"/>
    <div className="clearfix"></div>
    </div>
    
    <div className="form-group col-md-6">
    <label className="form-label">IFSC Code</label>
    <input type="text" name="ifsccode" id="ifsccode" className="form-control" placeholder="IFSC Code" maxlength="100"/>
    <div className="clearfix"></div>
    </div>
    
    </div>
    
    <div className="form-row">
        <div className="clearfix"><br/></div>
    </div>
    
    <div className="form-row">
    
    <div className="form-group col-md-12">
    <label className="form-label">Branch Name &amp; Address</label>
    <input type="text" name="branchnameaddress" id="branchnameaddress" className="form-control" placeholder="Branch Name &amp; Address" maxlength="100"/>
    <div className="clearfix"></div>
    </div>
    
    </div>
    
    <div className="form-row">
    
    <div className="form-group col-md-6">
    <button type="submit" className="btn btn-primary">Save</button>
    </div>
    
    </div>
    

    
    
    
    
    </div>
    </div>
    </div>
    <div className="form-row">
    
    <div className="form-group col-md-6">
    </div>
    
    </div>
    
    
    
    <div className="card mb-2">
    <div className="card-header">
    <a className="collapsed d-flex justify-content-between text-dark" data-toggle="collapse" aria-expanded="true" href="#accordion2-4">Other Details<div className="collapse-icon"></div></a>
    </div>
    <div id="accordion2-4" className="collapse show" data-parent="#accordion2">
    <div className="card-body">
    
    <div className="form-row">
    
    <div className="form-group col-md-6">
    <label className="form-label">Contact Person Name</label>
    <input type="text" name="pname" id="pname" className="form-control" placeholder="Contact Person Name" maxlength="100"/>
    <div className="clearfix"></div>
    </div>
    
    <div className="form-group col-md-6">
    <label className="form-label">Contact Person Email</label>
    <input type="email" name="pemail" id="pemail" className="form-control" placeholder="Contact Person Email" maxlength="100"/>
    <div className="clearfix"></div>
    </div>
    
    </div>
    
    <div className="form-row">
    
    <div className="form-group col-md-6">
    <label className="form-label">Contact Person Mobile</label>
    <input type="text" name="pmobile" id="pmobile" className="form-control" placeholder="Contact Person Mobile" maxlength="100"/>
    <div className="clearfix"></div>
    </div>
    
    <div className="form-group col-md-6">
    <label className="form-label">Contact Person Designation</label>
    <input type="text" name="pdesignation" id="pdesignation" className="form-control" placeholder="Contact Person Designation" maxlength="100"/>
    <div className="clearfix"></div>
    </div>
    
    </div>
    
    <div className="form-row">
    
    <div className="form-group col-md-6">
    <label className="form-label">Contact Person Name</label>
    <input type="text" name="pname2" id="pname2" className="form-control" placeholder="Contact Person Name" maxlength="100"/>
    <div className="clearfix"></div>
    </div>
    
    <div className="form-group col-md-6">
    <label className="form-label">Contact Person Email</label>
    <input type="email" name="pemail2" id="pemail2" className="form-control" placeholder="Contact Person Email" maxlength="100"/>
    <div className="clearfix"></div>
    </div>
    
    </div>
    
    <div className="form-row">
    
    <div className="form-group col-md-6">
    <label className="form-label">Contact Person Mobile</label>
    <input type="text" name="pmobile2" id="pmobile2" className="form-control" placeholder="Contact Person Mobile" maxlength="100"/>
    <div className="clearfix"></div>
    </div>
    
    <div className="form-group col-md-6">
    <label className="form-label">Contact Person Designation</label>
    <input type="text" name="pdesignation2" id="pdesignation2" className="form-control" placeholder="Contact Person Designation" maxlength="100"/>
    <div className="clearfix"></div>
    </div>
    
    </div>
    
    
    <div className="form-row">
    <div className="form-group col-md-6">
    <button type="submit" className="btn btn-primary">Save</button>
    <div className="clearfix"></div>
    </div>
    </div>
   
    </div>
    </div>
    </div> 
    
    
    
    </div>
    </div></div>
  )
}

export default AddVendor