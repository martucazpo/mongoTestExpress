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
        //const response = JSON.stringify(arr)
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
        await client
            .db("testtodos")
            .collection("todos")
            .deleteOne({ "_id": new ObjectId(_id) })
    },
    editTask: async ({_id, task}) => {
        await client
        .db("testtodos")
        .collection("todos")
        .updateOne({"_id": new ObjectId(_id)}, { $set:{task, updatedOn: Date.now()}})
    }
}
