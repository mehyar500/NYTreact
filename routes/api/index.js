const router = require("express").Router();
const savedRoutes = require("./saved.js");

// Saved routes
router.use("/saved", savedRoutes);

module.exports = router;
