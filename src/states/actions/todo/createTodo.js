export const createTodo = (title, details) => {
    dispatch({
        type: 'CREATE_TODO',
        data: {
            title: title,
            details: details,
            createdOn: new Date().getTime()
        }
    })
}
