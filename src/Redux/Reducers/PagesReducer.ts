import { ADD_USERS, RENDER } from "../Actions/Pages";

interface InitialState {
    addUsers : any,
    render : boolean
}

const initial_state : InitialState = {
    addUsers : [],
    render : false
}

export const PagesReducer = ( store = initial_state, action : any) => {
    switch (action.type) {
        case ADD_USERS:
            return {
                ...store,
                addUsers : [...action.payload]
            }
        case RENDER :
            return {
                ...store,
                render : false
            }    

        default:
            return store
    }
}