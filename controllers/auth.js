const Project = require("../models/Projects");
const Message = require("../models/Messages");

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

exports.getProjectByName = (req, res) => {
  const { name } = req.params;
  Project.find({name: name}).then((proj) => {
    if (!proj) {
      return res.status(404).json({
        errors: [{ user: `Project ${name} cannot be found` }],
      });
    } else {
      return res.status(200).json({
        success: true,
        message: proj,
      });
    }
  });
};
