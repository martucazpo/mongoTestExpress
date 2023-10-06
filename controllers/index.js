const functions = require("./functions")

module.exports = {
    land: functions.landOnFirstRoute,
    getTodos: functions.getAllTodos,
    addTodo: functions.addATodo,
    deleteTodo: functions.deleteATodo,
    prepareForEdit: functions.prepareToEdit,
    editTodo: functions.editATodo
}