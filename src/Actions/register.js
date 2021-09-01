
import types from '../Types/type'

export const registerError = (err) => ({
    type: types.registerError,
    payload: err
}) 

export const removeError = () => ({
    type: types.removeError
})