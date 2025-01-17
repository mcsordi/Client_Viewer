import * as type from "../useReducer/action"
export const reducer = (state: { state: string[] }, action: { type: string }) => {
    switch (action.type) {
        case type.SAVE_TYPE: {
            return console.log("salvar")
        } case type.SAVE_BACK_TYPE: {
            return console.log("salvar e voltar")
        } case type.DELETE_TYPE: {
            return console.log("apagar")
        } case type.NEW_TYPE: {
            return console.log("novo")
        }
        case type.BACK_TYPE: {
            return console.log("voltar")
        }
    }
    return { ...state }
}
