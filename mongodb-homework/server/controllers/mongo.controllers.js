const { dbmodel } = require("../model/mongo.model");
const getAllFacultyMembers = async (req, res) => {
  try {
    const data = await dbmodel.find({});
    res.status(201).json(data);
  } catch (er) {
    console.log("god", er);
  }
};

const addFacultyMember = async (req, res) => {
  const { name, age, gender, exp, type, qualification } = req.body;
  try {
    await dbmodel.create({ name, age, gender, exp, type, qualification });
    // res.json(await dbmodel.find({}));
    // console.log(req.body);
  } catch (er) {
    console.log("god");
    console.log(er);
  }
};
const deleteFacultyMember = async (req, res) => {
  const _id = req.params.id;
  try {
    const data = await dbmodel.findByIdAndDelete({ _id });
    res.json("good");
  } catch (er) {
    console.log("god", er);
  }
};
module.exports = {
  addFacultyMember,
  getAllFacultyMembers,
  deleteFacultyMember,
};
