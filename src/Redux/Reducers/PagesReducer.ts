import { ADD_USERS } from "../Actions/Pages";

interface InitialState {
    addUsers : any
}

const initial_state : InitialState = {
    addUsers : []
}

export const PagesReducer = ( store = initial_state, action : any) => {
    switch (action.type) {
        case ADD_USERS:
            return {
                ...store,
                addUsers : [...action.payload]
            }

        default:
            return store
    }
}