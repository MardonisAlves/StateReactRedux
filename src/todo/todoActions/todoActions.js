import axios from 'axios'
import {ClearNome ,ClearLocal , ClearValor ,ClearStatus , clearData} from './todoActionClear'

const URl = 'http://localhost:8000/api/'

export function changeValue(e) {
    console.log(e.target.value)
    return {
        type: 'VALUE_CHANGED',
        payload: e.target.value
    }
}

// onChangevalueNome
export function onChangevalueNome(e) {
    console.log(e.target.value)
    return {
        type: 'VALUE_CHANGED_NOME',
        payload: e.target.value
    }
}
// onChangevalueLocal
export function onChangevalueLocal(e) {
    console.log(e.target.value)
    return {
        type: 'VALUE_CHANGED_LOCAl',
        payload: e.target.value
    }
}
// onChangevalueValor
export function onChangevalueValor(e) {
    console.log(e.target.value)
    return {
        type: 'VALUE_CHANGED_VALOR',
        payload: e.target.value
    }
}

// onChangevalueStatus
export function onChangevalueStatus(e) {
    console.log(e.target.value)
    return {
        type: 'VALUE_CHANGED_STATUS',
        payload: e.target.value
    }
}

// onChangevalueDate
export function onChangevalueDate(e) {
    console.log(e.target.value)
    return {
        type: 'VALUE_CHANGED_DATA',
        payload: e.target.value
    }
}

// search
export function search() {
 const resp =  axios.get(`${URl}todolist`)
         return   {
                type: 'TODO_SEARCH',
                payload: resp
         }
}

// create method ADD e receber os parametros como objetos
export const add = (todoList ) => {
   console.log(todoList)
   return dispatch => {
        axios.post(`${URl}store`, todoList)
        .then(todo => dispatch({type:'ADD_TODO_LIST' , payload:todo.data}))
        .then(todo => dispatch(search()))
        .then(todo => dispatch(ClearNome()))
        .then(todo => dispatch(ClearLocal()))
        .then(todo => dispatch(ClearValor()))
        .then(todo => dispatch(ClearStatus()))  
        .then(todo => dispatch(clearData()))  
        // menssagem de sucesso  'react-redux-toastr'
    }
}

// delete todo list by id
export const deleteTodolist = (id) => {
    return dispatch => {
        axios.delete(`${URl}delete/${id}`)
        .then(todo => dispatch(search()))
    }
}

// update todo list by id





