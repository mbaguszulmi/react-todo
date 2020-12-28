export const openModal = (id) => {
    dispatch({
        type: 'OPEN_MODAL',
        data: id
    })
}