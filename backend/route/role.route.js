const express = require("express");
const router = express.Router();

const {addRole,getRoles,updateRole,deleteRole}= require("../controllers/role")

router.post("/",addRole);
router.get('/',getRoles);
router.put("/",updateRole);
router.delete("/",deleteRole);

module.exports = router