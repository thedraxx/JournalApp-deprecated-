import { types } from "../types/types";


// Definimos el estado inicial
const initialState = {
    loading: false,
    msgError: null,

}

export const uiReducer = (state = initialState, action) => {
    // Se recibe el action
    switch (action.type) {

        // Si el action es una acción para set el error de login o registro
        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload
            }

        // Si el action es una acción para remover el error de login o registro
        case types.uiRemoveError:
            return {
                ...state,
                msgError: null,
            }

        // Si el action es una acción para setear el loading
        case types.uiStartLoading:
            return {
                ...state,
                loading: true,
            }
        // Si el action es una acción para remover el loading
        case types.uiFinishLoading:
            return {
                ...state,
                loading: false,
            }

        default:
            return state;
    }
}