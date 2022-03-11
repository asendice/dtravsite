const Project = require("../models/Projects");
const Message = require("../models/Messages");

// get and return all projects
exports.getProjects = (req, res) => {
  Project.find().then((proj) => {
    if (!proj) {
      return res.status(404).json({
        errors: [{ user: "Projects cannot be found" }],
      });
    } else {
      return res.status(200).json({
        success: true,
        message: proj,
      });
    }
  });
};

exports.postMessage = (req, res) => {
  const { name, text } = req.body;
  const message = new Message({
    name,
    text,
  });
  message
    .save()
    .then((response) => {
      res.status(200).json({
        success: true,
        result: response,
      });
    })
    .catch((err) => {
      res.status(500).json({
        errors: [{ error: err }],
      });
    });
};
