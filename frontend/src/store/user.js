import { csrfFetch } from './csrf';

const GET_USER = "user/GET"

const get = user => ({
    type: GET_USER,
    user,
})


export const getUser = (id) => async dispatch => {
    const response = await csrfFetch(`/api/users/${id}`)
    const user = await response.json();

    dispatch(get(user));
}

const initialState = {};

const userReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_USER:
            newState = {...action.user}
            // console.log("this is action.user", action.user)
            return newState;
        default:
            return state;
    }
};

export default userReducer;
