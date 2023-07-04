const express = require("express");
const router = express.Router();
const githubApiController = require("../controllers/githubApi.controller");

router.get("/getRepos", githubApiController.getRepos);

module.exports = router;
