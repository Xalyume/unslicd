import { csrfFetch } from './csrf';

const GET_SLICE = "slice/GET"
const ADD_SLICE = "slice/ADD"
const EDIT_SLICE = "slice/EDIT"
const DEL_SLICE = "slice/DELETE"

const get = slices => ({
    type: GET_SLICE,
    slices,
})

const add = slice => ({
    type: ADD_SLICE,
    slice,
})


export const getSlices = () => async dispatch => {
    const response = await csrfFetch('/api/slices')

    const slices = await response.json();

    dispatch(get(slices));
}

export const addSlice = (sliceData) => async dispatch => {
    const { name, description, addedBy } = sliceData

    // console.log("sliceData from form", sliceData)
    const response = await csrfFetch('/api/slices', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            description,
            addedBy
        })
    });

    if (response.ok) {
        const newSlice = await response.json();
        dispatch(add(newSlice));
        return newSlice;
    }
}

const initialState = {};

const sliceReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SLICE:
            let newState = {};
            action.slices.forEach(slice => newState[slice.id] = slice)
            return newState;
        case ADD_SLICE:
            let addState = {};
            const newSlice = action.payload
            addState = {...state, newSlice};
            return addState;
        default:
            return state;
    }
};

export default sliceReducer;
