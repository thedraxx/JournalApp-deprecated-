import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebase-config"

export const startLoginEmailPassowrd = (email, password) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                );
            })
            .catch(e => console.log(e))
    }
}

export const startRegisterWithEmailPasswordName = (name, email, password) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name });
                dispatch(
                    login(user.uid, user.displayName)
                );
            })
            .catch(e => console.log(e))
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            });
    }
}

export const login = (uid, displayname) => ({
    type: types.login,
    payload: {
        uid,
        displayname,
    }
});
