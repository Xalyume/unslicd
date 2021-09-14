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
    console.log("GET fetch request to backend", typeof slices) // gets back object
    console.log("GET fetch request to backend", slices) // gets back object
    console.log(slices[0])

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
    let newState;
    switch (action.type) {
        case GET_SLICE:
            newState = {...action.slices}
            return newState;
        case ADD_SLICE:
            newState = Object.assign({}, state);
            newState = action.payload;
            return newState;
        default:
            return state;
    }
};

export default sliceReducer;
