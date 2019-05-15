
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TRUE = 'TOGGLE_TRUE';







export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const toggleTrue = (id) => {
    return{
        type: TOGGLE_TRUE,
        payload: id
    }
}


export default addTodo;