import { RESET_PASSWORD, SIGN_IN, SIGN_UP } from "../Actions/Authentication";

interface InitialState {
    signup : {},
    login : {},
    resetPassword : ""
}

const initial_state : InitialState = {
    signup : {},
    login : {},
    resetPassword : ""
}

export const AuthReducer = ( store = initial_state, action : any) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...store,
                signup : {...action.payload}
            }
        case SIGN_IN:
            return {
                ...store,
                login : {...action.payload}
            }    
        case RESET_PASSWORD: 
            return action.payload

        default:
            return store
    }
}