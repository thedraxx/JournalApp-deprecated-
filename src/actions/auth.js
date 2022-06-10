import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebase-config"
import { FinishLoading, StartLoading } from "./ui";
import Swal from 'sweetalert2';

// Login con Email y Password
export const startLoginEmailPassowrd = (email, password) => {
    return (dispatch) => {
        // Seteamos el dispatch startloading 
        dispatch(StartLoading());
        // Usamos Firebase para decirle que inicie sesion con email y password
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                // Si todo sale bien, despachamos el action de finalizar el loading
                dispatch(FinishLoading())
                // Si todo sale bien, despachamos el action de login con el uid y el displayname
                dispatch(login(user.uid, user.displayName));
            })
            // Si hay un error, despachamos el action de finalizar el loading
            .catch(e => {
                // Usamos sweetalert2 para mostrar el error
                Swal.fire('Error', e.message, 'error');
                dispatch(FinishLoading())
            })
    }
}

// Registro con Email y Password
//Se recibe el name, email y el password del usuario
export const startRegisterWithEmailPasswordName = (name, email, password) => {
    return (dispatch) => {
        // le decimos a Firebase que el registro es con email y password
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name });
                // Si todo sale bien, despachamos el login con el uid y el displayname
                dispatch(
                    login(user.uid, user.displayName)
                );
            })
            // Si hay un error, despachamos un console.log
            .catch(e => {
                // Usamos sweetalert2 para mostrar el error
                Swal.fire('Error', e.message, 'error');
            })
    }
}

// Login con Google
export const startGoogleLogin = () => {
    return (dispatch) => {
        // Le decimos a Firebase que inicie sesion con google
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                // Si todo sale bien, despachamos el action de login con el uid y el displayname
                dispatch(
                    login(user.uid, user.displayName)
                )
            });
    }
}

// Esta funcion se ejecuta cuando el usuario hace login, envia el type y payload al reducer
export const login = (uid, displayname) => ({
    type: types.login,
    payload: {
        uid,
        displayname,
    }
});

// Estafuncion inicia el logout, le dice a firebase que quiere deslogearse para despues llamar al logout
export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
    }
};

// Esta funcion se ejecuta cuando el usuario hace logout, envia el type al reducer
export const logout = () => ({
    type: types.logout,
})