export const updateTodo = todoData => dispatch => {
    dispatch({
        type: 'UPDATE_TODO',
        data: todoData
    })
}