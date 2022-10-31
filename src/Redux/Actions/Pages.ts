export const ADD_USERS = 'ADD_USERS';
export const RENDER = 'RENDER';

export const addUsers = (payload : {}) => ({
        type : ADD_USERS,
        payload
})

export const render = (payload : any) => ({
        type : RENDER,
        payload
})
