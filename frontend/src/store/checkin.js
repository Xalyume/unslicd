import { csrfFetch } from './csrf';

const GET_CHECK = "checkIn/GET"
const ADD_CHECK = "checkIn/ADD"
const DEL_CHECK = "checkIn/DELETE"
const GET_ALL_CHECK = "checkIn/GET_ALL"

const get = checkIns => ({
    type: GET_CHECK,
    checkIns,
})

const getAll = checkIns => ({
    type: GET_ALL_CHECK,
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

export const getCheckIn = () => async dispatch => {
    const response = await csrfFetch('/api/checkins')

    const checkIns = await response.json();

    dispatch(get(checkIns));
}


export const addCheckIn = (checkInData) => async dispatch => {
    const { storeId, userId, sliceId, review, rating, image } = checkInData

    const response = await csrfFetch('/api/checkins', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            storeId,
            userId,
            sliceId,
            review,
            rating,
            image
        })
    });

    if (response.ok) {
        const newCheckIn = await response.json();
        dispatch(add(newCheckIn));
        return newCheckIn;
    }
}

export const deleteCheckin = (id) => async dispatch => {

    const response = await csrfFetch(`/api/checkins/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id
        })
    });

    if (response.ok) {
        dispatch(del(id));
    }
}

export const getAllCheckIn = () => async dispatch => {
    const response = await csrfFetch('/api/checkins/all')

    const checkIns = await response.json();

    dispatch(getAll(checkIns));
}

const initialState = {};

const checkInReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_CHECK:
            newState = {}
            action.checkIns.forEach((checkIn) => newState[checkIn.id] = checkIn)
            return newState;
        case GET_ALL_CHECK:
            newState = {}
            action.checkIns.forEach((checkIn) => newState[checkIn.id] = checkIn)
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
