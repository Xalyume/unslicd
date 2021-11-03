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

const del = id => ({
    type: DEL_SLICE,
    id
})

const edit = slice => ({
    type: EDIT_SLICE,
    slice
})

export const getSlices = () => async dispatch => {
    const response = await csrfFetch('/api/pizzaslices')

    const slices = await response.json();

    dispatch(get(slices));
}

export const addSlice = (sliceData) => async dispatch => {
    const { name, description, addedBy } = sliceData

    const response = await csrfFetch('/api/pizzaslices', {
        method: "POST",
        // headers: {
        //     "Content-Type": "application/json"
        // },
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

export const deleteSlice = (id) => async dispatch => {

    const response = await csrfFetch(`/api/pizzaslices/${id}`, {
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

export const editSlice = (sliceData) => async dispatch => {
    const { id, name, description } = sliceData

    const response = await csrfFetch(`/api/pizzaslices/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id,
            name,
            description,
        })
    });

    if (response.ok) {
        dispatch(edit(sliceData));
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
            const newSlice = action.slice
            addState = { ...state, newSlice };
            return addState;
        case DEL_SLICE:
            const toDelete = action.id;
            let updateState = { ...state };

            return updateState
        case EDIT_SLICE:
            const editStates= {...state}
            editStates[action.slice.id] = action.slice
            return editStates
        default:
            return state;
    }
};

export default sliceReducer;
