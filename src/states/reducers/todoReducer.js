export default (state = { }, action) => {
    switch (action.type) {
        case 'CREATE_TODO':
            const todos = state.todos
            if (todos === undefined || todos === null) {
                todos = []
            }
            let todoId = todos.length + 1
            todos.push({
                id: todoId,
                ...action.data
            })

            return {
                ...state,
                todos: todos
            }

        case 'UPDATE_TODO':
            const todos = state.todos
            todos[action.data.id-1] = action.data

            return {
                ...state,
                todos: todos
            }

        case 'DELETE_TODO':
            const todos = state.todos
            const index = action.data - 1
            if (index >= 0 && index < todos.length) {
                todos.splice(index, 1)
            }

            return {
                ...state,
                todos: todos
            }

        case 'LOAD_TODO_FROM_API':
            return {
                ...state,
                isLoadingData: action.data
            }
    
        default:
            return state;
            break;
    }
}
