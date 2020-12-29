export const normalizeTodo = (todos) => {
    for (let i = 0; i < todos.length - 1; i++) {
        let index = i;
        for (let j = i+1; j < todos.length; j++) {
            const e1 = todos[index].id;
            const e2 = todos[j].id;

            if (e2 < e1) {
                index = j
            }
        }
        
        if (i !== index) {
            let temp = todos[i];
            todos[i] = todos[index];
            todos[index] = temp
        }
    }

    return todos;
}

export const findTodoWithId = (todos, id) => {
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        if (todo.id == id) {
            return i
        }
    }

    return -1
}

export const sortTodoByDate = (todos, descending = false) => {
    for (let i = 0; i < todos.length - 1; i++) {
        let index = i;
        for (let j = i+1; j < todos.length; j++) {
            const e1 = todos[index].createdAt;
            const e2 = todos[j].createdAt;
            if (!descending) {
                if (e2 < e1) {
                    index = j
                }
            }
            else {
                if (e2 > e1) {
                    index = j
                }
            }
        }
        
        if (i !== index) {
            let temp = todos[i];
            todos[i] = todos[index];
            todos[index] = temp
        }
    }

    return todos;
}

export const filterTodos = (todos, completed = false) => {
    todos = sortTodoByDate(todos, completed)
    let newTodos = []

    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        if (todo.status === (completed ? 1 : 0)) {
            newTodos.push(todo)
        }
    }

    return newTodos
}
