export const openModal = (id) => dispatch =>  {
    dispatch({
        type: 'OPEN_MODAL',
        data: id
    })
}