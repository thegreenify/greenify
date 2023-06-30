const roleModel = require("../models/role");

exports.addRole = async (req, res) => {
  try {
    //extract values from req body 
    //& create role
    //find whether the role already exists or not
    const {name, permissions} = req.body
    const role =await roleModel.findOne({name,isDeleted: false})
    if(role) return res.status(400).send({status:false, message:"This Role already exists"})

    const created =await roleModel.create({name, permissions})

return res.status(201).send({status:true, message:"successfully created role",data: created})
  } catch (err) {
    return res.status(500).send(err.message)
  }
};


exports.getRoles = async (req, res) => {
  try {

    const roles =await roleModel.find()
// if(!roles.length) return res.status(400).send
    return res.status(200).send({status:true, data:roles})
  } catch (err) {
    return res.status(500).send(err.message)
    
  }
};

exports.updateRole = async (req, res) => {
  try {
//findOne by the name & update the permissions key in the role
const {name, permissions} = req.body
const role = await roleModel.findOneAndUpdate({name}, {permissions}, {new: true})
res.status(200).send({status: true,message:"successfully updated" , data: role})
  } catch (err) {
    return res.status(500).send(err.message)
  }
};

exports.deleteRole = async (req, res) => {
  try {
    const {name} = req.body
    const role = await roleModel.findOneAndUpdate({name}, {isDeleted:true}, {new: true})
    res.status(200).send({status: true,message:"successfully deleted" ,data: role})
  } catch (err) {
    return res.status(500).send(err.message)
  }
};

