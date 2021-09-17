import { csrfFetch } from './csrf';

const GET_CHECK = "checkIn/GET"
const ADD_CHECK = "checkIn/ADD"
const DEL_CHECK = "checkIn/DELETE"

const get = checkIns => ({
    type: GET_CHECK,
    checkIns,
})

const add = checkIn => ({
    type: ADD_CHECK,
    checkIn,
})

const del = id => ({
    type: DEL_CHECK,
    id
})


const initialState = {};

const checkInReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_CHECK:
            newState = {}
            action.checkIns.forEach(checkIn => newState[checkIn.id] = checkIn)
            return newState;
        case ADD_CHECK:
            newState = Object.assign({}, state)
            newState[action.checkIn.id] = action.checkIn
            return newState;
        case DEL_CHECK:
            newState = Object.assign({}, state)
            delete newState[action.id]
            return newState
        default:
            return state;
    }
};

export default checkInReducer;
