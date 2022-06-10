/*
{
    uid: 'asdasdasdasdasd',
    name: 'pepe',
}
*/

import { types } from "../types/types";

// Definimos el estado inicial
export const authReducer = (state = {}, action) => {

    //Se recibe el action
    switch (action.type) {
        // Si el action es una acción de login
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
            }

        // Si el action es una acción de logout
        case types.logout:
            return {}

        default:
            return state;
    }

}