export const SIGN_UP_DATA = 'SIGN_UP_DATA';
export const SIGN_UP = 'SIGN_UP';

export const SIGN_IN = 'SIGN_IN';
export const RESET_PASSWORD = 'RESET_PASSWORD';

// export const signUpData = (payload : {}) => ({
//     type : SI
// })

export const signUp = (payload : {}) => ({
        type : SIGN_UP,
        payload
})

export const signIn = (payload : {}) => ({
    type : SIGN_IN,
    payload
})

export const resetPassword = (payload : string) => ({
    type : RESET_PASSWORD,
    payload
})