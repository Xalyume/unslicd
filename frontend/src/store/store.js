import { csrfFetch } from './csrf';

const GET_STORE = "slice/GET"
const ADD_STORE = "slice/ADD"
const EDIT_STORE = "slice/EDIT"
const DEL_STORE = "slice/DELETE"

const initialState = {};

const storeReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
    }
};

export default storeReducer;
