import Cookies from "js-cookie";
const initialState = {
    session: null,
    user: [],
    banners:[],
    rol: "",
}
function rootreducer(state = initialState, action) {
    switch (action.type) {
        case 'REGISTER':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGIN':
            return {
                ...state,
                session: action.payload,
                rol: action.payload.user.role,
            }
        case 'LOGOUT':
            Cookies.remove('session')
            return {
                ...state,
                session: null,
                user: {},
                rol: ""
            };
        case 'GET_BANNER':
            return{
                ...state,
                banners:action.payload
            }
        

        default:
            return state;
    }
}

export default rootreducer;