export function googleSignInStart(){
    return{
        type: userActionTypes.GOOGLE_SIGN_IN_START
    }
}

export function emailSignInStart(emailAndPassword){
    return{
        type: userActionTypes.EMAIL_SIGN_IN_START,
        emailAndPassword
    }
}

export function signInSuccess(user){
    return{
        type: userActionTypes.SIGN_IN_SUCCESS,
        user
    }
}

export function signInFailure(error){
    return{
        type: userActionTypes.SIGN_IN_FAILURE,
        error
    }
}

export function checkUserSession(){
    return{
        type: userActionTypes.CHECK_USER_SESSION
    }
}

export function signOutStart(){
    return {
        type: userActionTypes.SIGN_OUT_START
    }
}

export function signOutSuccess(){
    return {
        type: userActionTypes.SIGN_OUT_SUCCESS
    }
}
export function signOutFailure(error){
    return {
        type: userActionTypes.SIGN_OUT_FAILURE,
        error
    }
}

export function signUpStart(userCredentials){
    return {
        type: userActionTypes.SIGN_UP_START,
        userCredentials
    }
}

export function signUpSuccess({ user, additionalData }){
    return {
        type: userActionTypes.SIGN_UP_SUCCESS,
        payload: {user, additionalData}
    }
}

export function signUpFailure(error){
    return {
        type: userActionTypes.SIGN_UP_FAILURE,
        error
    }
}

export const userActionTypes = {
    SET_CURRENT_USER: "SET_CURRENT_USER",
    GOOGLE_SIGN_IN_START: "GOOGLE_SIGN_IN_START",
    EMAIL_SIGN_IN_START: "EMAIL_SIGN_IN_START",
    SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
    SIGN_IN_FAILURE: "SIGN_IN_FAILURE",
    CHECK_USER_SESSION: "CHECK_USER_SESSION",
    SIGN_OUT_START: "SIGN_OUT_START",
    SIGN_OUT_SUCCESS: "SIGN_OUT_SUCCESS",
    SIGN_OUT_FAILURE: "SIGN_OUT_FAILURE",
    SIGN_UP_START: "SIGN_UP_START",
    SIGN_UP_SUCCESS: "SIGN_UP_SUCCESS",
    SIGN_UP_FAILURE: "SIGN_UP_FAILURE",
}