const router = require("express").Router()
const controllers = require("../controllers")
const todoRoutes = require("./todoRoutes")

router.route("/").get(controllers.land)
router.use("/todos", todoRoutes)

module.exports = router