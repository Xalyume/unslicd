import { csrfFetch } from './csrf';

const GET_USERS = "user/GET"

const get = users => ({
    type: GET_USERS,
    users,
})

export const getUsers = () => async dispatch => {
    const response = await csrfFetch('/api/users')
    const users = await response.json();

    dispatch(get(users));
}

const initialState = {};

const userReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_USERS:
            newState = {}
            action.users.forEach(user => newState[user.id] = user)
            return newState;
        default:
            return state;
    }
};

export default userReducer;
