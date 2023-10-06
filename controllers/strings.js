module.exports = {
    emptyarray: `<li><h3>There is nothing to do!</h3></li>`,
    todostring: (todo) =>
        `<li>
        <div>
            <div>${todo.task}</div>
            <div>
                <button onclick="handleDelete('${todo._id}')">DELETE</button>
                <button onclick="prepareToEdit('${todo._id}')">EDIT</button>
            </div>
        </div>
    </li>`,
    formstring: (todo) =>
        `<li>
        <div>
            <form method="PUT" onsubmit="handleEdit(event, '${todo._id}'); return false">
                <label for="task">Task to change:</label>
                <input type="text" name="task" id="task" value="${todo.task}" required />
                <button type="submit">CHANGE</button>
            </form>
        </div>
    </li>`
}