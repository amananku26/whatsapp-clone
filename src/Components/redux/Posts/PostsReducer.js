import {SET_USER} from "./ActionTypes"

export const initState = {
    UserData: null,
};


const PostReducer = (state = initState, {type, payload}) => { // console.log(payload)
    switch (type) {
        case SET_USER:
            return {
                ...state,
                UserData: payload
            }
        default:
            return state
    }
}

export default PostReducer
