import { csrfFetch } from './csrf';

const GET_STORE = "slice/GET"
const ADD_STORE = "slice/ADD"
const EDIT_STORE = "slice/EDIT"
const DEL_STORE = "slice/DELETE"


const get = slices => ({
    type: GET_STORE,
    slices,
})

const add = slice => ({
    type: ADD_STORE,
    slice,
})

const edit = id => ({
    type: EDIT_STORE,
    id
})

const del = slice => ({
    type: DEL_STORE,
    slice
})

export const addStore = (storeData) => async dispatch => {
    const { name, location, description, addedBy } = storeData

    console.log("storeData from form", storeData)
    const response = await csrfFetch('/api/stores', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            location,
            description,
            addedBy
        })
    });

    if (response.ok) {
        const newStore = await response.json();
        dispatch(add(newStore));
        return newStore;
    }
}


const initialState = {};

const storeReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_STORE:
            newState = Object.assign({}, state)
            newState[action.store.id] = action.store
            return newState;
        default:
            return state;
    }
};

export default storeReducer;
