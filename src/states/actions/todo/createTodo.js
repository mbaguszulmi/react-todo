export const createTodo = (title, description) => {
    dispatch({
        type: 'CREATE_TODO',
        data: {
            title: title,
            description: description,
            status: 0,
            createdAt: new Date().getTime()
        }
    })
}
