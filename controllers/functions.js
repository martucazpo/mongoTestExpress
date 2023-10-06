const strings = require("./strings")
const db = require("../db")

module.exports = {
    landOnFirstRoute: (req, res) => {
        res.sendFile("/public/index.html")
    },
    getAllTodos: async (req, res) => {
        let data = await db.getList()
        let taskStr = data.length <= 0 ? strings.emptyarray : data.reduce((a,b)=>a += strings.todostring(b), "")
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(JSON.stringify(taskStr))
    },
    addATodo: async (req, res) => {
        let task = req.body
        await db.addTask(task)
        let data = await db.getList()
        let taskStr = data.reduce((a,b)=>a += strings.todostring(b), "")
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(JSON.stringify(taskStr))
    },
    deleteATodo: async (req, res) => {
        let { _id } = req.params
        await db.deleteTask(_id)
        let data = await db.getList()
        let taskStr = data.length <= 0 ? strings.emptyarray : data.reduce((a,b)=>a += strings.todostring(b), "")
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(JSON.stringify(taskStr))
    },
    prepareToEdit: async (req, res) => {
        let { _id } = req.query
        let data = await db.getList()
        let taskStr = data.reduce((a,b)=> b._id.toString() === _id ? a += strings.formstring(b) : a += strings.todostring(b),"")
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(JSON.stringify(taskStr))
    },
    editATodo: async (req, res) => {
        console.log(req.body)
        await db.editTask(req.body)
        let data = await db.getList()
        let taskStr = data.reduce((a,b)=>a += strings.todostring(b), "")
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(JSON.stringify(taskStr))
    }
}