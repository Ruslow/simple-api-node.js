const Framework = require("../models/framework");

const getFrameworks = async (req, res) => {
  const { name } = req.query;
  if (name) {
    let regName = new RegExp(`${name}`, "i");
    const namedFrameworks = await Framework.find({ name: regName });
    return res.status(200).json(namedFrameworks);
  }
  const frameworks = await Framework.find();
  res.status(200).json(frameworks);
};

module.exports = { getFrameworks };
