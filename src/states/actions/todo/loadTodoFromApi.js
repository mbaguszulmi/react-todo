export const loadTodoFromApi = isLoading => {
    dispatch({
        type: 'LOAD_TODO_FROM_API',
        data: isLoading
    })
}
