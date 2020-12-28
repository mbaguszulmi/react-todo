export const updateTodo = todoData => {
    dispatch({
        type: 'UPDATE_TODO',
        data: todoData
    })
}