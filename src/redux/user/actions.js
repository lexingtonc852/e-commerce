export function setCurrentUser(user){
    return{
        type: userActionTypes.SET_CURRENT_USER,
        user
    }
}

export const userActionTypes = {
    SET_CURRENT_USER: "SET_CURRENT_USER"
}