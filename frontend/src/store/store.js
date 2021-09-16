import { csrfFetch } from './csrf';

const GET_STORE = "store/GET"
const ADD_STORE = "store/ADD"
const EDIT_STORE = "store/EDIT"
const DEL_STORE = "store/DELETE"


const get = stores => ({
    type: GET_STORE,
    stores,
})

const add = store => ({
    type: ADD_STORE,
    store,
})

const edit = store => ({
    type: EDIT_STORE,
    store
})

const del = id => ({
    type: DEL_STORE,
    id
})

export const getStores = () => async dispatch => {
    const response = await csrfFetch('/api/stores')

    const stores = await response.json();

    dispatch(get(stores));
}

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

export const editStore = (storeData) => async dispatch => {
    const { id, name, location, description } = storeData

    const response = await csrfFetch(`/api/stores/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id,
            name,
            location,
            description
        })
    });

    if (response.ok) {
        dispatch(edit(storeData));
    }
}

export const deleteStore = (id) => async dispatch => {

    const response = await csrfFetch(`/api/stores/${id}`, {
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


const initialState = {};

const storeReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_STORE:
            newState = {}
            action.stores.forEach(store => newState[store.id] = store)
            return newState;
        case ADD_STORE:
            newState = Object.assign({}, state)
            newState[action.store.id] = action.store
            return newState;
        case EDIT_STORE:
            newState = Object.assign({}, state)
            newState[action.store.id] = action.store
            return newState
        case DEL_STORE:
            newState = Object.assign({}, state)
            delete newState[action.id]
            return newState
        default:
            return state;
    }
};

export default storeReducer;
