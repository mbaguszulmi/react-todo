export const deleteTodo = id => dispatch => {
    dispatch({
        type: 'DELETE_TODO',
        data: id
    })
}
