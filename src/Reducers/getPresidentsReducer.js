export const getPresidentsReducer = (state =[], action) => {
    switch(action.type) {
        case 'GET_PRESIDENTS':
        return action.presidents;
        default:
        return state;
    }
}