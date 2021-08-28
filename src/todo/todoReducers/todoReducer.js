import Switch from "react-bootstrap/esm/Switch"

const INITIAL_STATE = {
    value: 'Consulta de dados',
    list: [],
    // criar uma propriedade todolist com state inicial
    nome: '',
    local: '',
    valor: '',
    status: '',
    data: '',
    valueTrue:1,
    valueFalse:0

}

export default function filedReducer(state = INITIAL_STATE, action) {

    // Actions
    switch (action.type) {
        case 'VALUE_CHANGED':
            return { ...state, value: action.payload }
        case 'TODO_SEARCH':
            return { ...state, list: action.payload.data }
        case 'VALUE_CHANGED_NOME':
            return { ...state, nome: action.payload }
        case 'VALUE_CHANGED_LOCAl':
            return { ...state, local: action.payload }
        case 'VALUE_CHANGED_VALOR':
            return { ...state, valor: action.payload }
        case 'VALUE_CHANGED_STATUS':
            return { ...state, status: action.payload }
        case 'VALUE_CHANGED_DATA':
            return { ...state, data: action.payload }
        case 'ADD_TODO_LIST':
            return { ...state, list: '' }
        case 'CLEAR_NOME':
            return { ...state, nome: '' }
        case 'CLEAR_LOCAL':
            return { ...state, local: '' }
        case 'CLEAR_VALOR':
            return { ...state, valor: ''}
        case 'CLEAR_STATUS':
            return { ...state, status: ''}
        case 'CLEAR_DATA':
            return { ...state, data: ''}
        default:
            return state
    }



}