export const GET_USERS = 'CampusLife/repos/LOAD';
export const GET_USERS_SUCCESS = 'CampusLife/repos/LOAD_SUCCESS';
export const GET_USERS_FAIL = 'CampusLife/repos/LOAD_FAIL';


export default function Reducer(state = {users: []}, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state, ...{loading: true}
            };
        case GET_USERS_SUCCESS:
            return {...state, ...{loading: false, users: action.payload.data}};

        case GET_USERS_FAIL:
            return {
                ...state,
                ...{
                    loading: false,
                    error: 'Error while fetching repositories'
                }
            };
        default:
            return state;
    }
}

export function listRepos() {
    return {
        type: GET_USERS,
        payload: {
            request: {
                url: `/api/users`
            }
        }
    };
}