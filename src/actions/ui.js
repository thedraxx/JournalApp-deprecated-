import { types } from "../types/types";

// Seteamos el error y enviamos el action al reducer ui
export const setError = (err) => ({
    type: types.uiSetError,
    payload: err
})

// Seteamos el remover errror y enviamos el action al reducer ui
export const RemoveError = () => ({
    type: types.uiRemoveError,
})

// Seteamos el loading y enviamos el action al reducer ui
export const StartLoading = () => ({
    type: types.uiStartLoading
})

// Seteamos el remover loading y enviamos el action al reducer ui
export const FinishLoading = () => ({
    type: types.uiFinishLoading,
})