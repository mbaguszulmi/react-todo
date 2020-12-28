export default (state = { }, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {
                ...state,
                openModal: action.data
            }
    
        default:
            return state;
    }
}