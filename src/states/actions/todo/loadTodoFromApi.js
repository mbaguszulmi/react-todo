export const loadTodoFromApi = isLoading => dispatch => {
    dispatch({
        type: 'LOAD_TODO_FROM_API',
        data: isLoading
    })
}
