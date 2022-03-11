const express = require("express");
const router = express.Router();

const { getProjects, postMessage } = require("../controllers/auth");

router.get("/projects", getProjects);
router.post("/messages", postMessage)


module.exports = router;