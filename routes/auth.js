const express = require("express");
const router = express.Router();

const { getProjects, getProjectByName, postMessage } = require("../controllers/auth");

router.get("/projects", getProjects);
router.get("/projects/:name", getProjectByName)
router.post("/messages", postMessage)


module.exports = router;