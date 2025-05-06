const mongo = require("mongoose");
const users = new mongo.Schema({
  name: String,
  age: Number,
  gender: String,
  exp: Number,
  type: String,
  qualification: String,
});
const dbmodel = mongo.model("group", users);
module.exports = { dbmodel };
