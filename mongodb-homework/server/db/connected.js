const mongo = require("mongoose");
const connect = async (uri) => {
  try {
    mongo.connect(uri);
  } catch (er) {
    console.log(er);
  }
};
module.exports = { connect };
