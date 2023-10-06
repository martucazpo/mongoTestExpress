const router = require("express").Router()
const controllers = require("../controllers")

router.route("/getall").get(controllers.getTodos)
router.route("/add").post(controllers.addTodo)
router.route("/:_id/delete").delete(controllers.deleteTodo)
router.route("/prepareforedit").get(controllers.prepareForEdit)
router.route("/edit").put(controllers.editTodo)

module.exports = router