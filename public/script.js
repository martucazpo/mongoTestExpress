const makeList = (str) => {
    let list = document.getElementById("listUL")
    list.innerHTML = ""
    list.innerHTML = str
}

const api = async (url = "", method = "", data = {}) => {
    await fetch(url, Object.keys(data).length > 0 ? { method, headers: { "Content-Type": "application/json" }, body: data } : { method })
        .then(res => res.json())
        .then(data => makeList(data))
}

const getFetch = async () => {
    await api("/todos/getall", "GET")
}

const prepareToEdit = (id) => {
    api(`/todos/prepareforedit?_id=${id}`, "GET")
}

const addTask = async (e) => {
    e.preventDefault()
    let task = e.target.children[2].value
    e.target.children[2].value = ""
    let data = JSON.stringify({ task })
    api(`/todos/add`, "POST", data)
}

const handleDelete = async (id) => {
    api(`/todos/${id}/delete`, 'DELETE')
}

const handleEdit = async (e, id) => {
    e.preventDefault()
    let task = e.target.children[1].value
    let data = JSON.stringify({ _id:id, task })
    api(`/todos/edit`, "PUT", data)
}

document.addEventListener("DOMContentLoaded", () => getFetch())

