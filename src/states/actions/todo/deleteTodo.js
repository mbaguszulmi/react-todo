export const deleteTodo = id => {
    dispatch({
        type: 'DELETE_TODO',
        data: id
    })
}
