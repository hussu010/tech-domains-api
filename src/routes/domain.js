const express = require("express");
const router = express.Router();

const { getAllDomains } = require("../controllers/domain");

router.get("/", getAllDomains);

module.exports = router;
