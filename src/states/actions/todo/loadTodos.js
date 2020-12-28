export const loadTodos = todoList => dispatch => {
    dispatch({
        type: 'LOAD_TODOS',
        data: todoList
    })
}
