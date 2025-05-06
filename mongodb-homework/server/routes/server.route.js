const { Router } = require("express");
const {
  addFacultyMember,
  getAllFacultyMembers,
  deleteFacultyMember,
} = require("../controllers/mongo.controllers");
let router = Router();
router.get("/member", getAllFacultyMembers);
router.post("/member", addFacultyMember);
router.delete("/member/:id", deleteFacultyMember);

module.exports = router;
