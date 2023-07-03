import React from 'react'

const AddAllottee = () => {
  return (
    <div>
      <div id="accordion2">
<div class="card mb-2">
<div class="card-header bg-primary">
<a class="d-flex justify-content-between text-white text-large text-uppercase" data-toggle="collapse" aria-expanded="true" href="#accordion2-1">Allottee Details<div class="collapse-icon"></div></a>
</div>
<div id="accordion2-1" class="collapse show" data-parent="#accordion2">
<div class="card-body">

<form action="http://accounters.in/add_Allottee" method="post" enctype="multipart/form-data">
<div class="form-row">

<div class="form-group col-md-6">
<label class="form-label">Allottee Name</label>
<input type="text" name="name" id="name" class="form-control" placeholder="Full Name" maxlength="100" required=""/>
<div class="clearfix"></div>
</div>

<div class="form-group col-md-6">
<label class="form-label">Email</label>
<input type="email" name="email" id="email" class="form-control" placeholder="Email" maxlength="100"/>
<div class="clearfix"></div>
</div>

</div>

<div class="form-row">
    
<div class="form-group col-md-6">
<label class="form-label">Gender</label>
<select class="custom-select" name="gender" id="gender">
<option value="1">Male</option>
<option value="2">Female</option>
</select>
<div class="clearfix"></div>
</div>

<div class="form-group col-md-6">
<label class="form-label">Date of Birth</label>
<input type="date" name="dob" id="dob" class="form-control" placeholder="Date of Birth"/>
<div class="clearfix"></div>
</div>

</div>


<div class="form-row">



<div class="form-group col-md-4">
<label class="form-label">State</label>

<select class="custom-select" name="state" id="sel_state">
<option value="11">bihar</option>
<option value="9">andhra pradesh</option>
<option value="8">Maharastra</option>
<option value="7">Madhya Pradesh</option>
<option value="4">Madhya Pradesh</option>
</select>
<div class="clearfix"></div>
</div>

<div class="form-group col-md-4">
<label class="form-label">City</label>

<select class="custom-select" name="city" id="sel_city">
    <option>-- Select City --</option>
</select>
<div class="clearfix"></div>
</div>

<div class="form-group col-md-4">
<label class="form-label">Area</label>

<select class="custom-select" name="area" id="sel_area">
    <option>-- Select Area --</option>
</select>
<div class="clearfix"></div>
</div>

</div>



<div class="form-row">

<div class="form-group col-md-6">
<label class="form-label">Pin Code</label>

<select class="custom-select" name="pincode" id="sel_pin">
    <option>-- Select Pincode--</option>
</select>
<div class="clearfix"></div>
</div>






<div class="form-group col-md-6">
<label class="form-label">Mobile</label>
<input type="text" name="mobile" id="mobile" class="form-control" placeholder="Mobile" maxlength="10"/>
<div class="clearfix"></div>
</div>

</div>

<div class="form-row">

<div class="form-group col-md-12">
<label class="form-label">Home Address</label>
<input type="text" name="address" id="address" class="form-control" placeholder="1234 Main St" maxlength="200"/> 
<div class="clearfix"></div>
</div>

</div>




<div class="form-row">

<div class="form-group col-md-4">
<label class="form-label">Profile Image</label>
<input type="file" name="profileimage" id="profileimage" class="form-control" placeholder="sdf"/>
<div class="clearfix"></div>
</div>

<div class="form-group col-md-4">


<label class="form-label">Id Proof</label>
<div class="clearfix"></div>
<label class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="idproof" value="1"/>
<span class="form-check-label">Adhaar Card</span>
</label>
<label class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="idproof" value="2"/>
<span class="form-check-label">Voter ID</span>
</label>
<label class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="idproof" value="3"/>
<span class="form-check-label">Driving License</span>
</label>

<input type="file" name="idproofno" id="idproofno" class="form-control" placeholder="sdf"/>
<div class="clearfix"></div>
</div>

<div class="form-group col-md-4">
<label class="form-label">PAN Card</label>
<input type="text" name="pancardno" id="pancardno" class="form-control" placeholder="Pan Card No" maxlength="10"/>
<input type="file" name="pancard" id="pancard" class="form-control" placeholder="sdf"/>
<div class="clearfix"></div>
</div>

</div>


<div class="form-row">

<div class="form-group col-md-6">
<label class="form-label">Opening Balance</label>
<input type="text" name="openingbal" id="openingbal" class="form-control" placeholder="Opening Balance like 5000" maxlength="10"/>
<div class="clearfix"></div>
</div>

<div class="form-group col-md-6">
<label class="form-label">Credit/Debit</label>
<select class="custom-select" name="crdr" id="crdr">
<option value="1">Credit</option>
<option value="2">Debit</option>
</select>
<div class="clearfix"></div>
</div>

</div>

<div class="form-row">

<div class="form-group col-md-6">
<button type="submit" class="btn btn-primary">Save</button>
</div>

</div>



</form></div>

</div>

</div>


</div>
    </div>
  )
}

export default AddAllottee