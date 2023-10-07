const { MongoClient, ObjectId } = require('mongodb');
const uri = "mongodb://127.0.0.1:27017"
const client = new MongoClient(uri)


module.exports = {
    getList: async () => {
        let list = client
            .db("testtodos")
            .collection("todos")
            .find({})
            .sort({ timestamp: -1 })
        const response = await list.toArray()
        return response
    },
    addTask: async (task) => {
        task.timestamp = Date.now()
        let response = await client
            .db("testtodos")
            .collection("todos")
            .insertOne(task)
        return response
    },
    deleteTask: async (_id) => {
        let response = await client
            .db("testtodos")
            .collection("todos")
            .deleteOne({ "_id": new ObjectId(_id) })
        return response
    },
    editTask: async ({ _id, task }) => {
        let response = await client
            .db("testtodos")
            .collection("todos")
            .updateOne({ "_id": new ObjectId(_id) }, { $set: { task, updatedOn: Date.now() } })
        return response
    }
}

process.on("SIGINT", () => {
    client.close()
    process.exit(0)
})
